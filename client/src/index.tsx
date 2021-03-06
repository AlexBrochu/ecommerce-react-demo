import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { store, persistor } from "./redux/store";

// Graphql ressource
const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

// const GET_COLLECTIONS = gql`
//   {
//     getCollectionsByTitle(title: "hats") {
//       id
//       title
//       items {
//         id
//         price
//         name
//         imageUrl
//       }
//     }
//   }
// `;

// client
//   .query({
//     query: GET_COLLECTIONS,
//   })
//   .then((res) => console.log(res));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
