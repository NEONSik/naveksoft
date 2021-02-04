export interface PaginationInterface {
  data?: any[];
  first?: string;
  last?: string;
  prev?: string;
  next?: string;
  current_page?: number;
  from?: number;
  last_page?: number;
  path?: string;
  per_page?: number;
  to?: number;
  total?: number;
}
