import { SearchOutlined } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-lg">
            <input type="text" placeholder='search...' className="bg-transparent outline-none" />
            <SearchOutlined />
        </div>
    </div>
  )
}

export default SearchBar;