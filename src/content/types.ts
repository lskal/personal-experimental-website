export interface SkillCategory {
	category: string;
	skills: string[];
}

export interface ExperienceProject {
	name: string;
	client?: string;
	sector?: string;
	period: string;
	url?: string;
	activities: string[];
	tools: string[];
}

export interface ExperienceEntry {
	company: string;
	companyUrl?: string;
	role: string;
	period: string;
	summary: string;
	projects: ExperienceProject[];
}

export interface PersonalProject {
	name: string;
	description: string;
	stack: string[];
	demoUrl?: string;
	repoUrl?: string;
}

export interface EducationEntry {
	title: string;
	institution: string;
	period: string;
	url?: string;
}

export interface CertificationEntry {
	name: string;
	date: string;
	url?: string;
}

export interface LanguageSkill {
	language: string;
	listening: string;
	reading: string;
	interaction: string;
	spokenProduction: string;
	writing: string;
}

export interface UiStrings {
	nav: {
		experience: string;
		projects: string;
		skills: string;
		education: string;
		languages: string;
		contact: string;
	};
	themeToggle: {
		switchToLight: string;
		switchToDark: string;
	};
	actions: {
		viewProject: string;
		viewRepo: string;
		sendEmail: string;
	};
	sectionTitles: {
		experience: string;
		projects: string;
		skills: string;
		education: string;
		certifications: string;
		languages: string;
		contact: string;
	};
	languageLabels: {
		listening: string;
		reading: string;
		interaction: string;
		spokenProduction: string;
		writing: string;
	};
	a11y: {
		skipToContent: string;
	};
}

export interface SiteContent {
	ui: UiStrings;
	hero: {
		name: string;
		role: string;
		tagline: string;
		bio: string;
	};
	experience: ExperienceEntry[];
	personalProjects: PersonalProject[];
	skills: SkillCategory[];
	education: EducationEntry[];
	certifications: CertificationEntry[];
	languages: LanguageSkill[];
	contact: {
		email: string;
		phone: string;
		location: string;
		githubUrl?: string;
		linkedinUrl?: string;
	};
}
