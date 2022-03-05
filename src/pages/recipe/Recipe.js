import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Recipe.css";

export default function Recipe() {
  // useParams for getting current id of link
  const { id } = useParams();
  // naming data as recipe
  const {
    data: recipe,
    error,
    isPending,
  } = useFetch(`http://localhost:3000/recipes/${id}`);
  return (
    <div>
      {error && <h1 className="error">{error}</h1>}
      {isPending && <h1 className="loading">loading...</h1>}
      {recipe && (
        <>
          <h1>{recipe.title}</h1>
          <p> takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p>{recipe.method}</p>
        </>
      )}
    </div>
  );
}
