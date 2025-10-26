export interface Country {
  name: {
    common: string;
    official: string
  };
  flags: {
    svg: string;
  };
  tld: string;
  currencies: Record<string, {
    name: string
  }>;
  capital: string;
  region: string;
  subregion: string;
  languages: string[];
  population: number;
  borders: string[];
}
