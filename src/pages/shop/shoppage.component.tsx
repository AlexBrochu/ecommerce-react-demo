import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collections-overview.component";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }: RouteComponentProps) => {
  const unsubscribeFromSnapshot = useRef<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    unsubscribeFromSnapshot.current = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(updateCollections(collectionsMap));
      }
    );
  }, [unsubscribeFromSnapshot, dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
