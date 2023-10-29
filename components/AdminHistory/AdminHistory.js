import React ,{ useState } from "react";
import styles from "../AdminCategory/admincategory.module.css";
import style from "./modal.module.css"; // Modal için CSS modülünü içe aktarın
import Image from "next/image";
import trashIcon from "../../assets/icons/trashIcon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { openDelModal } from "../../redux/features/delModalSlice";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BounceLoader } from "react-spinners";

const AdminHistory = () => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await axios.get("/api/category");
      return response.data;
    },
  });

  const { mutate: deleteCategory } = useMutation({
    mutationFn: async (categoryId) => {
      const response = await axios.delete(`/api/category/${categoryId}`);
      return response.data;
    },
    
      onSuccess: () => {
        alert("Success!!");
      },
      onError: () => {
        alert("Error!!");
      },
    });

  const handleDelete = (categoryId) => {
    setCategoryIdToDelete(categoryId);
    openDelModal(false);
    
  };
  
  // const handleConfirmDelete = () => {
  //   deleteCategory.mutate(categoryIdToDelete);
  // };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mx-0 my-auto">
        <BounceLoader
          color="#C74FEB"
          loading={true}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  if (isError) return <div className="text-white">error...</div>;

  return (
    <>
      <section className="h-full">
        <div className={styles["table-container"]}>
          <table className={styles["table"]}>
          <thead className={styles["thead"]}>
              <tr className={styles["thead-row"]}>
                <th>ID</th>
                <th>Customer ID</th>
                <th>Time</th>
                <th>Delivery Address</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody className={styles["tbody"]}>
              {data?.result.data.map((history) => (
                <tr className={styles["table-row"]} key={history.id}>
                   <td>
                    <span className={styles["table-id"]}>{history.id}</span>
                  </td>
                  <td>
                    <span className={styles["table-id"]}>{history.created}</span>
                  </td>
                  <td>{history.name}</td>
                  <td className="w-48 text-left">
                    {history.name}
                  </td>
                  <td>{history.slug}</td>
                  <td>{history.name}</td>
                  <td>{history.slug}</td>
                  <td className="mt-2 pr-3">
                    <button onClick={() => dispatch(openDelModal(history?.id))}>
                      <Image src={trashIcon} alt="trash-icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* {isModalOpen && (
        <div className={style.modal}>
          <div className={style["modal-content"]}>
            <p>Sure?</p>
            <button onClick={() => setIsModalOpen(false)}>No!</button>
            <button onClick={handleConfirmDelete}>Yes!</button>
          </div>
        </div>
      )} */}
      
    </>
  );
};

export default AdminHistory;
