import React, { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/core/hooks';
import { setPageAuth } from 'app/store/pages';
import coffee from 'assets/images/coffee/coffee.svg';

import './styles.scss';

export const AuthLayout: FC = () => {
  const navigate = useNavigate();

  const selectAuthPage = useAppSelector(state => state.pageAuth.page);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectAuthPage === 'auth') {
      navigate('/');
    } else {
      navigate('/register');
    }
  }, [selectAuthPage]);

  return (
    <div className="auth-layout">
      <Layout className="auth-layout__auth-header">
        <div className="auth-layout__auth-header__info">
          <img src={coffee} alt="coffee" />
          <div className="auth-layout__auth-header__info__coffee">
            <span className="auth-layout__auth-header__info__coffee__coffee-name">
              Coffee
            </span>
          </div>
        </div>
      </Layout>
      <div className="auth-layout__auth-main">
        <div className="auth-layout__auth-main__select">
          <div
            className={`auth-layout__auth-main__select__login${
              selectAuthPage === 'auth' ? '__line' : ''
            }`}
            onClick={() => dispatch(setPageAuth('auth'))}
          >
            Вход
          </div>
          <div
            className={`auth-layout__auth-main__select__signup${
              selectAuthPage === 'register' ? '__line' : ''
            }`}
            onClick={() => dispatch(setPageAuth('register'))}
          >
            Регистрация
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
