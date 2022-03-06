import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./SearchBar.css";

export default function SearchBar() {
  const [term, setTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
