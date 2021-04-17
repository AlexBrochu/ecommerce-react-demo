import React from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { State } from "../../redux/store";

import "./collection.styles.scss";

const COLLECTION_ID_MAP: any = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const CollectionPage = ({ match }: any) => {
  const state = useSelector((state: State) =>
    state.shop.collections.find(
      (collection) =>
        collection.id === COLLECTION_ID_MAP[match.params.collectionId]
    )
  );
  console.log(state);
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
      {/* <CollectionItem></CollectionItem> */}
    </div>
  );
};

export default CollectionPage;
