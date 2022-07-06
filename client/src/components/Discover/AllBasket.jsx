import React from "react";
import styled from "styled-components";
import ViewButton from "../Buttons/viewButton";
import { loadStripe } from "@stripe/stripe-js";

import axios from "axios";

const AllBasket = ({
  basket,
  handleDetailBox
}) => {


  const handleSubmit = async (event) => {

    const stripePromise = loadStripe(
      'pk_test_51LG4BtLrYzCcT1VhaohAqZIhPa8mvakR4rd9z2dI7VN0iEOKAtP73PSw1pNRE0kF4VH9bSUNxkkqdDOuEXjrzJee00Gz2np472'
    );
    const stripe = await stripePromise;
    const token = localStorage.getItem("token")
    event.preventDefault();
    await axios({
      method: 'post',
      url: `http://localhost:4600/api/baskets/payment`,
      data: JSON.stringify({ "lookup_key": basket.id }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer: " + token
      }
    })
      .then(function (response) {
        return response.data;
      })
      .then(function (sessionId) {
        return stripe.redirectToCheckout({ sessionId: sessionId });
      })
      .then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          alert("Unauthorised Role Access")
        }
        else {
          alert("ERROR:", err.response.data)
        }

      })
  }
  return (
    <Wrapper className="whiteBg radius8 shadow basket">
      <div className="wrapper-header flexSpaceCenter">
        <h3 className="font20 extraBold">
          {basket.basketName}
        </h3>
        <p className="font13 greenColor extraBold">{basket.subscriptionFee === 0 ? "Free Access" : ""}</p>
        <div style={{ width: "100px" }}>
          <form onSubmit={handleSubmit}>
            {/* Add a hidden field with the lookup_key of your Price */}
            <input type="hidden" name="lookup_key" value={basket.id} />
            <button className="subscribeButton animate pointer radius6" id="checkout-and-portal-button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <p className="font13" style={{ padding: "5px 0" }}>
        {basket.overview}

      </p>
      <p className="font11 greyColor" style={{ padding: "0 0 5px 0" }}>Managed by {basket.owner}</p>
      <p className="font11">Number of cryptocurrencies:  {basket.cryptoNumber}</p>


      <div className="flexSpaceNull">
        <p className={' tag  radius6 font11 extraBold ' + (basket.risk === "High" ? "redBg" : basket.risk === "Medium" ? "orangeBg" : "greenBg")}>Risk: {basket.risk}</p>
        <p className={' tag  radius6 font11 extraBold ' + (basket.volatility === "High" ? "redBg" : basket.volatility === "Medium" ? "orangeBg" : "greenBg")}>Volatility: {basket.volatility}</p>
      </div>
      <div style={{ width: "100px" }}>
            <ViewButton title="View Basket"  action={() => handleDetailBox(basket.id)}/>
      </div>


    </Wrapper>

  );
}

const Wrapper = styled.div`
width: 100%;
text-align: left;
padding: 20px 30px;
margin-top: 30px;
`;

export default AllBasket;