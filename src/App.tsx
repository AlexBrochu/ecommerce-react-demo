import React, { useEffect } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { State } from "./redux/store";

const App = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: State) => state.user);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot(
          (snapShot) => {
            dispatch(
              setCurrentUser({
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data(),
                },
              })
            );
          },
          //setState is asynchronus
          () => {}
        );
      }
      dispatch(setCurrentUser(userAuth));
    });

    // this.setState({ currentUser: userAuth });
    // clean up function
    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      {/* Switch when first match render first component  */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signIn"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
