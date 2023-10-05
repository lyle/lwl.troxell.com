import type { Item } from "../podcast";

export function makeShortName(title: String) {
	return title
		.replace(/-\s/g, '')
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '')
		.toLowerCase();
}

export function sortEpisodesChronologically(a: Item, b: Item) {
    return new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime();
}

export 	function formatData(inputString: string){
    const date = new Date(inputString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}