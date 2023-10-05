import fs from 'fs';
import nFetch from "node-fetch";
import xml from 'xml2json';


let lwlXML = fs.readFileSync('lwl.rss', 'utf8');
let lwl =  JSON.parse(xml.toJson(lwlXML,{reversible: true}));

console.log(lwl);

lwl.rss.channel.item.forEach((item) => {
	// console.log(item);
	let shortname = makeShortName(item.title["$t"]);
	// console.log(shortname);
		let img = item['itunes:image'];
		if (img) {
			img.href = `https://lwl.troxell.com/images/${shortname}.jpg`
			item['itunes:image'] = img;
		}
		item.enclosure.url = `https://lwl.troxell.com/audio/${shortname}.mp3`;	
});
console.log(lwl.rss.channel.item);
var rssAsXML = xml.toXml(lwl);
fs.writeFileSync('static/lwl_generated2.xml', rssAsXML, 'utf8');
// fs.readFile('lwl.rss', 'utf8', (err, data) => {
// 	if (err) throw err;

// 	const file = JSON.parse(data);
// 	file.rss.channel.item.forEach((item) => {
// 		let shortname = makeShortName(item.title);
// 		let img = item['itunes:image'];
// 		if (img) {
// 			img.href = `https://lwl.troxell.com/images/${shortname}.jpg`
// 			item['itunes:image'] = img;
// 		}
// 		item.enclosure.url = `https://lwl.troxell.com/audio/${shortname}.mp3`;
		
// 		// item['itunes:image'] = img ? img.href.replace('?aid=rss_feed', '') : '';
// 		// return {
// 		// 	shortname: shortname,
// 		// 	mp3: item.enclosure.url.replace('?aid=rss_feed&feed=jtpcol_C', ''),
// 		// 	image: img ? img.href.replace('?aid=rss_feed', '') : ''
// 		// };
// 	});
// 	console.log(file);
// 	// let lwlXML = fs.readFileSync('static/lwl.rss', 'utf8');
//     // let lwl: Podcast = JSON.parse(xml.toJson(lwlXML));
// 	var rs = xml.toXml(file);
// 	console.log(rs);
// 	fs.writeFileSync('static/lwl_generated.xml', rs, 'utf8');

//     // fs.writeFileSync('lwl.json', JSON.stringify(lwl, null, 2), 'utf8');
// 	// downloadItems.forEach((item, index) => {
// 	// 	console.log(item.shortname);
// 	// 	console.log(item.mp3);
// 	// 	console.log(item.image);
// 	// 	console.log('------------------');
// 	// 	// saveMp3(item);
//     //     // saveImage(item);
// 	// });
// });


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
