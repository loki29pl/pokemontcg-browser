export interface ListResponse<T> {
  count: number;
  page: number;
  pageSize: number;
  totalCount: number;
  data: T[];
}
