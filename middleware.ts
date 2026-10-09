import { geolocation, next } from '@vercel/functions';

// Only the HTML document request needs this — assets and /api don't.
export const config = { matcher: '/' };

// Exposes the visitor's IP-derived country to the client as a cookie, so the
// SPA can read it synchronously before first render (initial locale + which
// contact office to show). No browser geolocation permission involved.
const middleware = (request: Request): Response => {
	const { country } = geolocation(request);

	if (!country) {
		return next();
	}

	return next({
		headers: {
			'set-cookie': `country=${country}; Path=/; SameSite=Lax; Secure; Max-Age=86400`,
		},
	});
};

export default middleware;
