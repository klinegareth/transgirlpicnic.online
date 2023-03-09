<script lang="ts">
	import type { AidRequest } from '../../../types/aidRequest.type';
	export let request: AidRequest = {
		title: '',
		description: ''
	};
	function handleSubmit() {
		console.log(request);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input bind:value={request.title} />
	<input bind:value={request.description} />
	<button />
</form>
