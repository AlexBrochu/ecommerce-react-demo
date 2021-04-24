import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionOverview = () => {
  const shop = useSelector((state: State) => state.shop);
  const { collections } = useMemo(() => shop, [shop]);

  return (
    <div className="collections-overview">
      {(Object.keys(collections) as Array<keyof typeof collections>).map(
        (value, index) => {
          return (
            <CollectionPreview
              key={index}
              {...collections[value]}
            ></CollectionPreview>
          );
        }
      )}
    </div>
  );
};

export default CollectionOverview;
