/**
 * File: src/App.jsx
 * Author: Rajat Sharma
 * Date: 2026-05-14
 * Description: React application main component
 */

import { Briefcase, ExternalLink, Mail, MapPin } from 'lucide-react';
import LinkIcon from './components/LinkIcon';
import { PROFILE_DATA } from './data';

export default function App() {
	return (
		<div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 py-12 px-4 transition-colors duration-500">
			<div className="max-w-md mx-auto relative">
				{/* Profile Header */}
				<header className="flex flex-col items-center text-center mb-10">
					<div className="relative mb-6">
						<img
							src={PROFILE_DATA.avatarUrl}
							alt={PROFILE_DATA.name}
							className="w-32 h-32 rounded-full border-4 border-white dark:border-neutral-800 shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300"
						/>
					</div>

					<h1 className="text-3xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
						{PROFILE_DATA.name}
					</h1>

					<div className="flex flex-col gap-2 mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
						<div className="flex items-center justify-center gap-1.5">
							<Briefcase size={16} className="text-blue-500" />
							<span>{PROFILE_DATA.occupation}</span>
						</div>
						<div className="flex items-center justify-center gap-1.5">
							<MapPin size={16} className="text-red-500" />
							<span>{PROFILE_DATA.location}</span>
						</div>
					</div>
				</header>

				{/* Bio & Interests */}
				<section className="mb-8 bg-white dark:bg-neutral-900/50 p-6 rounded-3xl shadow-sm border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm">
					<p className="text-center leading-relaxed text-neutral-700 dark:text-neutral-300 mb-6">{PROFILE_DATA.bio}</p>

					<div className="flex flex-wrap justify-center gap-2">
						{PROFILE_DATA.interests.map((interest) => (
							<span
								key={interest}
								className="px-3.5 py-1.5 bg-neutral-100 dark:bg-neutral-800/80 text-xs font-semibold rounded-xl text-neutral-600 dark:text-neutral-300 border border-transparent hover:border-blue-500/30 transition-colors">
								{interest}
							</span>
						))}
					</div>
				</section>

				{/* Contact CTA */}
				<div className="px-2 mb-10">
					<a
						href={`mailto:${PROFILE_DATA.email}`}
						className="group relative flex items-center justify-center gap-3 w-full py-4 px-8 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 rounded-2xl font-bold transition-all hover:shadow-xl hover:-tranneutral-y-1 active:tranneutral-y-0">
						<Mail size={20} />
						Get in Touch
						<div className="absolute inset-0 bg-white/10 dark:bg-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
					</a>
				</div>

				{/* Links Grid */}
				<nav className="flex flex-col gap-4">
					{PROFILE_DATA.links.map((link, index) => (
						<a
							key={index}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center p-4 bg-white dark:bg-neutral-900/40 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
							<LinkIcon tag={link.tag} />
							<span className="ml-4 flex-grow font-semibold text-neutral-800 dark:text-neutral-100">{link.title}</span>
							<ExternalLink size={18} className="text-neutral-300 dark:text-neutral-600 group-hover:text-blue-500 transition-colors" />
						</a>
					))}
				</nav>

				{/* Footer */}
				<footer className="mt-16 mb-8 text-center">
					<p className="text-neutral-400 dark:text-neutral-600 text-sm font-medium">
						© {new Date().getFullYear()} • {PROFILE_DATA.name}
					</p>
					<div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-widest text-neutral-300 dark:text-neutral-700 font-bold">
						<span>Powered by React</span>
						<span className="w-1 h-1 rounded-full bg-neutral-200 dark:bg-neutral-800"></span>
						<span>Tailwind CSS</span>
					</div>
				</footer>
			</div>
		</div>
	);
}
