import type {
	CertificationEntry,
	EducationEntry,
	ExperienceEntry,
	LanguageSkill,
	PersonalProject,
	SiteContent,
	SkillCategory,
} from './types';

export const experience: ExperienceEntry[] = [
	{
		company: 'Abstract S.R.L.',
		companyUrl: 'https://abstract.it/',
		role: 'Front-end Developer',
		period: 'Dicembre 2021 – In corso',
		summary:
			'Ruolo da front-end developer che ha attraversato la manutenzione enterprise JSP/Hybris, la transizione a React/Next.js e la gestione autonoma del sito aziendale.',
		projects: [
			{
				name: 'Applicazione GIS Interna',
				client: 'Cliente interno',
				sector: 'IT & Business Intelligence',
				period: 'Aprile 2026 – In corso',
				activities: [
					'Sviluppo un date picker MUI personalizzato con selezione a intervallo',
					"Lavoro su concetti cartografici base: sistemi di riferimento spaziale (WKID), ordinamento layer, granularità dei sublayer, gestione dell'extent",
					'Integro analytics PostHog con modulo di setup tipizzato, hook custom useAnalytics, error boundary dedicato e workaround per la re-inizializzazione in ambiente Vite/HMR',
					'Miglioro la qualità del codice TypeScript: rimuovo any, tipizzo i blocchi catch con unknown, aggiungo interfacce dedicate',
					'Adotto react-virtuoso per il rendering performante di liste e tabelle di grandi dimensioni',
				],
				tools: [
					'React 19',
					'TypeScript',
					'Vite',
					'ArcGIS/Esri',
					'Material UI (styled-components)',
					'Zustand',
					'react-virtuoso',
					'Chart.js',
					'PostHog',
					'i18next',
				],
			},
			{
				name: 'Sito Aziendale',
				client: 'Abstract',
				sector: 'Servizi',
				period: 'Aprile 2025 – Febbraio 2026',
				url: 'https://abstract.it/',
				activities: [
					'Sviluppato e gestito in autonomia il sito aziendale in Next.js: pagine services, compliance e magazine, oltre alle sezioni del footer',
					"Gestiti i contenuti tramite Strapi (headless CMS), creando componenti/content-type e collegando l'integrazione API sul front-end",
					'Migrato lo styling da CSS a SCSS e adottati gli styled-components',
					'Coordinamento settimanale con i referenti delle diverse aree aziendali e ottimizzazione delle performance (defer, preload, gestione asset)',
				],
				tools: [
					'Next.js',
					'React',
					'TypeScript',
					'Strapi (headless CMS)',
					'SCSS',
					'Styled-components',
					'Git',
				],
			},
			{
				name: 'Progetto Healthcare Interno',
				sector: 'Healthcare',
				period: 'Ottobre 2024 – Aprile 2025',
				activities: [
					'Prima esperienza professionale in React, con sviluppo di componenti front-end custom in Next.js e libreria styled di MUI',
					'Contributo alla gestione dello stato applicativo con Redux Toolkit, implementando slice e thunk',
					"Lavoro su un progetto multilingua, con integrazione di Tolgee per l'i18n",
				],
				tools: [
					'React 18',
					'Next.js 14',
					'TypeScript',
					'Material UI (styled-components)',
					'Redux Toolkit',
					'Tolgee (i18n)',
				],
			},
			{
				name: 'Atos Hydraulics',
				client: 'Atos Hydraulics',
				sector: 'Wholesale',
				period: 'Dicembre 2022 – Febbraio 2024',
				url: 'https://www.atos.com/en-it/',
				activities: [
					'Supportato un secondo progetto enterprise in JSP/Hybris in parallelo a Oakley, in un team ridotto di tre persone',
					'Gestiti bugfix e piccoli sviluppi front-end sotto lo stesso tech lead di Oakley',
				],
				tools: ['JSP/Hybris', 'JavaScript (ES5)/jQuery', 'Git', 'Jira'],
			},
			{
				name: 'Oakley',
				client: 'Luxottica Group SpA',
				sector: 'IT & Business Intelligence',
				period: 'Dicembre 2021 – Giugno 2024',
				url: 'https://www.oakley.com/',
				activities: [
					"Manutenuta per quasi 3 anni un'applicazione enterprise in JSP/Hybris, gestendo bugfix e hotfix tramite Jira",
					'Gestita in autonomia la conformità WCAG end-to-end (A/AA/AAA), monitorata tramite SiteImprove',
					'Passaggio al team di sviluppo negli ultimi mesi, con contributo diretto alla progettazione di nuove funzionalità',
				],
				tools: [
					'JSP/Hybris',
					'JavaScript (ES5)/jQuery',
					'SiteImprove',
					'Git',
					'Jira',
				],
			},
		],
	},
	{
		company: 'Triboo Group',
		companyUrl: 'https://triboo.com/',
		role: 'Sviluppatore Front-end Junior',
		period: 'Dicembre 2019 – Novembre 2021',
		summary:
			'Apprendistato come sviluppatore front-end junior, nello sviluppo e mantenimento di piattaforme e-commerce in Magento 1 e Shopify.',
		projects: [
			{
				name: 'E-commerce Shopify',
				client: 'scholl-shoes.com, casahenkel.it',
				sector: 'E-commerce',
				period: 'Gennaio 2021 – Novembre 2021',
				activities: [
					'Sviluppati e mantenuti store Shopify per brand del settore moda e casa',
					'Personalizzati temi Liquid e componenti front-end',
					'Ottimizzata performance e usabilità degli store',
				],
				tools: [
					'Shopify',
					'Shopify Theme Kit',
					'Liquid',
					'JavaScript',
					'SCSS/SASS',
				],
			},
			{
				name: 'E-commerce Magento 1',
				client: 'Piquadro, The Bridge, Lancel',
				sector: 'E-commerce',
				period: 'Dicembre 2019 – Dicembre 2020',
				activities: [
					'Personalizzati temi Magento 1 per diversi clienti del settore moda',
					'Sviluppati componenti e funzionalità custom su richiesta dei clienti',
					'Corretti bug di visualizzazione e comportamento sui temi esistenti',
				],
				tools: ['Magento 1', 'HTML', 'JavaScript/jQuery', 'SCSS/SASS', 'Git'],
			},
		],
	},
	{
		company: 'Valxer di Mariani Romeo',
		role: 'Stagista Programmatore JSX Junior & Game Developer',
		period: 'Aprile 2019 – Giugno 2019',
		summary:
			'Stage nello sviluppo di siti web in React e nella creazione di contenuti VR/game con Unreal Engine 4.',
		projects: [
			{
				name: 'Sviluppo web & creazione contenuti VR',
				sector: 'Media',
				period: 'Aprile 2019 – Giugno 2019',
				activities: [
					'Sviluppati siti web con React nelle prime versioni (precedente a 16.8, senza Hooks)',
					'Creati e distribuiti contenuti VR per clienti tramite Playcanvas',
					'Sviluppato un progetto in Unreal Engine 4 tramite il sistema blueprint',
				],
				tools: ['React (<16.8.0)', 'Playcanvas', 'Unreal Engine 4'],
			},
		],
	},
	{
		company: 'Primachemical',
		role: 'Stagista Grafica & Marketing',
		period: 'Maggio 2018 – Luglio 2018',
		summary:
			'Stage nella gestione del sito Wordpress aziendale e nella grafica per il marketing.',
		projects: [
			{
				name: 'Sito aziendale & grafica marketing',
				client: 'Primachemical',
				sector: 'Wellness Tech',
				period: 'Maggio 2018 – Luglio 2018',
				activities: [
					'Sviluppato il sito aziendale tramite Wordpress',
					'Realizzati materiali grafici: brochure, cataloghi, poster, pubblicità online',
					'Gestite campagne di marketing tramite Facebook Advertising',
				],
				tools: ['Wordpress', 'Suite Adobe', 'Facebook Advertising'],
			},
		],
	},
	{
		company: 'Grafservice',
		role: 'Stagista Grafica & Stampa',
		period: 'Novembre 2016',
		summary: "Breve stage nella stampa di grande formato e nell'allestimento.",
		projects: [
			{
				name: 'Stampa di grande formato',
				period: 'Novembre 2016',
				activities: [
					'Operato su stampanti di grande formato e plotter da taglio',
					'Assistenza nel reparto di allestimento',
				],
				tools: [],
			},
		],
	},
	{
		company: 'Grafica 86',
		role: 'Stagista Stampatore & Progettista Grafico',
		period: 'Aprile 2015 – Maggio 2015',
		summary: 'Primo stage nella progettazione e produzione di stampati.',
		projects: [
			{
				name: 'Progettazione & produzione stampati',
				period: 'Aprile 2015 – Maggio 2015',
				activities: [
					'Progettati materiali da stampa',
					'Assistenza durante la fase di stampa',
				],
				tools: [],
			},
		],
	},
];

export const personalProjects: PersonalProject[] = [
	{
		name: 'ecommerce-react-project',
		description:
			'Progetto e-commerce personale per sperimentare React Router 7, generazione dinamica di form con RJSF e gestione dello stato con Zustand. Deploy statico su GitHub Pages.',
		stack: [
			'React Router 7',
			'Material UI',
			'RJSF (ajv8)',
			'Zustand',
			'Tailwind CSS',
			'TypeScript',
		],
		demoUrl: 'https://lskal.github.io/ecommerce-react-project',
		repoUrl: 'https://github.com/lskal/ecommerce-react-project',
	},
	{
		name: 'nuxt-training-ecommerce-project',
		description:
			'Secondo progetto e-commerce realizzato con Nuxt 4 e Vue 3 dopo aver completato i corsi Udemy su entrambi, con focus su architettura modulare, composables e componenti riutilizzabili. Usa Vercel Blob per lo storage dati.',
		stack: ['Nuxt 4', 'Vue 3', 'Vercel Blob', 'Vercel Speed Insights'],
		demoUrl: 'https://nuxt-training-ecommerce-project.vercel.app',
		repoUrl: 'https://github.com/lskal/nuxt-training-ecommerce-project',
	},
	{
		name: 'Second Brain',
		description:
			'Sistema di gestione della conoscenza personale, locale-first, basato sul pattern "LLM Wiki" di Andrej Karpathy: un agente AI legge fonti immutabili e mantiene una wiki strutturata e interconnessa in Obsidian. Gestisce 15 domini di conoscenza end-to-end tramite 15 comandi slash personalizzati, ognuno con workflow proponi → conferma → applica per mantenere il controllo umano sulle scritture.',
		stack: ['OpenCode', 'OpenRouter', 'Obsidian', 'Git'],
	},
];

export const skills: SkillCategory[] = [
	{
		category: 'Front-end',
		skills: [
			'HTML5',
			'CSS',
			'CSS Grid/Flexbox',
			'JavaScript/JSON',
			'TypeScript',
			'React',
			'Next.js',
		],
	},
	{
		category: 'Styling & UI',
		skills: ['Styled-components', 'Material UI / MUI', 'Tailwind CSS'],
	},
	{
		category: 'Stato & Dati',
		skills: ['Redux Toolkit', 'Zustand', 'RJSF (React JSON Schema Form)'],
	},
	{
		category: 'Competenze di dominio',
		skills: ['ArcGIS/Esri', 'Chart.js', 'PostHog', 'Strapi', 'i18next / Tolgee'],
	},
	{
		category: 'Strumenti & Workflow',
		skills: ['Git', 'Vite', 'GitHub'],
	},
	{
		category: 'AI/LLM Tooling',
		skills: ['Claude', 'ChatGPT', 'OpenCode', 'OpenRouter'],
	},
];

export const education: EducationEntry[] = [
	{
		title:
			'Tecnico superiore per ideazione, sviluppo, gestione di progetti di comunicazione multicanale (EQF 5)',
		institution: 'ITS Angelo Rizzoli, Milano',
		period: 'Settembre 2017 – Luglio 2019',
		url: 'https://maps.app.goo.gl/J1ieuycyj4VkZgDfA',
	},
	{
		title: 'Certificato di Stampatore Digitale (400h)',
		institution: 'Fondazione Daimon (ex Padre Monti)',
		period: 'Settembre 2016 – Novembre 2016',
	},
	{
		title: 'Diploma di Tecnico Grafica e Comunicazione',
		institution: 'ITI Padre Monti, Saronno',
		period: 'Settembre 2011 – Luglio 2016',
		url: 'https://maps.app.goo.gl/RYTCq9engRfqx7eg8',
	},
];

export const certifications: CertificationEntry[] = [
	{
		name: 'Large Language Models: dalla Teoria alla Pratica - Udemy',
		date: 'Luglio 2026',
		url: 'https://drive.google.com/file/d/1HAJeugrsF7s1P9RPzXM4xI-Dw-O5Bay3/view?usp=sharing',
	},
	{
		name: 'Object Oriented Programming and Design Crash Course - Udemy',
		date: 'Giugno 2026',
		url: 'https://drive.google.com/file/d/1eYpYRoWNvJDfPhGKwZEvBGPKJUwg8UFy/view?usp=sharing',
	},
	{
		name: 'React: The Complete Guide (incl. Next.js, Redux) - Udemy',
		date: 'Marzo 2026',
		url: 'https://drive.google.com/file/d/19l_4vEdBBoiDPH-wzdh4XTrDgLAEOHIs/view?usp=sharing',
	},
	{
		name: 'Nuxt 3 & Supabase Mastery: Build 2 Full-Stack Apps - Udemy',
		date: 'Febbraio 2026',
		url: 'https://drive.google.com/file/d/1wkx-pycfz7ZcvSeC0QdtnJmvuipO0oYO/view?usp=sharing',
	},
	{
		name: 'Vue.js 3 Masterclass: Build 7 Real-World Apps - Udemy',
		date: 'Febbraio 2026',
		url: 'https://drive.google.com/file/d/11E91DZ0f8LlENp8PGVW_JOVI0_o-5USo/view?usp=sharing',
	},
	{
		name: 'Web performance - web.dev',
		date: 'Ottobre 2025',
	},
	{
		name: 'Shopify Development Fundamentals Assessment',
		date: 'Ottobre 2025',
		url: 'https://drive.google.com/file/d/13Kn5hFXKb6s3zGFQQmr7H85G5d7dHrXq/view?usp=sharing',
	},
];

export const languages: LanguageSkill[] = [
	{
		language: 'Italiano (madrelingua)',
		listening: 'C2',
		reading: 'C2',
		interaction: 'C2',
		spokenProduction: 'C2',
		writing: 'C2',
	},
	{
		language: 'Polacco (madrelingua)',
		listening: 'C2',
		reading: 'A1',
		interaction: 'C2',
		spokenProduction: 'C2',
		writing: 'A1',
	},
	{
		language: 'Inglese',
		listening: 'C2',
		reading: 'C1',
		interaction: 'C1',
		spokenProduction: 'C1',
		writing: 'C1',
	},
];

export const contact = {
	email: 'mail@gmail.com',
	phone: '+39 123 456 7890',
	location: 'Milano, Italia',
	githubUrl: 'https://github.com/lskal',
	linkedinUrl: 'https://www.linkedin.com/in/massimiliano-arosio/',
};

export const hero = {
	name: 'Massimiliano Arosio',
	role: 'Front-end Developer',
	tagline:
		'Front-end developer con oltre 6 anni di esperienza, cresciuto tra stack enterprise legacy e React/Next.js moderno.',
	bio: "Curioso per natura - mi piace capire come funzionano le cose, che si tratti di un nuovo framework, del motore di una moto o di una mossa di parkour. Fuori dal lavoro mi trovi in montagna, in moto, a lezione di teatro o dietro una cinepresa. Sempre pronto a una buona chiacchierata sull'ultima cosa che ho costruito o esplorato.",
};

export const ui = {
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

export const content: SiteContent = {
	ui,
	hero,
	experience,
	personalProjects,
	skills,
	education,
	certifications,
	languages,
	contact,
};
