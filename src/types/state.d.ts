export default interface StateType {
  status: 'idle' | 'loading' | 'error';
  movies?: Movie[];
  error?: Error | null;
}
