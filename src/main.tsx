import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeProvider.tsx';
import { LanguageProvider } from './context/LanguageProvider.tsx';
import { PaletteProvider } from './context/PaletteProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<PaletteProvider>
				<LanguageProvider>
					<App />
				</LanguageProvider>
			</PaletteProvider>
		</ThemeProvider>
	</StrictMode>,
);
