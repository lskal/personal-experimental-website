import { useLanguage } from '../../../hooks/useLanguage';
import { Toggle } from '../Toggle/Toggle';

export const LanguageToggle = () => {
	const { locale, toggleLocale } = useLanguage();
	const nextLocaleLabel = locale === 'en' ? 'IT' : 'EN';

	return (
		<Toggle
			wide
			onClick={toggleLocale}
			ariaLabel={`Switch language to ${nextLocaleLabel}`}
			title={`Switch language to ${nextLocaleLabel}`}
		>
			{nextLocaleLabel}
		</Toggle>
	);
};
