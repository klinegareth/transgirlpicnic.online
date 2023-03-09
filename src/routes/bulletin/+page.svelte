<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	export let data;
	export let form;
</script>

<h1>posts</h1>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

<form method="POST" action="?/create" use:enhance>
	<label>
		add a post:
		<input
			name="description"
			value={form?.description ?? ''}
			required
		/>
	</label>
</form>

<ul>
	{#each data.posts as post (post.id)}
		<li class="post" in:fly={{ y: 20 }} out:slide>
			<form method="POST" action="?/delete" use:enhance>
				<input type="hidden" name="id" value={post.id} />
				<button aria-label="Mark as complete">✔</button>

				{post.description}
			</form>
		</li>
	{/each}
</ul>
