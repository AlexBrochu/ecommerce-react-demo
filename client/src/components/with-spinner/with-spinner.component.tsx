import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

interface WithSpinnerProps {
  isLoading: boolean;
}

const WithSpinner = (WrappedComponent: any) => {
  const Spinner = ({ isLoading, ...otherProps }: WithSpinnerProps) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps}></WrappedComponent>
    );
  };
  return Spinner;
};

export default WithSpinner;
