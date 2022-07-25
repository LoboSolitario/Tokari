import React from "react";
import styled from "styled-components";

const TransactionBasket = ({
  transaction
}) => {
  let transaction_amt = 0;
  transaction.cryptoAlloc.forEach((crypto) => {
    transaction_amt += crypto.price*crypto.orderQty
  })
  transaction_amt = transaction_amt.toFixed(2)

  const cryptoMap = new Map();
  cryptoMap.set('BTCUSDT', "Bitcoin")
  cryptoMap.set('ETHUSDT', "Ethereum")
  cryptoMap.set('LTCUSDT', "Litecoin")
  cryptoMap.set('TRXUSDT', "Tron")
  cryptoMap.set('XRPUSDT', "XRP")
  cryptoMap.set('BNBUSDT', "Binancecoin")

  return (
    <Wrapper className="whiteBg radius8 shadow basket">
      <div className="wrapper-header flexSpaceCenter">
        <h3 className="font18 extraBold">
          {transaction.basketName}
        </h3>
        <p className='flexWrapper30 semiBold font13' style={{ color: "#00000" }}>  Investment Amount: <span className="purpleColor">${transaction_amt}</span></p>
      </div>
      <div>
        <div className="container" style={{ padding: "25px 0" }}>
          <div className='flexSpaceCenter' style={{ padding: "10px 0" }}>
            <p className='font14  flexWrapper30' style={{ padding: "0 0 5px 0px" }}>Order ID</p>
            <p className='font14  flexWrapper30' style={{ padding: "0 0 5px 0px" }}>Cryptocurrency</p>
            <p className='font14  flexWrapper30' style={{ padding: "0 0 5px 0px" }}>Order Quantity</p>
            <p className='font14  flexWrapper30' style={{ padding: "0 0 5px 0px" }}>Fullfillment Price</p>
            <p className='font14  flexWrapper30' style={{ padding: "0 0 5px 0px" }}>Total Holding</p>
          </div>

          {(transaction.cryptoAlloc) && transaction.cryptoAlloc.map(allocation =>
            <div className='flexSpaceCenter tableStripe' style={{ padding: "5px" }}>
              <p className='flexWrapper30 font13'>{allocation.orderId}</p>
              <p className='flexWrapper30 font13'>{cryptoMap.get(allocation.cryptoCurrency)}</p>
              <p className='flexWrapper30 font13'>{allocation.orderQty}</p>
              <p className='flexWrapper30 font13'>${allocation.price.toFixed(2)}</p>
              <p className='flexWrapper30 font13'>${(allocation.price * allocation.orderQty).toFixed(2)}</p>
            </div>)}
        </div>
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

export default TransactionBasket;