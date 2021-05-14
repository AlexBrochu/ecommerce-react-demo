import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

interface StripeProps {
  price: number;
}

const StripeCheckoutButton = ({ price }: StripeProps) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Ii0nID4oC1SHfwXYIxq7goU41vwODxdgCGCE66pu2NI8DQBZWCtmLBBThrWX1J5cCsWobsbrByGarQARZfPahwO00VOkTDzAF";

  const onToken = (token: any) => {
    axios({
      url: "payment",
      method: "post",
      data: { amount: priceForStripe, token },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert("There was an issue with your payment.");
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      panelLabel="Pay Now"
      token={onToken}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
