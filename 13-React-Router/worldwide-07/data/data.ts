export interface Citiestype {
  cityName: string;
  country: string;
  emoji: string;
  date: string | number;
  note: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
}
