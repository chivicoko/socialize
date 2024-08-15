import { SearchOutlined } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <div>
        <div className="hidden xl:flex items-center justify-between p-2 bg-slate-100 rounded-lg">
            <input type="text" placeholder='search...' className="bg-transparent outline-none" />
            <SearchOutlined className="fill-[#633CFF] hover:fill-[#947bf8]" />
        </div>
    </div>
  )
}

export default SearchBar;