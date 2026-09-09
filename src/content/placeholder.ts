import type { SiteContent, SkillCategory, UiStrings } from './types';

// Matches the real content's item counts exactly (see en.ts/it.ts history) so the
// loading skeleton's layout height equals the real content's height — no layout
// shift when the fetch resolves and swaps placeholders for real data.
const EXPERIENCE_COUNT = 6;
const PERSONAL_PROJECTS_COUNT = 3;
const SKILLS_TAG_COUNTS = [10, 4, 4, 8, 6, 7];
const EDUCATION_COUNT = 3;
const CERTIFICATIONS_COUNT = 7;
const LANGUAGES_COUNT = 3;

export function createPlaceholderContent(ui: UiStrings): SiteContent {
	const skills: SkillCategory[] = SKILLS_TAG_COUNTS.map(tagCount => ({
		category: 'Loading…',
		skills: Array.from({ length: tagCount }, () => 'Loading…'),
	}));

	return {
		ui,
		hero: {
			name: 'Loading…',
			role: 'Loading…',
			tagline: 'Loading…',
			bio: 'Loading…',
		},
		experience: Array.from({ length: EXPERIENCE_COUNT }, () => ({
			company: 'Loading…',
			role: 'Loading…',
			period: '—',
			summary: 'Loading…',
			projects: [
				{
					name: 'Loading…',
					period: '—',
					activities: ['Loading…', 'Loading…'],
					tools: ['Loading…', 'Loading…'],
				},
			],
		})),
		personalProjects: Array.from({ length: PERSONAL_PROJECTS_COUNT }, () => ({
			name: 'Loading…',
			description: 'Loading…',
			stack: ['Loading…', 'Loading…'],
		})),
		skills,
		education: Array.from({ length: EDUCATION_COUNT }, () => ({
			title: 'Loading…',
			institution: 'Loading…',
			period: '—',
		})),
		certifications: Array.from({ length: CERTIFICATIONS_COUNT }, () => ({
			name: 'Loading…',
			date: '—',
		})),
		languages: Array.from({ length: LANGUAGES_COUNT }, () => ({
			language: 'Loading…',
			listening: '—',
			reading: '—',
			interaction: '—',
			spokenProduction: '—',
			writing: '—',
		})),
		contact: {
			email: 'Loading…',
			phone: 'Loading…',
			location: 'Loading…',
		},
	};
}
