<script>
	import EpisodeImage from '../../../EpisodeImage.svelte';
	import EpisodeInfoLine from './EpisodeInfoLine.svelte';
	import LWLPlayer from './LWLPlayer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const fallbackImage = data.fallbackImage;
	const episode = data.episode;
	var shouldShowDescription = episode.description !== episode['itunes:summary'];
</script>
<div class="episodeInfo">

	<div>
<h1>{episode.title}</h1>
<EpisodeInfoLine {episode} />
<div class="summary">{episode['itunes:summary']}</div>
</div>
<EpisodeImage altText={episode.title} image={episode["itunes:image"]?.href} {fallbackImage} />
</div>

<LWLPlayer title={episode.title} artist="Lunch with Lyle" src={episode.enclosure.url.replace('https://lwl.troxell.com', '')}/>
{#if shouldShowDescription}
	<div class="notes">
		<h2>Notes</h2>
		{@html episode.description}
	</div>
{/if}

<style>
	.episodeInfo {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	
	}
	.notes {
		margin-top: 1em;
		border-top: 1px solid black;
		clear: both;
	}
</style>
