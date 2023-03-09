<script>
    import '@event-calendar/core/index.css';
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';

	let plugins = [TimeGrid];
	let options = {
		view: 'timeGridWeek',
	};
</script>

<div class="calendar">
	<Calendar {plugins} {options} />
</div>

<style>
    .calendar {
            background: white;
            height: 75vh;
            width: 75vw;
            overflow: scroll;
            display: flex;
            align-items: start;
            justify-content: center;
            padding: 0;
            margin: 0;
            border-radius: 8px;
        } 
</style>
