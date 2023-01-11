import { Image } from "react-before-after-slider-component";

interface IStateExamples {
  active: number;
  imgsBeforeAndAfter: Array<IImgsBeforeAndAfterItem>;
}
interface IImgsBeforeAndAfterItem {
  firstImg: {
    imageUrl: Image;
  };
  secondImg: {
    imageUrl: Image;
  };
  id: number;
}
export type { IStateExamples };
