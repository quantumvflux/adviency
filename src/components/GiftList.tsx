import { GiftListItem } from "./GiftListItem";

interface Props {
  gifts: Gift[];
  toggleDelivered: ToggleDelivered;
  deleteGift: DeleteGift;
}

export const GiftList: React.FC<Props> = ({
  gifts,
  toggleDelivered,
  deleteGift,
}) => {
  return (
    <ul>
      {gifts.length > 0 ? (
        gifts.map((gift) => (
          <div key={gift.id}>
            <GiftListItem
              gift={gift}
              toggleDelivered={toggleDelivered}
              deleteGift={deleteGift}
            />
          </div>
        ))
      ) : (
        <p>Todavía no hay ningun regalo, rufián</p>
      )}
    </ul>
  );
};
