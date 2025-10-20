import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	try {
		const postModule = await import(`../../../lib/posts/${params.slug}.md`);
		// Only return serializable data from the server load function
		return {
			metadata: postModule.metadata,
			slug: params.slug
		};
	} catch (e) {
		error(404, 'Post not found');
	}
}