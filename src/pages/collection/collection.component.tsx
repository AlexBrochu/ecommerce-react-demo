import React from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { State } from "../../redux/store";

import "./collection.styles.scss";

const CollectionPage = ({ match }: any) => {
  const collectionState = useSelector((state: State) => {
    const collectionUrlParam: keyof typeof state.shop.collections =
      match.params.collectionId;
    return state.shop.collections[collectionUrlParam];
  });
  console.log(collectionState);
  return (
    <div className="collection-page">
      <h2 className="title">{collectionState?.title}</h2>
      <div className="items">
        {collectionState?.items.map((item) => {
          return <CollectionItem key={item.id} item={item}></CollectionItem>;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
