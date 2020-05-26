import * as React from "react";
import HomeView from "../views/Home/Home";
import RegisterView from "../views/Register/Register";
import LoginView from "../views/Login/Login";
import RecipeView from "../views/Recipe/Recipe";
import AdminView from "../views/Admin/Admin";
import { Switch, Route } from "react-router-dom";

const RouterSwitch = () => {
  const links = [
    { path: "/recipe/:id", component: RecipeView },
    { path: "/register", component: RegisterView },
    { path: "/admin", component: AdminView },
    { path: "/login", component: LoginView },
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
