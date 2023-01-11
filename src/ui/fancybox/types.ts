import React from "react";

interface IPropsFancybox {
  options?: {
    infinite?: boolean;
  };
  delegate?: any;
  children?: React.ReactNode;
}

export type { IPropsFancybox };
