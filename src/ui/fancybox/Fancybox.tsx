import React, { useEffect } from "react";
import { Fancybox as AppFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import { IPropsFancybox } from "./types";
import "@fancyapps/ui/dist/fancybox.css";

function Fancybox<T extends React.FC>(
  props: IPropsFancybox
): React.ReactElement {
  const dataFancy = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const optionsFancy = props.options || {};

    AppFancybox.bind(dataFancy, optionsFancy);

    return () => {
      AppFancybox.destroy();
    };
  }, []);

  return <>{props.children}</>;
}

export default Fancybox;
