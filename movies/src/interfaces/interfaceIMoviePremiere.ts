export interface IMoviePremiere {
    id: string;
    title: string;
    original_title: string;
    poster_path: string;
    vote_count: number;
    vote_average: number;
    original_languaje: string;
    runtime: number;
    adult: boolean;
    video: boolean;
    genre: [{ id: number, name: string }];
    data_release: string;
    popularity: number;
    homepage: string;
    overview: string;
    tagline: string;
}