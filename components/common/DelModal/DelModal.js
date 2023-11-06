"use client";
import React, { useEffect } from "react";
import styles from "./delmodal.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  closeDelCatModal,
  closeDelOfferModal,
  closeOrderModal,
  closeDelModal,
  closeResDelModal,
  closeHisDelModal,
  closeOrderDelModal,
} from "../../../redux/features/delModalSlice";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

const DelModal = () => {
  const { t } = useTranslation("common");
  const queryClient = useQueryClient();
  const selDelCategoryModal = useSelector(
    (state) => state.delModal.catDelModalActive
  );
  const selOrderShowModal = useSelector(
    (state) => state.delModal.showOrderActive
  );
  const selOfferDelModal = useSelector(
    (state) => state.delModal.offerDelModalActive
  );
  const selDelModal = useSelector((state) => state.delModal.deLModalActive);
  const selResDelModal = useSelector(
    (state) => state.delModal.resDelModalActive
  );
  const selHisModal = useSelector((state) => state.delModal.delhistoryActive);
  const selOrderDelModal = useSelector(
    (state) => state.delModal.orderDelModalActive
  );

  const dispatch = useDispatch();

  const { mutate: deleteProduct } = useMutation({
    mutationFn: async () => await axios.delete(`/api/products/${selDelModal}`),
    onSuccess: () => {
      alert("success");
      dispatch(closeDelModal());
      queryClient.invalidateQueries(["products"]);
    },
    onError: () => {
      alert("error");
    },
  });

  const { mutate: handleDelRest } = useMutation({
    mutationFn: async () =>
      await axios.delete(`/api/restuarants/${selResDelModal}`),
    onSuccess: () => {
      alert("success");
      dispatch(closeResDelModal());
      queryClient.invalidateQueries(["restuarants"]);
    },
    onError: () => {
      alert("error");
    },
  });

  const { mutate: delUserOrder } = useMutation({
    mutationFn: async (orderId) => await axios.delete('/api/order', {
      data: {
        order_id: orderId
      },
      headers: {
        Authorization: `Bearer ${Cookies.get('accessJWT')}`
      }
    }),
    onSuccess: () => {
      alert('success')
      dispatch(closeHisDelModal())
      queryClient.invalidateQueries(["order"]);
    },
    onError: (error) => {
      console.log(error);
      alert('error', error)
    }
  });

  // delete category
  const { mutate: handleDelCategory } = useMutation({
    mutationFn: async () =>
      await axios.delete(`/api/category/${selDelCategoryModal}`),
    onSuccess: () => {
      alert("success");
      dispatch(closeDelCatModal());
      queryClient.invalidateQueries(["category"]);
    },
    onError: () => {
      alert("error");
    },
  });

  // delete offer
  const { mutate: handleDelOffer } = useMutation({
    mutationFn: async () =>
      await axios.delete(`/api/offer/${selOfferDelModal}`),
    onSuccess: () => {
      alert("success");
      dispatch(closeDelOfferModal());
      queryClient.invalidateQueries(["offer"]);
    },
    onError: () => {
      alert("error");
    },
  });

  // delete order
  const { mutate: handleDelOrder } = useMutation({
    mutationFn: async () => {
      const accessToken = localStorage.getItem("access_token");

      const headers = {
        Authorization: `Bearer ${accessToken}`,

      };
      await axios.delete(
        "/api/order",
        { data: { order_id: selOrderDelModal }, headers }
      );
    },
    onSuccess: () => {
      alert("success");
      dispatch(closeOrderDelModal());
      queryClient.invalidateQueries(["order"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const handleDelProduct = () => {
    deleteProduct();
  };
  const handleDelRes = () => {
    handleDelRest();
  };
  const handleDelete = () => {
    delUserOrder(selHisModal);
  };
  const handleDelCat = () => {
    handleDelCategory();
  };
  const handleDelOrd = () => {
    handleDelOrder();
  };
  const handleDelOffr = () => {
    handleDelOffer();
  };
  return (
    <>
      {selDelModal ? (
        <div>
          <div className={styles.overlay} data-aos="zoom-in">
            <div
              className="flex flex-col justify-center items-center rounded absolute bg-white"
              id={styles["modal-position"]}
              style={{
                width: "498px",
                height: "226px",
                boxShadow: "0px 3px 8px -2px rgba(0, 0, 0, 0.20)",
              }}
            >
              <span className={styles["modal-head"]}>
                {t("Are you sure it's deleted ?")}
              </span>
              <span className={styles["modal-para"]}>
                {t(
                  "Attention! If you delete this product, it will not come back..."
                )}
              </span>
              <div className="max-md:flex max-md:flex-col-reverse">
                <button
                  onClick={() => dispatch(closeDelModal())}
                  className={styles["cancel-btn"]}
                >
                  {t("Cancel")}
                </button>
                <button
                  onClick={() => handleDelProduct()}
                  className={styles["delete-btn"]}
                >
                  {t("delete")}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : selResDelModal ? (
        <div>
          <div className={styles.overlay} data-aos="zoom-in">
            <div
              className="flex flex-col justify-center items-center rounded absolute bg-white"
              id={styles["modal-position"]}
              style={{
                width: "498px",
                height: "226px",
                boxShadow: "0px 3px 8px -2px rgba(0, 0, 0, 0.20)",
              }}
            >
              <span className={styles["modal-head"]}>
                {t("Are you sure it's deleted ?")}
              </span>
              <span className={styles["modal-para"]}>
                {t(
                  "Attention! If you delete this product, it will not come back..."
                )}
              </span>
              <div className="max-md:flex max-md:flex-col-reverse">
                <button
                  onClick={() => dispatch(closeResDelModal())}
                  className={styles["cancel-btn"]}
                >
                  {t("Cancel")}
                </button>
                <button
                  onClick={() => handleDelRes()}
                  className={styles["delete-btn"]}
                >
                  {t("delete")}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : selHisModal ? (
        <div>
          <div className={styles.overlay} data-aos="zoom-in">
            <div
              className="flex flex-col justify-center items-center rounded absolute bg-white"
              id={styles["modal-position"]}
              style={{
                width: "498px",
                height: "226px",
                boxShadow: "0px 3px 8px -2px rgba(0, 0, 0, 0.20)",
              }}
            >
              <span className={styles["modal-head"]}>
                {t("Are you sure it's deleted ?")}
              </span>
              <span className={styles["modal-para"]}>
                {t(
                  "Attention! If you delete this product, it will not come back..."
                )}
              </span>
              <div className="max-md:flex max-md:flex-col-reverse">
                <button
                  onClick={() => dispatch(closeHisDelModal())}
                  className={styles["cancel-btn"]}
                >
                  {t("Cancel")}
                </button>
                <button
                  onClick={() => handleDelete()}
                  className={styles["delete-btn"]}
                >
                  {t("delete")}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : selDelCategoryModal ? (
        <div>
          <div className={styles.overlay} data-aos="zoom-in">
            <div
              className="flex flex-col justify-center items-center rounded absolute bg-white"
              id={styles["modal-position"]}
              style={{
                width: "498px",
                height: "226px",
                boxShadow: "0px 3px 8px -2px rgba(0, 0, 0, 0.20)",
              }}
            >
              <span className={styles["modal-head"]}>
                {t("Are you sure it's deleted ?")}
              </span>
              <span className={styles["modal-para"]}>
                {t(
                  "Attention! If you delete this category, it will not come back..."
                )}
              </span>
              <div className="max-md:flex max-md:flex-col-reverse">
                <button
                  onClick={() => dispatch(closeDelCatModal())}
                  className={styles["cancel-btn"]}
                >
                  {t("Cancel")}
                </button>
                <button
                  onClick={() => handleDelCat()}
                  className={styles["delete-btn"]}
                >
                  {t("delete")}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : selOrderDelModal ? (
        <div>
          <div className={styles.overlay} data-aos="zoom-in">
            <div
              className="flex flex-col justify-center items-center rounded absolute bg-white"
              id={styles["modal-position"]}
              style={{
                width: "498px",
                height: "226px",
                boxShadow: "0px 3px 8px -2px rgba(0, 0, 0, 0.20)",
              }}
            >
              <span className={styles["modal-head"]}>
                {t("Are you sure it's deleted ?")}
              </span>
              <span className={styles["modal-para"]}>
                {t(
                  "Attention! If you delete this order, it will not come back..."
                )}
              </span>
              <div className="max-md:flex max-md:flex-col-reverse">
                <button
                  onClick={() => dispatch(closeOrderDelModal())}
                  className={styles["cancel-btn"]}
                >
                  {t("Cancel")}
                </button>
                <button
                  onClick={handleDelOrd}
                  className={styles["delete-btn"]}
                >
                  {t("delete")}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : selOfferDelModal ? (
        <div>
          <div className={styles.overlay} data-aos="zoom-in">
            <div
              className="flex flex-col justify-center items-center rounded absolute bg-white"
              id={styles["modal-position"]}
              style={{
                width: "498px",
                height: "226px",
                boxShadow: "0px 3px 8px -2px rgba(0, 0, 0, 0.20)",
              }}
            >
              <span className={styles["modal-head"]}>
                {t("Are you sure it's deleted ?")}
              </span>
              <span className={styles["modal-para"]}>
                {t(
                  "Attention! If you delete this offer, it will not come back..."
                )}
              </span>
              <div className="max-md:flex max-md:flex-col-reverse">
                <button
                  onClick={() => dispatch(closeDelOfferModal())}
                  className={styles["cancel-btn"]}
                >
                  {t("Cancel")}
                </button>
                <button
                  onClick={() => handleDelOffr()}
                  className={styles["delete-btn"]}
                >
                  {t("delete")}
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DelModal;
