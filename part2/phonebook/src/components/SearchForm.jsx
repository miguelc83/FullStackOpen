const SearchForm = ({ searchTerm, handleSearchChange }) => {
  return (
    <form>
      <div>
        filter shown with: <input value={searchTerm} onChange={handleSearchChange} />
      </div>
    </form>
  )
}

export default SearchForm