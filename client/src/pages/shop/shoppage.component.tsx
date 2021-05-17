import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";
// import CollectionOverview from "../../components/collection-overview/collections-overview.component";
import { default as CollectionPage } from "../collection/collection.container";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { State } from "../../redux/store";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collection-overview/collections-overview.container";

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }: RouteComponentProps) => {
  const isCollectionsLoaded = useSelector(
    // !! convert variable to boolean
    // Example
    // !!null === false
    // !!{} === true
    (state: State) => !!state.shop.collections
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default WithSpinner(ShopPage);
