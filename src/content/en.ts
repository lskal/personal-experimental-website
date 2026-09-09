import type { SiteContent, UiStrings } from './types';
import { createPlaceholderContent } from './placeholder';

const ui: UiStrings = {
	nav: {
		experience: 'Experience',
		projects: 'Projects',
		skills: 'Skills',
		education: 'Education',
		languages: 'Languages',
		contact: 'Contact',
	},
	themeToggle: {
		switchToLight: 'Switch to light mode',
		switchToDark: 'Switch to dark mode',
	},
	actions: {
		viewProject: 'View project',
		viewRepo: 'View repo',
		sendEmail: 'Send email',
	},
	sectionTitles: {
		experience: 'Experience',
		projects: 'Personal Projects',
		skills: 'Skills',
		education: 'Education',
		certifications: 'Certifications',
		languages: 'Languages',
		contact: 'Get in touch',
	},
	languageLabels: {
		listening: 'Listening',
		reading: 'Reading',
		interaction: 'Interaction',
		spokenProduction: 'Spoken production',
		writing: 'Writing',
	},
	a11y: {
		skipToContent: 'Skip to main content',
	},
};

export const content: SiteContent = createPlaceholderContent(ui);
