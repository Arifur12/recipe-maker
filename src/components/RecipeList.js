import { Link } from "react-router-dom";
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="card" key={recipe.id}>
          <h1>{recipe.title}</h1>
          <p>{recipe.cookingTime} to make</p>
          <p>{recipe.method.substring(1, 100)}...</p>
          <Link to={`/recipes/${recipe.id}`}>cook this</Link>
        </div>
      ))}
    </div>
  );
}
