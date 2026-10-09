import type { ContactOffice, OfficeCountry } from '../types/content';
import type { Locale } from '../types/context';

// The locale each office's country lands on by default (see getInitialLocale).
// A visitor only gets the single local office when both their IP country and
// the active locale match it — switching language, or any other country,
// shows every office.
const HOME_LOCALE: Record<OfficeCountry, Locale> = {
	IT: 'it',
	PL: 'en',
};

export const visibleOffices = (
	offices: ContactOffice[] | undefined,
	country: string | null,
	locale: Locale,
): ContactOffice[] => {
	// Content cached in localStorage before `offices` existed won't have it —
	// rendered briefly until the fresh fetch replaces it.
	if (!offices) {
		return [];
	}
	const match = offices.find(office => office.country === country);
	return match && HOME_LOCALE[match.country] === locale ? [match] : offices;
};

export const telHref = (phone: string): string => {
	return `tel:${phone.replace(/\s+/g, '')}`;
};
