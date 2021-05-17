import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { ItemType } from "../../types/common.types";

import "./collection.styles.scss";

const CollectionPage: React.FC<any> = ({ collection }: any) => {
  console.log("data", collection);
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item: ItemType) => {
          return <CollectionItem key={item.id} item={item}></CollectionItem>;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
