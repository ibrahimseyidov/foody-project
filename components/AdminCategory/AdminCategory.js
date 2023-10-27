"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./admincategory.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CategoryItem from "./CategoryItem";

const AdminCategory = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
        const { data } = await axios.get('/api/category')
        return data
    },
})



  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <section className="h-full" data-aos="zoom-in">
      <div className={styles["table-container"]}>
        <table className={styles["table"]}>
          <thead className={styles["thead"]}>
            <tr className={styles["thead-row"]}>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Slugs</th>
            </tr>
          </thead>

          <tbody className={styles["tbody"]}>
          <CategoryItem categoryData={...data}/>
          </tbody>
        </table>
      </div>
    </section>
  </>
);
};

export default AdminCategory;
