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

		const metadata = /** @type {{ metadata: PostMeta }} */ (module).metadata;

		if (!metadata || !metadata.date) {
			throw new Error(`Blog post at '${filepath}' is missing the required 'date' field in its frontmatter.`);
		}

		return {
			slug,
			...metadata
		};
	});

	// Sort posts by date, descending
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); 

	return {
		posts
	};
}