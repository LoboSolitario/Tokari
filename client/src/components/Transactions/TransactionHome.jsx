import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import TransactionBasket from "./TransactionBasket";
import _ from 'lodash';

export default function TransactionHome() {

  const [ transactions, setTransactions ] = useState();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("token")
  //get all transactions of the user
  useEffect(() => {
    fetchData();
    async function fetchData() {
      const response = await axios.get(`${baseUrl}/api/baskets/userTransactions`, { headers: { Authorization: "Bearer: " + token } });
      if (response.statusText === "OK") {
        let temp = [];
        response.data.map(item => {
          let obj = {
            "basketName": item.basketName, 
            "investmentAmount": item.investmentAmount,
            "cryptoAlloc": item.cryptoAlloc,
            "_id": item._id,
            "key": item._id
          }
          temp.push(obj);
        })
        setTransactions(temp.reverse());//Most recently completed transactions are shown at the top
      }
    }
  }, []);

  return (
    <React.Fragment>
      <div className="flexListDiscover container" style={{ minHeight: "72vh" }}>
        {!_.isEmpty(transactions) ? (
          transactions.map((transaction) => (
            <div className="container70">
              <TransactionBasket key={transaction._id} transaction={transaction}/>
            </div>
          ))
        ) : (
          <p>No transaction yet.</p>
        )}
        </div>
    </React.Fragment>
  )
}

