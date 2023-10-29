import React from "react";
import { openCategoryModalEdit } from "../../redux/features/editModalSlice";
import { openDelCatModal } from "../../redux/features/delModalSlice";
import editIcon from "../../assets/icons/editIcon.svg";
import trashIcon from "../../assets/icons/trashIcon.svg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import styles from "./admincategory.module.css";
const CategoryItem = ({ categoryData }) => {

  const dispatch = useDispatch();
  const categoryResult = categoryData?.result;
  console.log(categoryResult)
  return categoryResult?.data?.map((category, i) => (
    <tr className={styles["table-row"]} key={i}>
      <td>
        <span className={styles["table-id"]}>{i}</span>
      </td>
      <td className="flex justify-center">
        <Image width="100" height="100" src={category.img_url} alt="food" />
      </td>
      <td>{category.name}</td>
      <td>{category.slug}</td>
      <td>
        <button
          onClick={() => dispatch(openCategoryModalEdit(category))}
          className="mr-4"
        >
          <Image src={editIcon} alt="edit-icon" />
        </button>
        <button onClick={() => dispatch(openDelCatModal(category?.id))}>
          <Image src={trashIcon} alt="trash-icon" />
        </button>
      </td>
    </tr>
  ));
};

export default CategoryItem;
