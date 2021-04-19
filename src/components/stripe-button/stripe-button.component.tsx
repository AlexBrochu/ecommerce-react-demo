import React from "react";
import StripeCheckout from "react-stripe-checkout";

interface StripeProps {
  price: number;
}

const StripeCheckoutButton = ({ price }: StripeProps) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Ii0nID4oC1SHfwXYIxq7goU41vwODxdgCGCE66pu2NI8DQBZWCtmLBBThrWX1J5cCsWobsbrByGarQARZfPahwO00VOkTDzAF";

  const onToken = (token: any) => {
    console.log(token);
    alert("Payment Successful");
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
