import { useState } from "react";

interface Props {
  addGift: AddGift;
  gifts: Gift[];
}

export const AddGiftForm: React.FC<Props> = ({ addGift }) => {
  const [title, setTitle] = useState("");

  const handleTitle = (title: string) => {
    let condition = title === "";
    condition ? alert("No se puede agregar un regalo vacio") : addGift(title);
    setTitle("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Nuevo regalo..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleTitle(title);
        }}
      >
        Agregar
      </button>
    </form>
  );
};
