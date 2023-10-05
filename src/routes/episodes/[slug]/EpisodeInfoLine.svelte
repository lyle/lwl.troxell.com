<script>
	import { formatData } from '$lib/helpers';

	/** @type {import('../../../podcast').Item} */
	export let episode;

	/**
	 * Function to take the season and episode number and make it into a string in format S1:E1
	 * @param {string} season
	 * @param {string} episode
	 */
	function formatSeasonEpisode(season, episode){
		return `S${season}:E${episode}`
	}
</script>

<p class="info">{formatData(episode.pubDate)} | {episode["itunes:duration"]} | {formatSeasonEpisode(episode['itunes:season'], episode['itunes:episode'])}</p>


<style>
	.info {
		box-sizing: border-box;
		color: rgb(15, 15, 9);
		display: block;
		font-family: "Roboto Mono", "Andale Mono", Menlo, "Courier New", Courier, monospace;
		font-feature-settings: normal;
		font-kerning: auto;
		font-optical-sizing: auto;
		font-size: 11.998px;
		font-stretch: 100%;
		font-style: normal;
		font-variant-alternates: normal;
		font-variant-caps: normal;
		font-variant-east-asian: normal;
		font-variant-ligatures: normal;
		font-variant-numeric: normal;
		font-variant-position: normal;
		font-variation-settings: normal;
		font-weight: 400;
		height: 20px;
		line-height: 20px;
		margin-block-end: 0px;
		margin-block-start: 16px;
		margin-bottom: 0px;
		margin-inline-end: 0px;
		margin-inline-start: 0px;
		margin-left: 0px;
		margin-right: 0px;
		margin-top: 16px;
		opacity: 0.4;
		text-transform: uppercase;
		width: 380.172px;
		-webkit-font-smoothing: antialiased;
	}
</style>

