const Search = ({ onSearch }) => {
    return (
      <input
        type="text"
        placeholder="Search tasks"
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  };
  
  export default Search;
  