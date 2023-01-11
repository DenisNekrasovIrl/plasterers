import { Dispatch, SetStateAction } from "react";

interface IPropsOrder {
  idComponent: string;
  title: string;
  setShowModal?: Dispatch<SetStateAction<boolean>>;
  setShowModalThanks?: Dispatch<SetStateAction<boolean>>;
}

export type { IPropsOrder };
