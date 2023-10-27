import React from "react";
import styles from "./admincategory.module.css";
import littleFood from "../../assets/images/foodImages/littleFood.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import trashIcon from "../../assets/icons/trashIcon.svg";


import { openCategoryModalEdit } from "../../redux/features/editModalSlice";
import { openDelCatModal } from "../../redux/features/delModalSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
const CategoryItem = ({ categoryData }) => {
const dispatch=useDispatch();
  const categoryResult = categoryData?.result;

  
  return categoryResult?.data?.map((category,index) => (
    <tr className={styles["table-row"]} key={category.id}>
      <td>
        <span className={styles["table-id"]}>{index}</span>
      </td>
      <td className="flex justify-center">
        <Image
          width="100"
          height="100"
          src={category.img_url}
          alt={category.name}
        />
      </td>
      <td>{category.name}</td>
      <td>{category.slug}</td>
      <td>
        <button
          onClick={() => dispatch(openCategoryModalEdit())}
          className="mr-4"
        >
          <Image width="20" height="20" src={editIcon} alt="edit-icon" />
        </button>
        <button onClick={() => dispatch(openDelCatModal(category.id))}>
          <Image width="15" height="15" src={trashIcon} alt="trash-icon" />
        </button>
      </td>
    </tr>
  ));
};

export default CategoryItem;
