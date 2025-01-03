import { ReactNode } from "react";

export interface SearchBoxProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  // handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
}

export interface ActionButtonProps {
  disable?: boolean;
  handleClick: () => Promise<void>;
  label: string;
}

export interface InfiniteScrollContainerProps extends React.PropsWithChildren {
  onBottomReached: () => void;
  className?: string;
}

export interface StatusBadgeProps {
  status: number;
}

export interface DialogBoxProps {
  children: ReactNode;
  openDialog: boolean;
  closeDialog: () => void;
}

export interface FilterType {
  label: string;
  value?: string;
  status?: number;
}

export interface FiltersProps<T extends FilterType> {
  links: T[];
  handleFilterChange: (label: string) => void;
  filters: string[];
}