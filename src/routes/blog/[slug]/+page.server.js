import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	try {
		const postModule = await import(`../../../lib/posts/${params.slug}.md`);
		// Wrap the returned data in a 'post' object for better structure
		return {
			post: {
				metadata: postModule.metadata,
				slug: params.slug
			}
		};
	} catch (e) {
		error(404, 'Post not found');
	}
}