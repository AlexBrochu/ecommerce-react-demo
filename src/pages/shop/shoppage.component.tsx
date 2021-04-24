import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collections-overview.component";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }: RouteComponentProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const unsubscribeFromSnapshot = useRef<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    unsubscribeFromSnapshot.current = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = await convertCollectionsSnapshotToMap(snapShot);
        dispatch(updateCollections(collectionsMap));
        setIsLoading(false);
      }
    );
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={() => <CollectionOverviewWithSpinner isLoading={isLoading} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={() => <CollectionPageWithSpinner isLoading={isLoading} />}
      />
    </div>
  );
};

export default WithSpinner(ShopPage);
