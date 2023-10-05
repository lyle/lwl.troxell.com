<script>
  import EpisodeImage from './EpisodeImage.svelte';

	import EpisodeInfoLine from "./routes/episodes/[slug]/EpisodeInfoLine.svelte";

	export let fallbackImage='';
	/** @type {import("./podcast").Item} */
	export let episode;

</script>

<div class="episode">
	<div>
	<h2><a href="/episodes/{episode.shortName}">{episode.title}</a></h2>
<EpisodeInfoLine {episode}></EpisodeInfoLine>
	<p>{episode['itunes:summary']}</p>
</div>
<a href="/episodes/{episode.shortName}">
	<EpisodeImage altText={episode.title} image={episode["itunes:image"]?.href} {fallbackImage} /></a>
</div>

<style>
	.episode {
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 0.5em;
		padding-top: 0.5em;
		clear: both;
		width: 100%;
		border-bottom: 1px solid cadetblue;
	}
</style>
