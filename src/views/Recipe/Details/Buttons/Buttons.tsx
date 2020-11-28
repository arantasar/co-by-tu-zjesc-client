import * as React from "react";
import { Button } from "@material-ui/core";
import {
  FavoriteBorder,
  ThumbUpAlt,
  FavoriteOutlined,
} from "@material-ui/icons";
import VisibilityIcon from "@material-ui/icons/Visibility";
import styles from "./Buttons.module.scss";
import { FC, useContext } from "react";
import UserContext from "../../../../context/UserContext";
import styled from "styled-components";
import { useParams } from "react-router";
import axios from "./../../../../axios";
import IRecipe from "../../../../models/IRecipe";

interface IButttonsProps {
  likes: number;
  inFavourite: number;
  viewCounter: number;
  refresh: (updatedRecipe: IRecipe) => void;
}

const Buttons: FC<IButttonsProps> = ({
  likes,
  inFavourite,
  viewCounter,
  refresh,
}) => {
  const user = useContext(UserContext);
  const { id } = useParams();
  const FavouriteIcon = () => {
    if (id && user.user) {
      return user.user.favourites.map((fav) => fav.id).includes(id) ? (
        <FavoriteOutlined color={"secondary"} />
      ) : (
        <FavoriteBorder />
      );
    } else {
      return <FavoriteBorder />;
    }
  };
  const icons = [
    {
      name: "views",
      value: viewCounter,
      component: <VisibilityIcon />,
      hover: false,
    },
    {
      name: "favourites",
      value: inFavourite,
      component: <FavouriteIcon />,
      hover: true,
    },
    {
      name: "likes",
      value: likes,
      component: <ThumbUpAlt />,
      hover: true,
    },
  ];

  const iconClickHandler = (icon: string) => {
    let url = "";
    if (icon === "favourites") {
      url = "recipes/favourites/";
    } else if (icon === "likes") {
      url = "recipes/likes/";
    }
    axios
      .post<IRecipe>(
        url,
        { id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        refresh(res.data);
      });
  };

  return (
    <div className={styles.wrapper}>
      <Button variant="contained" color="secondary">
        Generuj listę zakupów
      </Button>
      {icons.map((icon, index) => (
        <Icon
          onClick={() => iconClickHandler(icon.name)}
          hover={icon.hover}
          isLogged={user.isUserLogged}
          key={index}
        >
          {icon.component}
          <Aside>{icon.value}</Aside>
        </Icon>
      ))}
    </div>
  );
};

export default Buttons;

const Icon = styled.div<{ isLogged: boolean; hover: boolean }>`
  margin: 5px 0;
  display: flex;
  align-items: center;

  &:first-of-type {
    margin-top: 20px;
  }

  &:hover {
    cursor: ${(props) => (props.isLogged && props.hover ? "pointer" : "auto")};
  }
`;

const Aside = styled.span`
  font-size: 16px;
  margin-left: 10px;
`;
