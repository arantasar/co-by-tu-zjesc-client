import * as React from "react";
import HomeView from "../views/Home/Home";
import RegisterView from "../views/Register/Register";
import LoginView from "../views/Login/Login";
import RecipeView from "../views/Recipe/Recipe";
import AdminView from "../views/AdminPanel/Admin";
import PanelView from "../views/Panel/Panel";
import AddView from "../views/Panel/Add/Add";
import { Switch, Route } from "react-router-dom";
import EditView from "../views/Panel/Update/Update";
import RecipeUpdate from "../views/Panel/RecipeUpdate/RecipeUpdate";
import UserRecipes from "../views/Panel/UserRecipes/UserRecipes";
import ShoppingList from "../views/ShoppingList/ShoppingList";
import Favourites from "../views/Panel/Favourites/Favourites";
import Week from "../views/Week/Week";

const RouterSwitch = () => {
  const links = [
    { path: "/recipe/:id", component: RecipeView },
    { path: "/register", component: RegisterView },
    { path: "/shopping-list/:id", component: ShoppingList },
    { path: "/admin", component: AdminView },
    { path: "/login", component: LoginView },
    {
      path: "/panel/update/:id",
      component: RecipeUpdate,
    },
    { path: "/panel/update", component: EditView },
    { path: "/panel/add", component: AddView },
    { path: "/panel/recipes", component: UserRecipes },
    { path: "/panel/favourites", component: Favourites },
    { path: "/panel/week", component: Week },
    { path: "/panel", component: PanelView },
    {
      path: "/",
      component: HomeView,
    },
  ];

  return (
    <Switch>
      {links.map((link) => (
        <Route path={link.path} key={link.path} component={link.component} />
      ))}
    </Switch>
  );
};

export default RouterSwitch;
