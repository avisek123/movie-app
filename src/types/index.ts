export type {
  PublicStackParams,
  PublicNavigationProps,
  PrivateNavigationProps,
  PrivateStackParams,
  RootRouteProps,
  PrivateRootRouteProps,
} from './allRoutes';
interface PatronDetails {
  user_id: string;
  user_first_name: string;
  user_last_name: string;
  user_profile_img: string;
}

interface Patrons {
  details: PatronDetails[];
  count: number;
}

export interface Campaign {
  name: string;
  category: string;
  description: string;
  image: string;
  profile_icon: string;
  likes_count: number;
  comments_count: number;
  campaign_name: string;
  campaign_collection: number;
  campaign_goal: number;
  campaign_end_date: number;
  patrons: Patrons;
}
export interface MovieType {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: number;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: string;
  Images: string[];
}
export interface MovieGenre {
  id: number;
  title: string;
  img: string;
}
