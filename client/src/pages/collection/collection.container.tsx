import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import Spinner from "../../components/spinner/spinner.component";
import CollectionPage from "./collection.component";
import { useParams } from "react-router-dom";
import { GET_COLLECTIONS_BY_TITLE } from "./queries";

// interface CollectionPageContainerProps {
//   match: {
//     params: {
//       collectionId: string;
//     };
//   };
// }

const CollectionPageContainer: React.FC<void> = () => {
  const { collectionId }: any = useParams();
  const { data, loading, error } = useQuery<any>(GET_COLLECTIONS_BY_TITLE, {
    variables: { title: collectionId },
  });
  console.log(loading);
  console.log(data);

  if (loading) return <Spinner />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <CollectionPage collection={data.getCollectionsByTitle}></CollectionPage>
    </Fragment>
  );
};

export default CollectionPageContainer;
