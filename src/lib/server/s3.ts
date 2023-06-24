import { env } from '$env/dynamic/private';
import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
// This relies on a Region being set up in your local AWS config.
const client = new S3Client({
	credentials: { accessKeyId: env.AWS_ACCESS_KEY_ID, secretAccessKey: env.AWS_SECRET_ACCESS_KEY },
	region: env.AWS_DEFAULT_REGION
});

export const uploadFile = async (file, name) => {
	const command = new PutObjectCommand({
		Bucket: 'transgirlpicnic',
		Key: name,
		Body: file
	});

	try {
		const response = await client.send(command);
		console.log(response);
	} catch (error) {
		console.error(error);
	}
};

export const getImageUrls = async () => {
	const command = new ListObjectsV2Command({
		Bucket: 'transgirlpicnic'
	});

	try {
		const response = await client.send(command);
		const urls = response.Contents?.map((value) => {
            const url = `https://transgirlpicnic.s3.${env.AWS_DEFAULT_REGION}.amazonaws.com`
			return `${url}/${value.Key}`;
		});
		return urls;
	} catch (error) {
		console.error(error);
	}
};
