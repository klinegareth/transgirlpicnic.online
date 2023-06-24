<main>
	<nav>
		<a href="/">home</a>
		<a href="/photos">photos</a>
		<a href="/events">events</a>
	</nav>

	<div class="content"><slot /></div>
</main>

<style>
	main {
		block-size: 100dvh;
		display: flex;
		flex-direction: column;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		block-size: 100%;
	}
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		background: #dee2ff;
		inline-size: 100%;
	}
	a {
		line-height: 2em;
		text-decoration: none;
		color: #424b5c;
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		font-size: 1.8em;
		text-align: center;
	}
</style>
