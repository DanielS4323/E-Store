import { Input, Search } from 'semantic-ui-react';

const SearchBar = ({ searchQuery, setSetSearchQuery }) => {
  return (
    <Input
      size='large'
      icon='search'
      placeholder="Search Products"
      value={searchQuery}
      onChange={(e) => setSetSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
