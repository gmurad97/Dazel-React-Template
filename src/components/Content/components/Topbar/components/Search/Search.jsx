import "./Search.css";

const Search = () => {
    return (
        <div className="topbar__search">
            <input type="text" className="topbar__search-input" placeholder="Search" />
            <div className="topbar__search-icon">
                <i className="fi fi-rr-search"></i>
            </div>
        </div>
    );
}

export default Search;