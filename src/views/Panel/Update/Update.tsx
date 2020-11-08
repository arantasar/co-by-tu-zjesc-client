import React, { useContext, useState } from "react";
import styled from "styled-components";
import styles from "../Add/Add.module.scss";
import axios from "axios";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import UserInfo from "../../../components/organisms/UserInfo/UserInfo";
import UserContext from "../../../context/UserContext";
import OpenFileButton from "../../../components/atoms/OpenFileButton/OpenFileButton";
import UniversalModal from "../../../components/organisms/UniversalModal";

const UpdateView = () => {
  const ctx = useContext(UserContext);

  const [email, setEmail] = useState<string>(
    (ctx.user && ctx.user.email) || ""
  );
  const [description, setDescription] = useState<string>(
    (ctx.user && ctx.user.description) || ""
  );
  const [photo, setPhoto] = useState<File | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");

  const fileUploadChange = (event: HTMLInputElement | null) => {
    if (event && event.files) {
      const file = event.files[0];
      setPhoto(file);
    } else {
      setPhoto(null);
    }
  };
  const uploadChanges = () => {
    const data = new FormData();
    if (photo) {
      data.append("photo", photo as Blob);
    }
    data.append("description", description);
    data.append("email", email);

    axios({
      url: "http://localhost:5000/api/users/update",
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${ctx.token}`,
      },
    })
      .then((res) => {
        const updatedUser = res.data;
        ctx.updateUser(updatedUser);
        setHeader("Aktualizacja profilu");
        setText("Profil został zaktualizowany!");
        setModalOpen(true);
      })
      .catch((err) => {
        setHeader("Błąd");
        setText(err.response.data.message);
        setModalOpen(true);
      });
  };

  return (
    <div className={styles.Add}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <UserInfo />
          </Grid>
          <Grid item xs={12} sm={9}>
            <h2>Edytuj swój profil</h2>
            <h3>Adres email</h3>
            <TextField
              className={styles.Name}
              id="standard-basic"
              label="Adres email"
              color="secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>O mnie</h3>
            <StyledTextArea
              id="description"
              name="description"
              rows={10}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <h3>Zdjęcie</h3>
            <OpenFileButton
              fileName={(photo && photo.name) || ""}
              fileUploadChange={fileUploadChange}
            />
            <Button
              onClick={uploadChanges}
              variant="contained"
              color="secondary"
              style={{ margin: "20px 0" }}
            >
              Zapisz zmiany
            </Button>
          </Grid>
        </Grid>
      </Container>
      <UniversalModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        header={header}
        buttonText={"OK"}
        text={text}
      />
    </div>
  );
};

export default UpdateView;

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 15px;
  border: 2px solid #ee24c4;
  padding: 20px;

  &:focus {
    outline: none;
  }
`;
