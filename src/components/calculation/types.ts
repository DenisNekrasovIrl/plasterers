type TItemsCalculation = Array<IItemsCalculationItem>;
interface IItemsCalculationItem {
  activeTab: boolean;
  activeContent: boolean;
  title: string;
  imgPresent: boolean;
  wrapperOrInnerOrItems: "wrapper" | "inner" | "items" | null;
  items?: Array<{
    img?: string | null;
    title?: string;
    selected: boolean;
  }>;
}
export type { TItemsCalculation };
