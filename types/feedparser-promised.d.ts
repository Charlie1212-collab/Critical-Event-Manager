declare module 'feedparser-promised' {
    interface FeedItem {
        title: string;
        description: string;
        summary: string;
        date: Date;
        pubdate: Date;
        link: string;
        guid: string;
        author: string;
        comments: string;
        origlink: string;
        image: {
            url: string;
            title: string;
        };
        source: {
            url: string;
            title: string;
        };
        categories: string[];
        enclosures: {
            url: string;
            type: string;
            length: string;
        }[];
        meta: {
            title: string;
            description: string;
            link: string;
            xmlUrl: string;
            date: Date;
            pubdate: Date;
            author: string;
            language: string;
            image: {
                url: string;
                title: string;
            };
            favicon: string;
            copyright: string;
            generator: string;
            cloud: any;
        };
    }

    function parse(url: string, options?: any): Promise<FeedItem[]>;

    export { FeedItem, parse };
}