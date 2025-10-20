import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	try {
		const post = await import(`../../../lib/posts/${params.slug}.md`);
		return {
			metadata: post.metadata,
			slug: params.slug
		};
	} catch (e) {
		error(404, 'Post not found');
	}
}