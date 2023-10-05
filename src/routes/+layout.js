export const prerender = true;
export const trailingSlash = 'always';

/** @type {import('./$types').LayoutLoad} */
export function load({ route }) {
	return {
		topLeft: [
			{
				slug: '/',
				title: 'home',
				active: route.id?.toString() === '/',
				icon: '/icons/3200459_base_centre_drawn_hand_home_icon.svg'
			},
			{
				slug: '/subscribe',
				title: 'Listen and Subscribe',
				active: route.id?.toString() === '/subscribe',
			}
		],
		topRight: [
			
			{
				slug: '/lwl.rss',
				title: 'RSS Podcast File',
				icon: '/icons/goodstuffnononsense.com/492995_rss_social_icons_social_blog_rss_feed_hand_drawn.svg',
				active: false,
			},
			{
				slug: 'https://www.facebook.com/lyle.e.troxell',
				title: 'Facebook',
				icon: '/icons/goodstuffnononsense.com/492997_facebook_hand_drawn_social_social_icons.svg',
				external: true,
				active: false,
			},
			{
				slug: 'https://www.linkedin.com/in/troxell/',
				title: 'LinkedIn',
				icon: '/icons/goodstuffnononsense.com/492992_social_icons_social_linked_in_hand_drawn.svg',
				external: true,
				active: false,
			},
			{
				slug: 'https://www.instagram.com/troxell/',
				title: 'Instagram',
				icon: '/icons/goodstuffnononsense.com/1242852_social_social_media_instagram_hand_drawn.svg',
				external: true,
				active: false,
			}
		]
	};
}
