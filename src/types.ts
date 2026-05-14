/**
 * File: src/types.ts
 * Author: Rajat Sharma
 * Date: 2026-05-14
 * Description: Type definitions for the application
 */

export interface ProfileLink {
	title: string;
	tag: string;
	url: string;
}

export interface ProfileData {
	name: string;
	occupation: string;
	location: string;
	email: string;
	bio: string;
	avatarUrl: string;
	interests: string[];
	links: ProfileLink[];
}
