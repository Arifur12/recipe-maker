import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Recipe.css";

export default function Recipe() {
  // useParams for getting current id of link
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    `http://localhost:3000/recipes/${id}`
  );
  return (
    <div>
      {error && <h1>{error}</h1>}
      {isPending && <h1>loading...</h1>}
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>{data.method}</p>
        </div>
      )}
    </div>
  );
}
