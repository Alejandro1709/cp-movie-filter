export default interface Movie {
  readonly id: number;
  readonly title: string;
  readonly poster_path: string;
  readonly genres: string[];
  readonly duration?: string;
  readonly restriction?: string;
}
