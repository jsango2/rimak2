import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import usewindowsize from "../components/helper/usewindowsize";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";
const api = new WooCommerceRestApi({
  url: "https://www.sportzone.hr",
  consumerKey: "ck_e2386719f731e57a119052491416fe2455068fdd",
  consumerSecret: "cs_729ebbd9fe5a480f587a66456f26987b8b6764a4",
  version: "wc/v3",
  axiosConfig: {
    headers: {
      // "Access-Control-Allow-Origin": "http://localhost:3000",
    },
  },

  // headers: { "Content-Type": "application/json" },
  // headers: { "Access-Control-Allow-Origin": "*" },
});

export default function Index() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
    // axios
    //   .get(
    //     `https://www.sportzone.hr/wp-json/wc/v3/orders?consumer_key=ck_e2386719f731e57a119052491416fe2455068fdd&consumer_secret=cs_729ebbd9fe5a480f587a66456f26987b8b6764a4`
    //   )
    //   .then((res) => {
    //     const data = res.data;
    //     setOrders(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  let fetchOrders = () => {
    api
      .get("orders", {
        per_page: 20,
      })
      .then((response) => {
        if (response.status === 200) {
          setOrders(response.data);
        }
      })
      .catch((error) => {});
  };
  console.log("oreders", orders);

  const size = usewindowsize();
  return <div>test</div>;
}
