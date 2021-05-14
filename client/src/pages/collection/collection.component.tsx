import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { State } from "../../redux/store";
import { ItemType } from "../../types/common.types";

import "./collection.styles.scss";

const CollectionPage = () => {
  const { collectionId }: any = useParams();
  const collectionState = useSelector((state: State) => {
    const collectionUrlParam: keyof typeof state.shop.collections = collectionId;
    return state.shop.collections
      ? state.shop.collections[collectionUrlParam]
      : null;
  });
  return (
    <div className="collection-page">
      <h2 className="title">{collectionState?.title}</h2>
      <div className="items">
        {collectionState?.items.map((item: ItemType) => {
          return <CollectionItem key={item.id} item={item}></CollectionItem>;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
