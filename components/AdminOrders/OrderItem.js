import React from 'react'
import {
  openDelModal,
  showOrderModal,
} from "../../redux/features/delModalSlice";
import Image from "next/image";
import eye from "../../assets/icons/eye.svg";
import trashIcon from "../../assets/icons/trashIcon.svg";
import { useDispatch } from 'react-redux';
import styles from "../AdminCategory/admincategory.module.css";
const OrderItem = ({orderData}) => {
  console.log(orderData)
  const dispatch = useDispatch();
  return (
    <tr className={styles["table-row"]}>
    <td>
      <span className={styles["table-id"]}>9177</span>
    </td>
    <td>
      <span className={styles["table-id"]}>022401</span>
    </td>
    <td>25 Dec 2021</td>
    <td className="w-48 text-left">
      29 Eve Street, 543 Evenue Road, Ny 87876
    </td>
    <td>$249.7</td>
    <td>Cash On Delivery</td>
    <td>994-51-410-3130</td>
    <td className="flex items-center mt-2">
      <button
        onClick={() => dispatch(showOrderModal())}
        className="mr-4"
      >
        <Image src={eye} alt="edit-icon" />
      </button>
      <button onClick={() => dispatch(openDelModal())}>
        <Image src={trashIcon} alt="trash-icon" />
      </button>
    </td>
  </tr>
  )
}

export default OrderItem