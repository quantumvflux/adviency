interface Gift {
  id: number;
  title: string;
  quantity: number;
  delivered: boolean;
}

type ToggleDelivered = (selectedGift: Gift) => void;

type AddGift = (title: string, quantity: number) => void;

type DeleteGift = (giftId: number) => void;
