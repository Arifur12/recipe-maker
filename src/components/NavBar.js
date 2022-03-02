import { Link } from "react-router-dom";
import "./NavBar.css";


export default function navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/recipe">Recipe</Link>
      <Link to="/search">Search</Link>
      <Link to="/create">Create</Link>
    </div>
  );
}
