<div class="trans-container">
	<h1>Trans Girl Picnic</h1>
</div>
<div class="opaque-container">
	<h2>every last Sunday of the month</h2>
	<div class="bottom-content">
		<p>Maria Hernandez Park</p>
	</div>
</div>

<div class="background" />

<style>
	@font-face {
		src: url('./fonts/Roslindale-DeckNarrowItalic-Testing.woff2') format('woff2'),
			url('./fonts/Roslindale-DisplayCondensedBold.woff') format('woff');
		font-family: 'Roslindale';
		font-style: italic;
		font-weight: normal;
	}
	.bottom-content {
		margin-top: 10vh;
		font-size: 3vw;
		font-family: 'Cabin', sans-serif;
		font-weight: 500;
	}
	h2 {
		margin-top: 5vh;
		font-family: 'Cabin', sans-serif;
		font-weight: 500;
		font-size: 3vw;
	}
	.trans-container {
		background: #cbc0d333;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 80vh;
		font-size: 5vw;
		font-family: 'Roslindale';
		color: #feeafa;
	}
	.opaque-container {
		display: flex;
		flex-direction: column;
		background: #dee2ff;
		color: #424b5c;
		width: 100vw;
		height: 100vh;
		position: sticky;
		margin: 0;
		align-items: center;
	}
	.background {
		background: url('./tgirlpicnicbw.gif');
		background-position: center;
		background-origin: center;
		background-attachment: fixed;
		background-size: cover;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		margin: 0;
	}
</style>
