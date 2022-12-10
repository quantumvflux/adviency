import { useState } from "react";

interface Props {
  addGift: AddGift;
  gifts: Gift[];
}

export const AddGiftForm: React.FC<Props> = ({ addGift }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleTitle = (title: string) => {
    let condition = title === "";
    condition
      ? alert("No se puede agregar un regalo vacio")
      : addGift(title, quantity);
    setTitle("");
  };
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Nuevo regalo..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.valueAsNumber);
          }}
        ></input>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleTitle(title);
          setQuantity(0);
        }}
      >
        Agregar
      </button>
    </form>
  );
};
