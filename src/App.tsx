import { useEffect, useState } from "react";
import "./App.css";
import { AddGiftForm } from "./components/AddGiftForm";
import { GiftList } from "./components/GiftList";

const initialGifts: Gift[] = [
  {
    id: 0,
    title: "GTX 1650 TI",
    quantity: 1,
    delivered: false,
  },
  {
    id: 1,
    title: "Ibanez AZ2204",
    quantity: 2,
    delivered: false,
  },
  {
    id: 2,
    title: "Gabinete blanco",
    quantity: 2,
    delivered: true,
  },
];

export const App = () => {
  const [gifts, setGifts] = useState(initialGifts);

  useEffect(() => {
    let data = localStorage.getItem("gifts");
    data ? setGifts(JSON.parse(data)) : setGifts(initialGifts);
  }, []);

  useEffect(() => {
    localStorage.setItem("gifts", JSON.stringify(gifts));
  }, [gifts]);

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

  const addGift = (title: string, quantity: number) => {
    let condition = gifts.some((gift) => gift.title === title);
    let newGift = {
      id: gifts.length,
      title,
      quantity,
      delivered: false,
    };

    condition
      ? alert("Este regalo ya existe! agrega otro")
      : setGifts([...gifts, newGift]);
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
      <h1>Giftify</h1>
      <AddGiftForm gifts={gifts} addGift={addGift} />
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
