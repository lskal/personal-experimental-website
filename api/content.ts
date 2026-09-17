import { get } from '@vercel/global-config';
import type { Locale } from '../src/types/context';
import type { SiteContent } from '../src/types/content';

export const config = { runtime: 'edge' };

const LOCALES: Locale[] = ['en', 'it'];

const isLocale = (value: string | null): value is Locale => {
	return LOCALES.includes(value as Locale);
};

const handler = async (request: Request): Promise<Response> => {
	const { searchParams } = new URL(request.url);
	const locale = searchParams.get('locale');

	if (!isLocale(locale)) {
		return Response.json(
			{ error: 'locale must be one of: en, it' },
			{ status: 400 },
		);
	}

	const content = await get<SiteContent>(locale);

	if (!content) {
		return Response.json(
			{ error: `no content for locale "${locale}"` },
			{ status: 404 },
		);
	}

	return Response.json(content, {
		headers: {
			'cache-control':
				'public, max-age=0, s-maxage=60, stale-while-revalidate=300',
		},
	});
};

export default handler;
