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
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={id}
          {...otherCollectionProps}
        ></CollectionPreview>
      ))}
    </div>
  );
};

export default CollectionOverview;
