import { redirect, fail } from '@sveltejs/kit';
import { uploadFile } from '$lib/server/s3';
import { getImageUrls } from '$lib/server/s3';

import type { Actions } from './$types';
import { uuid } from 'uuidv4';

export async function load() {
	const images = await getImageUrls();
	return { images: images };
}

export const actions = {
	add_post: async ({ request }) => {
		const data = await request.formData();
		const image = data.get('image') as Blob;
		let imageName;

		if (image.name !== 'undefined') {
			imageName = `${uuid()}-${image.name}`;

			image.arrayBuffer().then(async (value) => {
				await uploadFile(value, imageName)
					.then(() => {
						throw redirect(303, '/bulletin');
					})
					.catch((error) => {
						console.log(error);
					});
			});
		} else {
			imageName = 'placeholder.jpg';
		}
	}
} satisfies Actions;
