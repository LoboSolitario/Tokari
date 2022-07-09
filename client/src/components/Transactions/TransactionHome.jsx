import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {useNavigate}  from "react-router-dom";
import styled from "styled-components";
import TransactionContext from "../contexts/TransactionContext";
import TransactionBasket from "./TransactionBasket";
import configOptions from '../../api/configOptions';
import _ from 'lodash';

export default function TransactionHome() {

  const { transactions, setTransactions } = useContext(TransactionContext);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const auth =  localStorage.getItem("auth")
  const token = localStorage.getItem("token")
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const response = await axios.get(`${baseUrl}/api/baskets`);
      if (response.statusText === "OK") {
        let temp = [];
        response.data.map(item => {
          let obj = {
            "basketName": item.basketName, 
            "cryptoAlloc": item.cryptoAlloc
          }
          temp.push(obj);
        })
        console.log(temp);
        setTransactions(temp);
        console.log(transactions);
      }
    }
  }, []);

  return (
    <React.Fragment>
      <div className="flexList container" style={{ minHeight: "72vh" }}>
        {!_.isEmpty(transactions) ? (
          transactions.map((transaction) => (
            <TransactionBasket transaction={transaction}/>
          ))
        ) : (
          <p>No transaction yet.</p>
        )}
        </div>
    </React.Fragment>
  )
}

