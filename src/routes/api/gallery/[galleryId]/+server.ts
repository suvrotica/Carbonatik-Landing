// src/routes/api/gallery/[galleryId]/+server.js
import { json, error } from '@sveltejs/kit';
import fs from 'node:fs';
import path from 'node:path';

/** @type {import('./$types').RequestHandler} */
export function GET({ params }) {
	// Sanitize the galleryId to prevent path traversal attacks
	const sanitizedGalleryId = params.galleryId.replace(/[^a-z0-9-]/g, '');
	const galleryPath = path.join('static', 'images', 'galleries', sanitizedGalleryId);

	if (!fs.existsSync(galleryPath)) {
		error(404, 'Gallery not found');
	}

	try {
		const files = fs.readdirSync(galleryPath);
		const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

		const imageUrls = files
			.filter((file: string) => imageExtensions.some((ext) => file.toLowerCase().endsWith(ext)))
			.map((file: string) => `/images/galleries/${sanitizedGalleryId}/${file}`);

		return json(imageUrls);
	} catch (e) {
		console.error(`Error reading gallery directory: ${galleryPath}`, e);
		error(500, 'Could not load gallery images.');
	}
}