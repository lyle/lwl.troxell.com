export interface Podcast {
    rss: RSS;
}

export interface RSS {
    version:            string;
    "xmlns:atom":       string;
    "xmlns:content":    string;
    "xmlns:googleplay": string;
    "xmlns:itunes":     string;
    channel:            Channel;
}

export interface Channel {
    "atom:link":           AtomLink[];
    generator:             string;
    title:                 string;
    description:           string;
    copyright:             string;
    language:              string;
    pubDate:               string;
    lastBuildDate:         string;
    image:                 Image;
    link:                  string;
    "itunes:type":         string;
    "itunes:summary":      string;
    "itunes:author":       string;
    "itunes:explicit":     ItunesExplicit;
    "itunes:image":        ItunesImage;
    "itunes:new-feed-url": string;
    "itunes:keywords":     string;
    "itunes:owner":        ItunesOwner;
    "itunes:category":     ItunesCategoryElement[];
    item:                  Item[];
}

export interface AtomLink {
    href:   string;
    rel:    string;
    title?: string;
    type?:  string;
    xmlns?: string;
}

export interface Image {
    link:  string;
    title: string;
    url:   string;
}

export interface Item {
    shortName?:           string;
    guid:                 GUID;
    title:                string;
    description:          string;
    pubDate:              string;
    author:               string;
    link:                 string;
    enclosure:            Enclosure;
    "itunes:title":       string;
    "itunes:author":      string;
    "itunes:image"?:      ItunesImage;
    "itunes:duration":    string;
    "itunes:summary":     string;
    "itunes:subtitle":    string;
    "itunes:explicit":    ItunesExplicit;
    "itunes:episodeType": ItunesEpisodeType;
    "itunes:episode":     string;
    "itunes:season":      string;
    "content:encoded"?:   string;
    "itunes:keywords"?:   string;
}

export interface Enclosure {
    length: string;
    type:   Type;
    url:    string;
}

export enum Type {
    AudioMPEG = "audio/mpeg",
}

export interface GUID {
    isPermaLink: string;
    $t:          string;
}

export enum ItunesEpisodeType {
    Full = "full",
}

export enum ItunesExplicit {
    No = "no",
    Yes = "yes",
}

export interface ItunesImage {
    href: string;
}

export interface ItunesCategoryElement {
    text:               string;
    $t?:                string;
    "itunes:category"?: ItunesCategoryItunesCategory;
}

export interface ItunesCategoryItunesCategory {
    text: string;
}

export interface ItunesOwner {
    "itunes:name":  string;
    "itunes:email": string;
}
