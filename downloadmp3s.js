import fs from 'fs';
import nFetch from "node-fetch";

fs.readFile('lwl.json', 'utf8', (err, data) => {
	if (err) throw err;
	const file = JSON.parse(data);
	var downloadItems = file.rss.channel.item.map((item) => {
		let shortname = makeShortName(item.title);
		let img = item['itunes:image'];

		return {
			shortname: shortname,
			mp3: item.enclosure.url.replace('?aid=rss_feed&feed=jtpcol_C', ''),
			image: img ? img.href.replace('?aid=rss_feed', '') : ''
		};
	});

	downloadItems.forEach((item, index) => {
		console.log(item.shortname);
		console.log(item.mp3);
		console.log(item.image);
		console.log('------------------');
		// saveMp3(item);
        // saveImage(item);
	});
});
function saveImage(item) {
    if (!item.image) return;
    nFetch(item.image).then(
        (res) => new Promise((resolve, reject) => {
            const dest = fs.createWriteStream(`./static/images/${item.shortname}.jpg`);
            res.body.pipe(dest);
            dest.on('close', () => resolve());
            dest.on('error', reject);
        }).catch((err) => console.error(err))
    );
}
function saveMp3(item) {
    nFetch(item.mp3).then(
        (res) => new Promise((resolve, reject) => {
            const dest = fs.createWriteStream(`./static/audio/${item.shortname}.mp3`);
            res.body.pipe(dest);
            dest.on('close', () => resolve());
            dest.on('error', reject);
        }).catch((err) => console.error(err))
    );
}

// A function that makes a short name from a title.
// covering spaces to '-' and removing special characters
// and making it lowercase.
function makeShortName(title) {
	return title
		.replace(/-\s/g, '')
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '')
		.toLowerCase();
}
