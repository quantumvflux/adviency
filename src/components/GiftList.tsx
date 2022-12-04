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
      {gifts.map((gift) => (
        <GiftListItem
          key={gift.id}
          gift={gift}
          toggleDelivered={toggleDelivered}
          deleteGift={deleteGift}
        />
      ))}
    </ul>
  );
};
