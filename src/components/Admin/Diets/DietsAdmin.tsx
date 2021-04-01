import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./DietsAdmin.module.scss";
import IDiet from "../../../models/IDiet";
import DietsTable from "./DietsTable/DietsTable";
import NewDiet from "./NewDiet/NewDiet";
import { API } from "../../../config/config";

const DietsAdmin = () => {
  const [diets, setDiets] = useState<IDiet[]>([]);
  const [diet, setDiet] = useState<string>("");

  const deleteDiet = (id: string) =>
    axios
      .delete(`${API}/diets/` + id)
      .then(() => getDiets())
      .catch((err) => {
        alert(err.response.data.message);
      });

  const addDiet = () => {
    axios
      .post(`${API}/diets`, {
        name: diet,
      })
      .then(() => getDiets())
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setDiet("");
      });
  };

  const getDiets = () =>
    axios.get<IDiet[]>(`${API}/diets`).then((res) => {
      setDiets(res.data);
    });

  useEffect(() => {
    getDiets();
  }, []);

  return (
    <>
      <div className={styles.Wrapper}>
        <DietsTable diets={diets} deleteDiet={deleteDiet} />
        <NewDiet diet={diet} setDiet={setDiet} addDiet={addDiet} />
      </div>
    </>
  );
};

export default DietsAdmin;
