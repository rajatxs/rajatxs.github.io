/**
 * File: src/data.tsx
 * Author: Rajat Sharma
 * Date: 2026-05-14
 * Description: Profile data
 */

import type { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
	name: 'Rajat Sharma',
	occupation: 'Senior Full Stack Engineer',
	location: 'Gujarat, India',
	email: 'rajatxt@proton.me',
	bio: 'Building digital experiences with focus on performance and accessibility. Passionate about open source and minimalist UI design.',
	avatarUrl: '/profile.webp',
	interests: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Fastify.js', 'Figma', 'Go', 'Expo', 'PostgreSQL', 'Docker', 'Google Gemini', 'Ollama', 'n8n'],
	links: [
		{
			title: 'Portfolio',
			tag: 'page:portfolio',
			url: 'https://rajatxs.github.io/portfolio',
		},
		{
			title: 'Figma (@rajatsharma)',
			tag: 'figma',
			url: 'https://www.figma.com/@rajatsharma',
		},
		{
			title: 'GitHub (@rajatxs)',
			tag: 'github',
			url: 'https://github.com/rajatxs',
		},
		{
			title: 'Gitea (@rajat)',
			tag: 'gitea',
			url: 'https://gitea.prodex.cloud/rajat',
		},
		{
			title: 'NPM (@rxpm)',
			tag: 'npm',
			url: 'https://www.npmjs.com/~rxpm',
		},
		{
			title: 'Unsplash (@rxua)',
			tag: 'unsplash',
			url: 'https://unsplash.com/@rxua',
		},
	],
};
