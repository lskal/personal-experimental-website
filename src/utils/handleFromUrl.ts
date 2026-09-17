export const handleFromUrl = (url: string) => {
	try {
		const segments = new URL(url).pathname.split('/').filter(Boolean);
		return segments.at(-1) ?? url;
	} catch {
		return url;
	}
};
