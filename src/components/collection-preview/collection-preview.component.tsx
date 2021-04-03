import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

interface CollectionProps {
  title: string;
  items: Array<any>;
}

const CollectionPreview = ({ title, items }: CollectionProps) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} {...item}></CollectionItem>;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
