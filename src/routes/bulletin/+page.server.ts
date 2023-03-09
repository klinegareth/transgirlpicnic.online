import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';

export function load({ cookies }) {
	const id = cookies.get('userid');

	if (!id) {
		cookies.set('userid', crypto.randomUUID(), { path: '/' });
	}

	return {
		posts: db.getPosts(id) ?? []
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();

		try {
			db.createPost(cookies.get('userid'), data.get('description'));
		} catch (error) {
			return fail(422, {
				description: data.get('description'),
				error: error.message
			});
		}
	},

	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		db.deletePost(cookies.get('userid'), data.get('id'));
	}
};
