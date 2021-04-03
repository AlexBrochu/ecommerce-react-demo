import React from "react";

import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";
import { RouterProps } from "react-router";

//Props extends RouterProps and has a test property that is optional
interface HomePageProps extends RouterProps {
  test?: string;
}

const HomePage = (props: HomePageProps) => {
  return (
    <div className="homepage">
      <Directory></Directory>
    </div>
  );
};

export default HomePage;
