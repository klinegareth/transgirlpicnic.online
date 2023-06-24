<script lang="ts">
	import type { PageData } from '../$types';
	export let data: PageData;
	$: images = data.images;
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { config } from '@fortawesome/fontawesome-svg-core';
	import { faImage } from '@fortawesome/free-solid-svg-icons';
	const handleSubmit = async () => {
		input.click();
		await invalidateAll();
	};
	let input;
	let image;
	let showImage = false;

	function onChange() {
		const file = input.files[0];

		if (file) {
			showImage = true;

			const reader = new FileReader();
			reader.addEventListener('load', function () {
				image.setAttribute('src', reader.result);
			});
			reader.readAsDataURL(file);

			return;
		}
		showImage = false;
	}
</script>

<div class="container">
	<div class="title">
		<h2>photos from the picnic</h2>
	</div>
	<div class="photos">
		{#each images as image}
			<img src={image} alt="Taken by someone at the picnic" class="photo" />
		{/each}
		<form
			method="POST"
			class="photo upload-form"
			use:enhance
			action="?/add_post"
			enctype="multipart/form-data"
		>
			{#if showImage}
				<div class="button-anchor">
					<div class="button-container">
						<button type="submit">upload</button>
						<button type="reset" on:click={handleSubmit}>reset</button>
					</div>
				</div>
			{/if}
			<label class="file-upload">
				<input
					bind:this={input}
					on:change={onChange}
					type="file"
					accept="image/*"
					name="image"
					required
					style="display: none;"
				/>
				{#if showImage}
					<img alt="Preview" bind:this={image} class="preview-image" />
				{:else}
					<div class="icon">
						<FontAwesomeIcon
							icon={faImage}
							style="color: rgba(0,0,0,0.5); inline-size: 60%; block-size: 100%"
						/>
						<p>click to add your own!</p>
					</div>
				{/if}
			</label>
		</form>
	</div>
</div>

<style>
	.upload-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		cursor: pointer;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.1);
		transition: 0.3s transform;
	}

	.upload-form:hover {
		transform: scale(0.95);
	}

	.button-anchor {
		position: relative;
		align-self: center;
		justify-self: center;
		inline-size: 0px;
		block-size: 0px;
	}

	.button-container {
		display: flex;
		align-items: center;
		justify-content: center;
		inline-size: 100%;
		gap: 1em;
	}

	.preview-image {
		inline-size: 100%;
		object-fit: cover;
	}
	button {
		background: rgba(0, 0, 0, 0.5);
		color: white;
		padding: 0.5em;
		border-radius: 0.5em;
		border: 1px solid grey;
		cursor: pointer;
	}
	.icon {
		cursor: pointer;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.title {
		border-radius: 0.5em;
		padding: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.1);
		gap: 0.5em;
	}
	.container {
		padding: 1em;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		inline-size: 50%;
		background: #dee2ff;
		align-items: center;
		border-radius: 2em;
	}
	h2 {
		color: #424b5c;
		margin: 0;
		font-family: sans-serif;
	}
	p {
		font-family: sans-serif;
	}
	.photos {
		margin-top: 1em;
		display: flex;
		flex-direction: row;
		overflow: hidden;
		inline-size: 100%;
		background: rgba(0, 0, 0, 0.1);
		border-radius: 2em;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.photo {
		border-radius: 1em;
		object-fit: cover;
		inline-size: 26%;
		margin: 2em;
		aspect-ratio: 1;
		box-shadow: 0em 0em 2em grey;
	}
</style>
