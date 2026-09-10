import { useEffect, useRef, useState } from 'react';

const REVEAL_THRESHOLD_PX = 200;

// Shows the sticky toggle bar once the given element (Hero) has scrolled out
// of view, but only after the user has scrolled back up by more than
// REVEAL_THRESHOLD_PX without an intervening downward scroll — this avoids
// flickering the bar in and out on small scroll wobbles.
export function useStickyToggleVisibility(targetSelector: string) {
	const [targetVisible, setTargetVisible] = useState(true);
	const [revealed, setRevealed] = useState(false);
	const lastScrollY = useRef(0);
	const upAccumulator = useRef(0);

	useEffect(() => {
		const targetEl = document.querySelector(targetSelector);
		if (!targetEl) {
			return;
		}

		const observer = new IntersectionObserver(([entry]) => {
			setTargetVisible(entry.isIntersecting);
		});
		observer.observe(targetEl);

		return () => observer.disconnect();
	}, [targetSelector]);

	useEffect(() => {
		lastScrollY.current = window.scrollY;
		let ticking = false;

		function handleScroll() {
			if (ticking) {
				return;
			}
			ticking = true;

			requestAnimationFrame(() => {
				const currentY = window.scrollY;
				const delta = currentY - lastScrollY.current;

				if (delta > 0) {
					upAccumulator.current = 0;
					setRevealed(false);
				} else if (delta < 0) {
					upAccumulator.current += -delta;
					if (upAccumulator.current >= REVEAL_THRESHOLD_PX) {
						setRevealed(true);
					}
				}

				lastScrollY.current = currentY;
				ticking = false;
			});
		}

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return !targetVisible && revealed;
}
