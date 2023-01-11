import { Dispatch, SetStateAction } from "react";

type TInnerLink = Array<{
  title: string;
  anchor: string;
}>;
interface IPropsMenu {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}
export type { TInnerLink, IPropsMenu };
