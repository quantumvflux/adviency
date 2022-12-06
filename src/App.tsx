import { useState } from "react";
import "./App.css";
import { AddGiftForm } from "./components/AddGiftForm";
import { GiftList } from "./components/GiftList";

const initialGifts: Gift[] = [
  {
    id: 0,
    title: "GTX 1650 TI",
    delivered: false,
  },
  {
    id: 1,
    title: "Ibanez AZ2204",
    delivered: false,
  },
  {
    id: 2,
    title: "Gabinete blanco",
    delivered: true,
  },
];

export const App = () => {
  const [gifts, setGifts] = useState(initialGifts);

  const toggleDelivered = (selectedGift: Gift) => {
    const newGiftList = gifts.map((gift) => {
      if (gift === selectedGift) {
        return {
          ...gift,
          delivered: !gift.delivered,
        };
      }
      return gift;
    });
    setGifts(newGiftList);
  };

  const addGift = (title: string) => {
    let newGift = {
      id: gifts.length,
      title,
      delivered: false,
    };
    setGifts([...gifts, newGift]);
  };

  const deleteGift = (giftId: number) => {
    let filteredGiftList = gifts.filter((gift) => gift.id !== giftId);
    setGifts(filteredGiftList);
  };

  const deleteAll = () => {
    setGifts([]);
  };

  return (
    <div className="app-container">
      <h1>giftify</h1>
      <AddGiftForm addGift={addGift} />
      <ul>
        <GiftList
          gifts={gifts}
          toggleDelivered={toggleDelivered}
          deleteGift={deleteGift}
        />
      </ul>
      <button className="delete-all-btn" onClick={deleteAll}>
        Borrar todo
      </button>
    </div>
  );
};
