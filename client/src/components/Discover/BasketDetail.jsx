// import axios from "axios";
import React, { useContext } from "react";
// import { useEffect } from "react";
// import {useNavigate, NavLink}  from "react-router-dom";
// import styled from "styled-components";
// import SingleContext from "../contexts/SingleContext";
// import SingleBasket from "./SingleBasket";
// import configOptions from '../../api/configOptions';
// import _ from 'lodash';

// export default function BasketDetail(id) {

//   const { baskets, setBaskets } = useContext(SingleContext);
//   const baseUrl = process.env.REACT_APP_BASE_URL;

//   useEffect(() => {
//     fetchData();
//     async function fetchData() {
//       const response = await axios.get(`${baseUrl}/api/baskets`);
//       if (response.statusText === "OK") {
//         // console.log(response.data);
//         let temp = [];
//         response.data.map(item => {
//           let obj = {
//             "key": item.id,
//             "id": item.id,
//             "author": item.author,
//             "basketName": item.basketName,
//             "risk": item.risk,
//             "volatility": item.volatility,
//             "subscriptionFee": item.subscriptionFee,
//             "overview": item.overview,
//             "details": item.details
//           }
//           temp.push(obj);
//         })
//         setBaskets(temp);
//       }
//     }
//   }, []);
 
//   setBaskets(baskets.filter((basket) => basket.id === id));

//   return (
//     <React.Fragment>

//       <div className="flexList container searchBasket">

//         {!_.isEmpty(baskets) ? (
//           baskets.map((basket) => (
//             <SingleBasket {...basket}/>
//           ))
//         ) : (
//           <p>No matching results.</p>
//         )}
//       </div>
//     </React.Fragment>
//   )
// }

// const Wrapper = styled.section`
//   padding-top: 80px;
//   width: 100%;
//   min-height: 840px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;
import Details from "./Details";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer"

export default function BasketDetail() {
  return (
    <>
      <TopNavbar />
      <Details />
      <Footer />
    </>
  );
}


