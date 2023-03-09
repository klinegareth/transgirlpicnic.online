const db = new Map();

export function getPosts(userid) {
	return db.get(userid);
}

export function createPost(userid, description) {
	if (description === '') {
		throw new Error('post must have a description');
	}

	if (!db.has(userid)) {
		db.set(userid, []);
	}

	const posts = db.get(userid);

	if (posts.find((post) => post.description === description)) {
		throw new Error('posts must be unique');
	}

	posts.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}

export function deletePost(userid, postid) {
	const posts = db.get(userid);
	const index = posts.findIndex((post) => post.id === postid);

	if (index !== -1) {
		posts.splice(index, 1);
	}
}
