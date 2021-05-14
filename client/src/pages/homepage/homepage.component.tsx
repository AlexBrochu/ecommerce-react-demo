import React from "react";

import Directory from "../../components/directory/directory.component";
import { RouterProps } from "react-router";
import { HomePageContainer } from "./homepage.styles";

//Props extends RouterProps and has a test property that is optional
interface HomePageProps extends RouterProps {
  test?: string;
}

const HomePage = (props: HomePageProps) => {
  return (
    <HomePageContainer>
      <Directory></Directory>
    </HomePageContainer>
  );
};

export default HomePage;
