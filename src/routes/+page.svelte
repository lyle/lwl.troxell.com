<script>
	import {  formatData } from '$lib/helpers';
	import Episode from '../Episode.svelte';
	

	/** @type {import('./$types').PageData} */
	export let data;

	var sortedEpisodes = data.item;
	var fallbackImage = "/images/lunch-with-lyle-logo_800x800.jpg";
	
	function toggleSort() {
		sortedEpisodes = sortedEpisodes.reverse()
	}
</script>

<img class="logo" src={fallbackImage} alt={data.title}  />
<h1>{data.title}</h1>
<p class="description">{data.description}</p>
	<h2>Season 1</h2>
	<p>
	{formatData(sortedEpisodes[0].pubDate)} <button class="reverseicon" on:click={toggleSort}><img src="/icons/reverse.png" alt="reverse" /></button> {formatData(sortedEpisodes[sortedEpisodes.length - 1].pubDate)}
</p>
<!-- Loop over all data.item-->
{#each sortedEpisodes as episode}
    <Episode {episode} {fallbackImage} />
{/each}


<style>
	.reverseicon, .reverseicon img {
		background: none;
		border: none;
		display: inline-block;
	}
	.reverseicon img {
		/* make the image align with the text around it */
		vertical-align: middle;
		width: 20px;
	}
	h1 {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    color: #0f0f09;
    box-sizing: border-box;
    font: 400 2.286rem/1.2 "Sequel Wide","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0;
	}
.description {
	
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    color: #0f0f09;
    box-sizing: border-box;
    font: 400 1.43rem/32px "Sequel Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
}
.logo {
	float: right;
	margin-left: 1em;
	margin-bottom: 0.5em;
	height: 300px;
	width: 300px;
}	
</style>
