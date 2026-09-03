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
		period: 'December 2021 – Present',
		summary:
			'Front-end developer role spanning enterprise JSP/Hybris maintenance, the transition to React/Next.js, and autonomous ownership of the company website.',
		projects: [
			{
				name: 'Internal GIS Application',
				client: 'Internal client',
				sector: 'IT & Business Intelligence',
				period: 'April 2026 – Present',
				activities: [
					'Build a custom MUI date picker with range selection',
					'Work with basic GIS concepts: spatial reference systems (WKID), layer ordering, sublayer granularity, extent management',
					'Integrate PostHog analytics with a typed setup module, a custom useAnalytics hook, a dedicated error boundary, and a workaround for re-initialization issues in Vite/HMR',
					'Improve TypeScript code quality: remove any, type catch blocks with unknown, add dedicated interfaces',
					'Adopt react-virtuoso for performant rendering of large lists and tables',
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
				name: 'Company Website',
				client: 'Abstract',
				sector: 'Services',
				period: 'April 2025 – February 2026',
				url: 'https://abstract.it/',
				activities: [
					'Autonomously built and maintained the company website in Next.js: services, compliance, and magazine pages, plus footer sections',
					'Managed content via Strapi (headless CMS), creating components/content-types and wiring the front-end API integration',
					'Migrated styling from CSS to SCSS and adopted styled-components',
					'Coordinated weekly with stakeholders across company areas and optimized performance (defer, preload, asset management)',
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
				name: 'Internal Healthcare Project',
				sector: 'Healthcare',
				period: 'October 2024 – April 2025',
				activities: [
					"First professional React project, building custom front-end components in Next.js with MUI's styled approach",
					'Contributed to state management with Redux Toolkit, implementing slices and thunks',
					'Worked on a multilingual project, integrating Tolgee for i18n',
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
				period: 'December 2022 – February 2024',
				url: 'https://www.atos.com/en-it/',
				activities: [
					'Supported a second enterprise JSP/Hybris project in parallel with Oakley, in a small team of three',
					'Handled bugfixes and small front-end developments under the same tech lead as Oakley',
				],
				tools: ['JSP/Hybris', 'JavaScript (ES5)/jQuery', 'Git', 'Jira'],
			},
			{
				name: 'Oakley',
				client: 'Luxottica Group SpA',
				sector: 'IT & Business Intelligence',
				period: 'December 2021 – June 2024',
				url: 'https://www.oakley.com/',
				activities: [
					'Maintained an enterprise JSP/Hybris application for almost 3 years, handling bugfixes and hotfixes via Jira',
					'Owned WCAG compliance end-to-end (A/AA/AAA), monitored through SiteImprove',
					'Moved to the development team in the final months, contributing to new feature design and implementation',
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
		role: 'Junior Front-end Developer',
		period: 'December 2019 – November 2021',
		summary:
			'Junior front-end developer apprenticeship, building and maintaining e-commerce platforms in Magento 1 and Shopify.',
		projects: [
			{
				name: 'E-commerce Shopify',
				client: 'scholl-shoes.com, casahenkel.it',
				sector: 'E-commerce',
				period: 'January 2021 – November 2021',
				activities: [
					'Developed and maintained Shopify stores for fashion and home brands',
					'Customized Liquid themes and front-end components',
					'Optimized store performance and usability',
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
				period: 'December 2019 – December 2020',
				activities: [
					'Customized Magento 1 themes for multiple fashion clients',
					'Built custom components and features on client request',
					'Fixed display and behavior bugs across existing themes',
				],
				tools: ['Magento 1', 'HTML', 'JavaScript/jQuery', 'SCSS/SASS', 'Git'],
			},
		],
	},
	{
		company: 'Valxer di Mariani Romeo',
		role: 'Junior JSX Programmer Intern & Game Developer',
		period: 'April 2019 – June 2019',
		summary:
			'Internship building websites in React and creating VR/game content in Unreal Engine 4.',
		projects: [
			{
				name: 'Web development & VR content creation',
				sector: 'Media',
				period: 'April 2019 – June 2019',
				activities: [
					'Built websites using early React (pre-16.8, pre-Hooks)',
					'Created and delivered VR content for clients with Playcanvas',
					'Developed a project in Unreal Engine 4 using its Blueprint visual scripting system',
				],
				tools: ['React (<16.8.0)', 'Playcanvas', 'Unreal Engine 4'],
			},
		],
	},
	{
		company: 'Primachemical',
		role: 'Graphic Design & Marketing Intern',
		period: 'May 2018 – July 2018',
		summary:
			"Internship handling the company's Wordpress website and marketing graphics.",
		projects: [
			{
				name: 'Company website & marketing graphics',
				client: 'Primachemical',
				sector: 'Wellness Tech',
				period: 'May 2018 – July 2018',
				activities: [
					'Built the company website on Wordpress',
					'Produced marketing graphics: brochures, catalogs, posters, online ads',
					'Managed marketing campaigns via Facebook Advertising',
				],
				tools: ['Wordpress', 'Adobe Suite', 'Facebook Advertising'],
			},
		],
	},
	{
		company: 'Grafservice',
		role: 'Graphic Design & Printing Intern',
		period: 'November 2016',
		summary: 'Short internship in large-format printing and finishing.',
		projects: [
			{
				name: 'Large-format printing',
				period: 'November 2016',
				activities: [
					'Operated large-format printers and a cutting plotter',
					'Assisted in the finishing/assembly department',
				],
				tools: [],
			},
		],
	},
	{
		company: 'Grafica 86',
		role: 'Printer & Graphic Designer Intern',
		period: 'April 2015 – May 2015',
		summary: 'Early internship in print design and production.',
		projects: [
			{
				name: 'Print design & production',
				period: 'April 2015 – May 2015',
				activities: [
					'Designed print materials',
					'Assisted during the printing phase',
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
			'A personal e-commerce project built to explore React Router 7, dynamic form generation with RJSF, and Zustand for state management. Deployed statically on GitHub Pages.',
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
			'A second e-commerce project built with Nuxt 4 and Vue 3 after completing Udemy courses on both, focused on modular architecture, composables, and reusable components. Uses Vercel Blob for data storage.',
		stack: ['Nuxt 4', 'Vue 3', 'Vercel Blob', 'Vercel Speed Insights'],
		demoUrl: 'https://nuxt-training-ecommerce-project.vercel.app',
		repoUrl: 'https://github.com/lskal/nuxt-training-ecommerce-project',
	},
	{
		name: 'Second Brain',
		description:
			'A local-first personal knowledge management system built around Andrej Karpathy\'s "LLM Wiki" pattern: an AI agent reads immutable source material and maintains a structured, cross-linked wiki in Obsidian. Manages 15 knowledge domains end-to-end through 15 custom slash commands, each following a propose → confirm → apply workflow to keep humans in control of writes.',
		stack: ['OpenCode', 'OpenRouter', 'Obsidian', 'Git'],
	},
];

export const skills: SkillCategory[] = [
	{
		category: 'Frontend Core',
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
		category: 'State & Data',
		skills: ['Redux Toolkit', 'Zustand', 'RJSF (React JSON Schema Form)'],
	},
	{
		category: 'Domain-specific',
		skills: ['ArcGIS/Esri', 'Chart.js', 'PostHog', 'Strapi', 'i18next / Tolgee'],
	},
	{
		category: 'Tooling & Workflow',
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
			'Higher technical diploma in multichannel communication project design, development, and management (EQF 5)',
		institution: 'ITS Angelo Rizzoli, Milan',
		period: 'September 2017 – July 2019',
		url: 'https://maps.app.goo.gl/J1ieuycyj4VkZgDfA',
	},
	{
		title: 'Digital Printer Certificate (400h)',
		institution: 'Fondazione Daimon (formerly Padre Monti)',
		period: 'September 2016 – November 2016',
	},
	{
		title: 'Technical Diploma in Graphic Design and Communication',
		institution: 'ITI Padre Monti, Saronno',
		period: 'September 2011 – July 2016',
		url: 'https://maps.app.goo.gl/RYTCq9engRfqx7eg8',
	},
];

export const certifications: CertificationEntry[] = [
	{
		name: 'Large Language Models: from Theory to Practice - Udemy',
		date: 'July 2026',
		url: 'https://drive.google.com/file/d/1HAJeugrsF7s1P9RPzXM4xI-Dw-O5Bay3/view?usp=sharing',
	},
	{
		name: 'Object Oriented Programming and Design Crash Course - Udemy',
		date: 'June 2026',
		url: 'https://drive.google.com/file/d/1eYpYRoWNvJDfPhGKwZEvBGPKJUwg8UFy/view?usp=sharing',
	},
	{
		name: 'React: The Complete Guide (incl. Next.js, Redux) - Udemy',
		date: 'March 2026',
		url: 'https://drive.google.com/file/d/19l_4vEdBBoiDPH-wzdh4XTrDgLAEOHIs/view?usp=sharing',
	},
	{
		name: 'Nuxt 3 & Supabase Mastery: Build 2 Full-Stack Apps - Udemy',
		date: 'February 2026',
		url: 'https://drive.google.com/file/d/1wkx-pycfz7ZcvSeC0QdtnJmvuipO0oYO/view?usp=sharing',
	},
	{
		name: 'Vue.js 3 Masterclass: Build 7 Real-World Apps - Udemy',
		date: 'February 2026',
		url: 'https://drive.google.com/file/d/11E91DZ0f8LlENp8PGVW_JOVI0_o-5USo/view?usp=sharing',
	},
	{
		name: 'Web performance - web.dev',
		date: 'October 2025',
	},
	{
		name: 'Shopify Development Fundamentals Assessment',
		date: 'October 2025',
		url: 'https://drive.google.com/file/d/13Kn5hFXKb6s3zGFQQmr7H85G5d7dHrXq/view?usp=sharing',
	},
];

export const languages: LanguageSkill[] = [
	{
		language: 'Italian (native)',
		listening: 'C2',
		reading: 'C2',
		interaction: 'C2',
		spokenProduction: 'C2',
		writing: 'C2',
	},
	{
		language: 'Polish (native)',
		listening: 'C2',
		reading: 'A1',
		interaction: 'C2',
		spokenProduction: 'C2',
		writing: 'A1',
	},
	{
		language: 'English',
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
	location: 'Milan, Italy',
	githubUrl: 'https://github.com/lskal',
	linkedinUrl: 'https://www.linkedin.com/in/massimiliano-arosio/',
};

export const hero = {
	name: 'Massimiliano Arosio',
	role: 'Front-end Developer',
	tagline:
		'Front-end developer with 6+ years of experience, grown across legacy enterprise stacks and modern React/Next.js.',
	bio: "Curious by nature - I like understanding how things work, whether that's a new framework, a motorcycle engine, or a parkour move. After work you'll find me hiking, riding, doing a theater class, or behind a film camera. Always up for a good conversation about the last thing I built or explored.",
};

export const ui = {
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
