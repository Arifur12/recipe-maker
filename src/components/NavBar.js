import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchBar from "./SearchBar";

export default function navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Home</h1>
        </Link>
        <SearchBar></SearchBar>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
