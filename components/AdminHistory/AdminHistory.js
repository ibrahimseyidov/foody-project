"use client";
import React, { useEffect } from "react";
import styles from "../AdminCategory/admincategory.module.css";
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
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const { response } = await axios.get("/api/category");
      return response.data ;
    },
  });
  console.log(data)

  // const { mutate: addOffer } = useMutation({
  //     mutationFn: async () => await axios.post('/api/offer', {
  //         "name": "string",
  //         "description": "string",
  //         "img_url": "string"
  //       }),

  //     onSuccess: () => {
  //         setAddOfferImg(null)
  //         alert('success')
  //         queryClient.invalidateQueries(['offer'])
  //     },
  //     onError: () => {
  //         alert('error')
  //     }
  // })

  const { mutate: deleteCategory } = useMutation({
    mutationFn: async (categoryId) => await axios.delete("/api/category/${category.id}"),

    onSuccess: () => {
      alert("success");
    },

    onError: () => {
      alert("error");
    },
  });
  const handleDelete = (categoryId) => {
    dispatch(openDelModal());
    deleteCategory(categoryId);
  };
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

  // useEffect(() => {
  //     AOS.init()
  // }, [])

  return (
    <>
      <section className="h-full" data-aos="zoom-in">
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
             
              {
                data?.result.data.map((history)=>(
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
                    <button onClick={() => handleDelete(history.id)}>
                      <Image src={trashIcon} alt="trash-icon" />
                    </button>
                  </td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminHistory;
