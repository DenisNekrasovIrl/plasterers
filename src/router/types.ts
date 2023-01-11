import { FC, ReactNode } from "react";

interface IRoutes {
  [index: string]: {
    path: string;
    element: FC;
  };
}

export type { IRoutes };
