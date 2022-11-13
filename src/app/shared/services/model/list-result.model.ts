export interface ListResult<T> {
  count: number;
  next: string,
  previous: any,
  results: T[];
}
