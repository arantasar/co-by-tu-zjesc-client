import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UnitsAdmin.module.scss";
import UnitsTable from "./UnitsTable/UnitsTable";
import NewUnit from "./NewUnit/NewUnit";

const UnitsAdmin = () => {
  const [items, setItems] = useState([]);
  const [unitName, setUnitName] = useState("");

  const deleteUnit = (id) =>
    axios
      .delete("http://localhost:5000/api/units/" + id)
      .then(() => getUnits())
      .catch((err) => {
        alert(err.response.data.message);
      });

  const addUnit = () => {
    axios
      .post("http://localhost:5000/api/units", {
        name: unitName,
      })
      .then(() => getUnits())
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setUnitName("");
      });
  };

  const getUnits = () =>
    axios.get("http://localhost:5000/api/units").then((res) => {
      setItems(res.data);
    });

  useEffect(() => {
    getUnits();
  }, []);

  return (
    <>
      <div className={styles.Wrapper}>
        <UnitsTable items={items} deleteUnit={deleteUnit} />
        <NewUnit
          unitName={unitName}
          setUnitName={setUnitName}
          addUnit={addUnit}
        />
      </div>
    </>
  );
};

export default UnitsAdmin;
