import type { Locale } from '../context/LanguageContext';
import type { SiteContent } from './types';

const CACHE_PREFIX = 'site-content-cache-';

function cacheKey(locale: Locale): string {
	return `${CACHE_PREFIX}${locale}`;
}

export function getCachedContent(locale: Locale): SiteContent | null {
	try {
		const raw = localStorage.getItem(cacheKey(locale));
		return raw ? (JSON.parse(raw) as SiteContent) : null;
	} catch {
		return null;
	}
}

function setCachedContent(locale: Locale, content: SiteContent): void {
	try {
		localStorage.setItem(cacheKey(locale), JSON.stringify(content));
	} catch {
		// localStorage unavailable (private browsing, quota exceeded) — caching is best-effort
	}
}

export async function fetchLocaleContent(locale: Locale): Promise<SiteContent | null> {
	try {
		const response = await fetch(`/api/content?locale=${locale}`);
		if (!response.ok) {
			return null;
		}
		const content = (await response.json()) as SiteContent;
		setCachedContent(locale, content);
		return content;
	} catch {
		return null;
	}
}

export function scheduleIdleFetch(callback: () => void): void {
	if (typeof requestIdleCallback === 'function') {
		requestIdleCallback(callback);
	} else {
		setTimeout(callback, 1000);
	}
}
