import { error } from '@sveltejs/kit';
import { teamMembers } from '$lib/data/team.js';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const member = teamMembers.find((m) => m.slug === params.slug);

	if (!member) {
		error(404, 'Team member not found');
	}

	return {
		member
	};
}