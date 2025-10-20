import { teamMembers } from '$lib/data/team.js';

/** @type {import('./$types').PageServerLoad} */
export function load() {
	// We only need a subset of data for the grid view
	const teamGridData = teamMembers.map(({ slug, name, title, imageUrl }) => ({
		slug,
		name,
		title,
		imageUrl
	}));

	return {
		team: teamGridData
	};
}