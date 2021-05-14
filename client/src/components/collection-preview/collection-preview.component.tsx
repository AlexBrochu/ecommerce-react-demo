import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";
import { ItemType } from "../../types/common.types";

interface CollectionProps {
  title: string;
  items: Array<ItemType>;
}

const CollectionPreview = ({ title, items }: CollectionProps) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item: ItemType, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item}></CollectionItem>;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
