export default interface Movie {
  readonly id: number;
  title: string;
  poster: string;
  genres: string[];
  duration: string;
  restriction: string;
}
