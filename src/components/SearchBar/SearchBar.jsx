export const SearchBar = ({ filter, onSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search your trip"
        value={filter}
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
};
