
import { error } from '@sveltejs/kit';
import xml from 'xml2json';
import fs from 'fs';
import type { Podcast } from '../podcast.js';
import { makeShortName, sortEpisodesChronologically } from '$lib/helpers.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    // Open the lwl.rss file and convert it to JSON
    let lwlXML = fs.readFileSync('static/lwl.rss', 'utf8');
    let lwl: Podcast = JSON.parse(xml.toJson(lwlXML));
    // fs.writeFileSync('lwl-converted.json', JSON.stringify(lwl, null, 2), 'utf8');
    lwl.rss.channel.item.forEach((item) => {
        item.shortName = makeShortName(item.title);
        // if (item['content:encoded']) {
        //     item.description = xml.toXml(item['content:encoded']);
        // }
    });
    lwl.rss.channel.item.sort(sortEpisodesChronologically);

	return lwl.rss.channel;

	throw error(404, 'Not found');
}