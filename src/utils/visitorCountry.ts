const COUNTRY_PATTERN = /^[A-Z]{2}$/;

// Reads the IP-derived country set by the root `middleware.ts`. A
// `?country=XX` query param overrides it, for testing locally where
// `vercel dev` has no geo data.
export const getVisitorCountry = (): string | null => {
	const override = new URLSearchParams(window.location.search)
		.get('country')
		?.toUpperCase();
	if (override && COUNTRY_PATTERN.test(override)) {
		return override;
	}

	const match = document.cookie.match(/(?:^|;\s*)country=([A-Z]{2})(?:;|$)/);
	return match ? match[1] : null;
};
