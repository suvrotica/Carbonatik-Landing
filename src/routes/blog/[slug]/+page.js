/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
	// `data` is the serializable result from +page.server.js: { metadata, slug }

	// Dynamically import the component. This runs on the server during SSR
	// and in the browser during client-side navigation.
	const postModule = await import(`../../../lib/posts/${data.slug}.md`);

	return {
		metadata: data.metadata,
		content: postModule.default // Return the component constructor
	};
}