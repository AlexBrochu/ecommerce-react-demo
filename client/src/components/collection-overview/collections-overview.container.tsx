import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";

import CollectionOverview from "./collections-overview.component";
import Spinner from "../spinner/spinner.component";

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        price
        name
        imageUrl
      }
    }
  }
`;

const CollectionOverviewContainer: React.FC<any> = () => {
  const { data, loading, error } = useQuery<any>(GET_COLLECTIONS);
  console.log(loading);
  console.log(data);

  if (loading) return <Spinner />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      {data.collections && (
        <CollectionOverview collections={data.collections}></CollectionOverview>
      )}
    </Fragment>
  );
};

export default CollectionOverviewContainer;
