import { InputWrap, SearchIcon, StyledInput } from "./Searchbar.styled";

export const SearchBar = ({ filter, onSearch }) => {
  return (
    <>
      <InputWrap>
        <SearchIcon />
        <StyledInput
          type="text"
          placeholder="Search your trip"
          value={filter}
          onChange={(e) => onSearch(e.target.value)}
        />
      </InputWrap>
    </>
  );
};
