export interface IAttr {
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}

export interface IPagination {
  limit: string;
  page: string;
}

export interface ISearch {
  track?: string;
  artist?: string;
}
