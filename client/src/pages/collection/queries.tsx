import { gql } from "@apollo/client";

export const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionsByTitle($title: String) {
    getCollectionsByTitle(title: $title) {
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
