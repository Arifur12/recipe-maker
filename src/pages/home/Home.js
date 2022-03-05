import React from "react";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";

export default function Home() {
  const { error, isPending, data } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <h1 className="error">{error}</h1>}
      {isPending && <h1 className="loading">loading...</h1>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
