import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CategoriesAdmin.module.scss";
import ICategory from "../../../models/ICategory";
import CategoriesTable from "./CategoriesTable/CategoriesTable";
import NewCategory from "./NewCategory/NewCategory";
import { API } from "../../../config/config";

const CategoriesAdmin = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [category, setCategory] = useState<string>("");

  const deleteCategory = (id: string) =>
    axios
      .delete(`${API}/categories/${id}`)
      .then(() => getCategories())
      .catch((err) => {
        alert(err.response.data.message);
      });

  const addCategory = () => {
    axios
      .post(`${API}/categories`, {
        name: category,
      })
      .then(() => getCategories())
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setCategory("");
      });
  };

  const getCategories = () =>
    axios.get<ICategory[]>(`${API}/categories`).then((res) => {
      setCategories(res.data);
    });

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className={styles.Wrapper}>
        <CategoriesTable
          categories={categories}
          deleteCategory={deleteCategory}
        />
        <NewCategory
          category={category}
          setCategory={setCategory}
          addCategory={addCategory}
        />
      </div>
    </>
  );
};

export default CategoriesAdmin;
