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
import { useHistory, useParams } from "react-router";
import axios from "./../../../../axios";
import IRecipe from "../../../../models/IRecipe";
import IUser from "../../../../models/IUser";

interface IButttonsProps {
  likes: number;
  inFavourite: number;
  viewCounter: number;
  refresh: (recipe: IRecipe, user?: IUser) => void;
}

const Buttons: FC<IButttonsProps> = ({
  likes,
  inFavourite,
  viewCounter,
  refresh,
}) => {
  const user = useContext(UserContext);
  const { id, size } = useParams();
  const history = useHistory();
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

  const addToMyWeek = () => {
    axios
      .post(
        "/users/week",
        {
          recipeId: id,
          size,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(() => {
        history.push("/panel/week");
      });
  };

  const iconClickHandler = (icon: string) => {
    let url = "";
    if (icon === "favourites") {
      url = "recipes/favourites/";
    } else if (icon === "likes") {
      url = "recipes/likes/";
    }
    axios
      .post(
        url,
        { id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        if (icon === "favourites") {
          refresh(res.data.recipe, res.data.user);
        } else if (icon === "likes") {
          refresh(res.data);
        }
      });
  };

  return (
    <div className={styles.wrapper}>
      <Button
        fullWidth
        onClick={() => {
          const url = size
            ? `/shopping-list/${id}/${size}`
            : `/shopping-list/${id}`;
          history.push(url);
        }}
        variant="contained"
        color="secondary"
      >
        Generuj listę zakupów
      </Button>
      {user.user && (
        <StyledButton>
          <Button onClick={addToMyWeek} variant="contained" color="primary">
            Dodaj do mojego tygodnia
          </Button>
        </StyledButton>
      )}

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

const StyledButton = styled.div`
  margin: 15px 0;
  width: 100%;
`;
