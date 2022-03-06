import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";
import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  //remember to use q?=
  const url = `http://localhost:3000/recipes?q=` + query;

  const { data, isPending, error } = useFetch(url);

  return (
    <div>
      <h2>recipe including {query}</h2>
      {error && <h1 className="error">{error}</h1>}
      {isPending && <h1 className="loading">loading...</h1>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
