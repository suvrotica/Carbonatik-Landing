/**
 * @typedef {Object} PostMeta
 * @property {string} title
 * @property {string} date
 * @property {string} summary
 */

/**
 * @typedef {Object} Post
 * @property {string} slug
 * @property {string} title
 * @property {string} date
 * @property {string} summary
 */

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const posts_modules = import.meta.glob('/src/lib/posts/*.md', { eager: true });

	/** @type {Post[]} */
	const posts = Object.entries(posts_modules).map(([filepath, module]) => {
		const slug = filepath.split('/').pop()?.split('.').shift() ?? '';
		
		// This cast tells TypeScript the shape of the imported module's metadata
		const metadata = /** @type {{ metadata: PostMeta }} */ (module).metadata;
		
		return {
			slug,
			...metadata
		};
	});

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		posts
	};
}