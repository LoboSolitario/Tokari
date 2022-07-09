import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {useNavigate}  from "react-router-dom";
import styled from "styled-components";
import TransactionContext from "../contexts/TransactionContext";
import TransactionStyle from "./TransactionStyle";
import configOptions from '../../api/configOptions';
import _ from 'lodash';

export default function TransactionBaskettttt() {

  const { transactions, setTransaction } = useContext(TransactionContext);
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
        setTransaction(temp);
      }
    }
  }, []);

  return (
    <React.Fragment>

      <div className="flexList container searchBasket flexPro4">

        {!_.isEmpty(transactions) ? (
          transactions.map((transaction) => (
            <TransactionStyle transaction={transaction}/>
          ))
        ) : (
          <p>No transaction yet.</p>
        )}
      </div>
    </React.Fragment>
  )
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

