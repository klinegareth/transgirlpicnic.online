<script>
</script>

<nav>
	<a href="/">home</a>
	<a href="/bulletin">bulletin</a>
	<a href="/events">events</a>
</nav>

<div class="content"><slot /></div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 5vh;
		background: #dee2ff;
	}
	a {
		text-decoration: none;
		color: #424b5c;
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		font-size: 1.2vw;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		text-align: center;
		line-height: 5vh;
		border: 2px;
	}
</style>
