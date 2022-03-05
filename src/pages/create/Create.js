import { useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientsInput = useRef(null);

  const { postData, error, isPending } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + "minutes",
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      // how to use array setstate
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient("");
    // useref to clear iinput field
    ingredientsInput.current.focus();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>recipe title</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>cooking time</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>

        <label>
          <span>how to cook</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          />
        </label>

        <label>
          <span>ingredients</span>
          <input
            type="text"
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientsInput}
          />
          <button onClick={handleAdd} value={newIngredient} className="btn">
            add
          </button>
        </label>

        <br />
        <button className="btn">submit</button>
      </form>
    </>
  );
}
