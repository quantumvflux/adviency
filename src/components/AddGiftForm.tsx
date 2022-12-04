import { useState } from "react";

interface Props {
  addGift: AddGift;
}
export const AddGiftForm: React.FC<Props> = ({ addGift }) => {
  const [title, setTitle] = useState("");

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
          addGift(title);
          setTitle("");
        }}
      >
        Agregar
      </button>
    </form>
  );
};
