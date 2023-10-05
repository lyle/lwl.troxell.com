<script>

	export let fallbackImage='/images/lunch-with-lyle-logo_800x800.jpg';
	/**
	 * @type string
	 */
	export let altText;
/**
	 * @type string | undefined
	 */	
	export let image;

	var localImage =  image ? image.replace("https://lwl.troxell.com","") : fallbackImage;
</script>

	<img
		class="episodeImage"
		height={120}
		width={120}
		src={localImage}
		alt={altText}
	/>

<style>
	img.episodeImage {
		height: 200px;
		width: 200px;
		float: right;
		margin-left: 1em;
		margin-bottom: 0.5em;
	}	
</style>

