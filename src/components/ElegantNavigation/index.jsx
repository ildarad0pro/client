import { Button } from "@mui/base";
import "./style.css";
import intelo from "../../assets/intelo.svg"
import React, { useContext } from "react";
import { Context } from "../../index"
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, CATALOG_ROUTE } from "../../utils/consts";
import { NavLink, useNavigate } from 'react-router-dom';
import { observer } from "mobx-react";

const ElegantNavigation = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setIsLogged(false);
  };

  return (
    <div className="header-container">
      <div className="sidebar-container">
        <NavLink to={MAIN_ROUTE} style={{ textDecoration: 'none', color: 'white' }}>
          <img
            src={intelo}
            className="image-container-intelo"
            alt="intelo"
          />
        </NavLink>
      </div>
      <div className="header-nav-container">
      <div className="navigation-links-container1">
  <NavLink to={MAIN_ROUTE} style={{ textDecoration: 'none', color: 'inherit' }}>
    <p className="navigation-link">Главная</p>
  </NavLink>
  <NavLink to={CATALOG_ROUTE} style={{ textDecoration: 'none', color: 'inherit' }}>
    <p className="navigation-link">Каталог</p>
  </NavLink>
  <NavLink to={SHOP_ROUTE} style={{ textDecoration: 'none', color: 'inherit' }}>
    <p className="navigation-link">Конструктор</p>
  </NavLink>
  <NavLink to={SHOP_ROUTE} style={{ textDecoration: 'none', color: 'inherit' }}>
    <p className="navigation-link">О нас</p>
  </NavLink>
</div>
      </div>
      <div className="auth-controls-container">
        {user.isAuth ? (
          <>
          <NavLink onClick={logOut} style={{ textDecoration: 'none', color: 'inherit' }}>
            <p className="login-title">Выйти</p>
          </NavLink>
              <NavLink to={ADMIN_ROUTE} style={{ textDecoration: 'none', color: 'inherit' }} activeClassName="active">
            <Button className="create-account-button" onClick={() => navigate(ADMIN_ROUTE)}>
            Админ панель
          </Button>
        </NavLink>
          </>
        ) : user.isLogged ? (
          <NavLink onClick={logOut} style={{ textDecoration: 'none', color: 'inherit' }}>
            <p className="login-title">Выйти</p>
          </NavLink>
        ) : (
          <>
            <NavLink to={LOGIN_ROUTE} style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="login-title">Войти</p>
            </NavLink>
            <NavLink to={REGISTRATION_ROUTE} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button className="create-account-button">Создать аккаунт</Button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
});
export default ElegantNavigation;
