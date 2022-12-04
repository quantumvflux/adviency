import "./../App.css";
interface Props {
  gift: Gift;
  toggleDelivered: ToggleDelivered;
  deleteGift: DeleteGift;
}

export const GiftListItem: React.FC<Props> = ({
  gift,
  toggleDelivered,
  deleteGift,
}) => {
  return (
    <li className="gift-container">
      <label
        style={{ textDecoration: gift.delivered ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={gift.delivered}
          onClick={() => toggleDelivered(gift)}
        />{" "}
        {gift.title}
      </label>
      <button
        onClick={() => {
          deleteGift(gift.id);
        }}
      >
        Borrar regalo
      </button>
    </li>
  );
};
