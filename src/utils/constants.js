export const Netflic_GPT_LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460";

export const Netflic_GPT_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const Netflic_GPT_USERPROFILEURL =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer" + process.env.TMDB_KEY ,
  },
};

export const MOVIE_POSTER_PATH = "https://image.tmdb.org/t/p/w500/";
export const MOVIE_POSTER_PATH_NOT_PRESENT = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const SUPPORTED_LANGUAGE = [
  {
    identifier: "en",
    name: "English"
  },
  {
    identifier: "hindi",
    name: "हिंदी"
  }
]

export const lang = {
  en: {
    search: "search",
    placeholder: "What you want to see today?"
  },
  hindi: {
    search: "खोज",
    placeholder: "आज आप क्या देखना चाहते हैं?"
  }
}

export const API_TOKEN = process.env.REACT_APP_GEMINI_API_KEY