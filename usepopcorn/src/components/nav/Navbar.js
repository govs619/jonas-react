import Search from "./Search";
import Logo from "./Logo";
import SearchResult from "./SearchResult";

function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <SearchResult />
    </nav>
  );
}

export default Navbar;
