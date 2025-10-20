// src/routes/api/gallery/[galleryId]/+server.ts
import { json, error } from '@sveltejs/kit';
import { getGalleryImages } from '$lib/server/galleries.server';

/** @type {import('./$types').RequestHandler} */
export function GET({ params }) {
	const imageUrls = getGalleryImages(params.galleryId);

	if (!imageUrls) {
		error(404, 'Gallery not found');
	}

	return json(imageUrls);
}