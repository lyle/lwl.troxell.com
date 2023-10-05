
import { error } from '@sveltejs/kit';
import xml from 'xml2json';
import fs from 'fs';
import { makeShortName } from '$lib/helpers.js';
import type { Podcast, Item } from '../../../podcast.js';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	    // Open the lwl.rss file and convert it to JSON
		let lwlXML = fs.readFileSync('static/lwl.rss', 'utf8');
		let lwl: Podcast = JSON.parse(xml.toJson(lwlXML));

		var episode  = lwl.rss.channel.item.find((item) => {
			return makeShortName(item.title) === params.slug;
		});

		if (!episode) {
			throw error(404, 'Not found');
		}
		episode.shortName = makeShortName(episode.title);
		return {episode:episode, fallbackImage: "/images/lunch-with-lyle-logo_800x800.jpg"};
}