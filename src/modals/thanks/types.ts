import { Dispatch, SetStateAction } from "react";

interface IPropsThanks {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal?: boolean;
  resetItems?: () => void;
  isReset: boolean;
}

export type { IPropsThanks };
