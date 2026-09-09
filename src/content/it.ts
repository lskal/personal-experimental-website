import type { SiteContent, UiStrings } from './types';
import { createPlaceholderContent } from './placeholder';

const ui: UiStrings = {
	nav: {
		experience: 'Esperienza',
		projects: 'Progetti',
		skills: 'Competenze',
		education: 'Formazione',
		languages: 'Lingue',
		contact: 'Contatti',
	},
	themeToggle: {
		switchToLight: 'Passa alla modalità chiara',
		switchToDark: 'Passa alla modalità scura',
	},
	actions: {
		viewProject: 'Vedi progetto',
		viewRepo: 'Vedi repo',
		sendEmail: 'Invia email',
	},
	sectionTitles: {
		experience: 'Esperienza',
		projects: 'Progetti personali',
		skills: 'Competenze',
		education: 'Formazione',
		certifications: 'Certificazioni',
		languages: 'Lingue',
		contact: 'Contattami',
	},
	languageLabels: {
		listening: 'Ascolto',
		reading: 'Lettura',
		interaction: 'Interazione',
		spokenProduction: 'Produzione orale',
		writing: 'Scrittura',
	},
	a11y: {
		skipToContent: 'Vai al contenuto principale',
	},
};

export const content: SiteContent = createPlaceholderContent(ui);
