import React from "react";

import Image from "next/image";
import eye from "../../assets/icons/eye.svg";
import trashIcon from "../../assets/icons/trashIcon.svg";
import { useDispatch } from "react-redux";
import styles from "../AdminCategory/admincategory.module.css";
import { openOrderDelModal, showOrderModal } from "../../redux/features/delModalSlice";
const OrderItem = ({ orderData }) => {
  const orderResult = orderData?.result;
  const dispatch = useDispatch();
  return orderResult?.data.map((order, i) => (
    <tr key={order?.id} className={styles["table-row"]}>
      <td>
        <span className={styles["table-id"]}>{i}</span>
      </td>
      <td>
        <span className={styles["table-id"]}>{order?.customer_id}</span>
      </td>
      <td>{order?.created}</td>
      <td className="w-48 text-left">{order?.delivery_address}</td>
      <td>${order?.amount}</td>
      <td>{order?.payment_method}</td>
      <td>{order?.contact}</td>
      <td className="flex items-center mt-2">
        <button className="mr-4" onClick={()=>dispatch(showOrderModal(order.id))}>
          <Image src={eye} alt="edit-icon" />
        </button>
        <button onClick={() => dispatch(openOrderDelModal(order?.id))}>
          <Image src={trashIcon} alt="trash-icon" />
        </button>
      </td>
    </tr>
  ));
};

export default OrderItem;
