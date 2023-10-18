interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
        count: number;
        total: number;
        per_page: number;
    };
}

interface ImageUrls {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

interface Trailer {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: ImageUrls & {
        medium_image_url: string;
        maximum_image_url: string;
    };
}

interface Title {
    type: string;
    title: string;
}

interface AiredDates {
    from: string;
    to: string | null;
    prop: {
        from: {
            day: number;
            month: number;
            year: number;
        };
        to: {
            day: number | null;
            month: number | null;
            year: number | null;
        };
        string: string;
    };
}

interface Producer {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface Genre {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface Theme {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface Demographic {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface AnimeData {
    mal_id: number;
    url: string;
    images: {
        jpg: ImageUrls;
        webp: ImageUrls;
    };
    trailer: Trailer;
    approved: boolean;
    titles: Title[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: AiredDates;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string | null;
    season: string | null;
    year: number | null;
    broadcast: {
        day: string | null;
        time: string | null;
        timezone: string | null;
        string: string | null;
    };
    producers: Producer[];
    licensors: Producer[];
    studios: Producer[];
    genres: Genre[];
    explicit_genres: string[];
    themes: Theme[];
    demographics: Demographic[];
}

interface AnimeList {
    pagination: Pagination;
    data: AnimeData[];
}
