import { type ChangeEvent } from 'react';
import { Input } from 'semantic-ui-react';

type SearchBarProps = {
  searchQuery: string;
  onChangeHandle: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ searchQuery, onChangeHandle }: SearchBarProps) => {
  return (
    <Input
      size="large"
      icon="search"
      placeholder="Search Products"
      value={searchQuery}
      onChange={onChangeHandle}
    />
  );
};

export default SearchBar;
