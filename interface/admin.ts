export interface UsersResult {
    id: string;
    name: string;
    email: string;
    accountStatus: number;
  }
  
  export interface AccountStatusType {
    label: string;
    status: number;
  }
  
  export interface SearchParamsProps {
    searchParams: URLSearchParams;
  }