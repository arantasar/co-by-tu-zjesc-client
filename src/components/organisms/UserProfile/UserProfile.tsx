import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "./../../../axios/";
import IUser from "../../../models/IUser";
import { Dialog } from "@material-ui/core";
import UserAvatar from "../../molecules/UserAvatar/UserAvatar";
import Switch from "../../atoms/Switch/Switch";
import UserProfileInfo from "../../molecules/UserProfileInfo/UserProfileInfo";
import RecipeMiniature from "../../molecules/RecipeMiniature/RecipeMiniature";

interface IProps {
  id: string;
  isOpen: boolean;
  handleClose: () => void;
}

const UserProfile: React.FC<IProps> = ({ id, isOpen, handleClose }) => {
  const [user, setUser] = useState<IUser>();
  const [activeSwitch, setActiveSwitch] = useState<string>("about");

  useEffect(() => {
    axios.get<IUser>(`/users/${id}`).then(({ data }) => {
      setUser(data);
    });
  }, [id]);

  const clickHandler = (id: string) => setActiveSwitch(id);
  const switches = [
    {
      id: "about",
      name: "O mnie",
    },
    {
      id: "info",
      name: "Informacje",
    },
    {
      id: "recipes",
      name: "Dodane przepisy",
    },
  ];

  return (
    <Dialog open={isOpen} onBackdropClick={handleClose} fullWidth>
      {user ? (
        <Content>
          <Header>
            <UserAvatar name={user.name} photoPath={user.photoPath} />
            <Line />
            {switches.map((s) => (
              <Switch
                key={s.id}
                name={s.name}
                id={s.id}
                clickHandler={clickHandler}
                isActive={activeSwitch === s.id}
              />
            ))}
          </Header>
          {activeSwitch === "info" ? (
            <UserProfileInfo {...user} />
          ) : activeSwitch === "about" ? (
            <Description>{user.description}</Description>
          ) : (
            <Recipes>
              {user.recipes.map((recipe) => (
                <RecipeMiniature {...recipe} />
              ))}
            </Recipes>
          )}
        </Content>
      ) : (
        <div>Loading data...</div>
      )}
    </Dialog>
  );
};

export default UserProfile;

const Content = styled.div`
  height: 400px;
`;

const Line = styled.div`
  margin: 15px 0;
  background-color: white;
  height: 1px;
  width: 100%;
`;

const Description = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  padding: 20px 20px 0 20px;
  background-color: #b70093;
  position: sticky;
  top: 0;
`;

const Recipes = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
