export type Continentes = {
  id: number;
  title: string;
  description: string;
  img_src: string;
  detail: {
    banner_src: string;
    summary: string;
    countries: number;
    languages: number;
    cities: number;
    top_cities: TopCities[];
  };
};

type TopCities = {
  id: number;
  city: string;
  country: string;
  img: string;
  flag: string;
};
