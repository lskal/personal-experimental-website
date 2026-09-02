import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeProvider.tsx';
import { LanguageProvider } from './context/LanguageProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</ThemeProvider>
	</StrictMode>,
);
