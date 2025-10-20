// src/lib/server/galleries.server.ts

// This uses Vite's glob import feature to find all images at build time.
// It's eager, meaning the modules are imported right away.
// `query: '?url'` tells Vite to process the asset and give us its final URL.
// `import: 'default'` specifies that we want the default export (the URL string).
const allImageModules = import.meta.glob('/static/images/galleries/**/*.+(jpeg|jpg|png|gif|webp|svg)', {
	eager: true,
	query: '?url',
	import: 'default'
});

const galleries = new Map<string, string[]>();

for (const imagePath in allImageModules) {
	// Cast the module's default export to a string
	const url = allImageModules[imagePath] as string;

	// The path will be like '/static/images/galleries/sri-lanka-expedition/image.jpg'
	const pathParts = imagePath.split('/');
	const galleryId = pathParts[4]; // The gallery name is the 5th part of the path

	if (!galleries.has(galleryId)) {
		galleries.set(galleryId, []);
	}
	// Add the public URL to the map
	galleries.get(galleryId)?.push(url);
}

/**
 * Retrieves the image URLs for a given gallery ID.
 * This function reads from the map created at build time.
 * @param {string} galleryId - The ID of the gallery.
 * @returns {string[] | undefined} An array of image URLs or undefined if not found.
 */
export function getGalleryImages(galleryId: string): string[] | undefined {
	return galleries.get(galleryId);
}