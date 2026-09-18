import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';
import { Toggle } from '../Toggle/Toggle';

const scrollToTop = () => {
	const prefersReducedMotion = window.matchMedia(
		'(prefers-reduced-motion: reduce)',
	).matches;
	window.scrollTo({
		top: 0,
		behavior: prefersReducedMotion ? 'auto' : 'smooth',
	});
};

export const ScrollToTopToggle = () => {
	const { content } = useLanguage();
	const label = content.ui.a11y.scrollToTop;

	return (
		<Toggle onClick={scrollToTop} ariaLabel={label} title={label}>
			<ArrowUp size={20} />
		</Toggle>
	);
};
