import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { PROFILE_DATA } from './src/data';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		{
			// generates a profile.json in public folder for other services to use
			name: 'generate-profile-json',
			buildStart() {
				const outputPath = resolve(__dirname, 'public/profile.json');
				writeFileSync(outputPath, JSON.stringify(PROFILE_DATA, null, 4));
			},
		},
	],
});
