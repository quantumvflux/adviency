interface Gift {
  id: number;
  title: string;
  delivered: boolean;
}

type ToggleDelivered = (selectedGift: Gift) => void;

type AddGift = (title: string) => void;

type DeleteGift = (giftId: number) => void;
