<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>
<div>
<nav>
	{#each data.topLeft as link}
	 <a class="{link.active ? "selected" : ''}" href={link.slug}>
		{#if link.icon}
			<img src={link.icon} alt={link.title} />
		{:else}
			{link.title}
		{/if}
	</a>
	{/each}
</nav>
<nav class="topRight">
	{#each data.topRight as link}
	 <a class="{link.active ? "selected" : ''}" href={link.slug}>
		{#if link.icon}
			<img src={link.icon} alt={link.title} />
		{:else}
			{link.title}
		{/if}
	</a>
	{/each}
</nav>
</div>

<slot></slot>


<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	nav {
		margin: auto 0;
	}
	nav a, nav a:visited {
		font-weight: bold;
		color: black;
		text-decoration: none;
		display: inline-block;
		border-radius: 10px;
		padding: 4px;
		vertical-align: middle;
	}
	.selected , nav a:hover {
		background-color: rgb(27, 74, 10);
		color: white;
	}
	.selected img, nav a:hover img  {
		-webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
          filter: invert(100%);
	}
	nav a.selected {
		color: white;
	}
	nav img {
		width: 30px;
	}
</style>