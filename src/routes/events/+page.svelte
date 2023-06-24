<script>
	import '@event-calendar/core/index.css';
	import TimeGrid from '@event-calendar/time-grid';

	let plugins = [TimeGrid];
	let options = {
		view: 'timeGridWeek'
	};

	import Instagram from '$lib/components/Instagram.svelte';
</script>

<Instagram />

<style>
</style>
