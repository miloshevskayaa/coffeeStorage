import React, { FC, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Avatar, Button, Popover, Space } from 'antd';
import { config } from 'app/core/config';
import { useAppDispatch, useAppSelector } from 'app/core/hooks';
import { setPage } from 'app/store/pages';
import { logout } from 'app/store/users';
import coffee from 'assets/images/coffee/coffee.svg';

import './styles.scss';

export const MainLayout: FC = () => {
  const navigate = useNavigate();

  const user = useAppSelector(state => state.user.user);

  const selectPage = useAppSelector(state => state.page.page);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectPage === 'main') {
      navigate('/main');
    } else if (selectPage === 'coffee') {
      navigate('/main/coffee');
    } else if (selectPage === 'favorites') {
      navigate('/main/favorites');
    } else if (selectPage === 'practice') {
      navigate('/main/practice');
    }
  }, [selectPage]);

  const logoutUser = () => {
    dispatch(logout());
    navigate('/');
  };

  const [openMenu, setOpenMenu] = useState<boolean>(true);

  return (
    <div className="main-layout">
      <div className="main-layout__main-header">
        <div className="main-layout__main-header__info">
          <img src={coffee} alt="coffee" />
          <div className="main-layout__main-header__info__coffee">Coffee</div>
        </div>
        <div className="main-layout__main-header__pages">
          <div
            className={`main-layout__main-header__pages__main${
              selectPage === 'main' ? '__line' : ''
            }`}
            onClick={() => dispatch(setPage('main'))}
          >
            Главная
          </div>
          <div
            className={`main-layout__main-header__pages__coffee${
              selectPage === 'coffee' ? '__line' : ''
            }`}
            onClick={() => dispatch(setPage('coffee'))}
          >
            Кофе
          </div>
          <div
            className={`main-layout__main-header__pages__favorites${
              selectPage === 'favorites' ? '__line' : ''
            }`}
            onClick={() => dispatch(setPage('favorites'))}
          >
            Избранное
          </div>
          <div
            className={`main-layout__main-header__pages__practice${
              selectPage === 'practice' ? '__line' : ''
            }`}
            onClick={() => dispatch(setPage('practice'))}
          >
            Тест
          </div>
        </div>
        <div
          className={`main-layout__main-header__profile${
            selectPage === 'profile' ? '__line' : ''
          }`}
        >
          <Popover
            placement="topRight"
            style={{
              marginTop: '80px',
              justifyContent: 'space-between',
              padding: '0 10px',
            }}
            content={
              <Space direction="vertical">
                <Button
                  type="text"
                  className="main-layout__main-header__profile__button"
                  onClick={() => {
                    navigate('/main/update');
                    dispatch(setPage('profile'));
                  }}
                >
                  Редактировать профиль
                </Button>
                <Button
                  type="text"
                  className="main-layout__main-header__profile__button"
                  onClick={() => {
                    navigate('/main/statistics');
                    dispatch(setPage('profile'));
                  }}
                >
                  Статистика
                </Button>
                <Button
                  type="text"
                  className="main-layout__main-header__profile__button"
                  onClick={() => logoutUser()}
                >
                  Выход из аккаунта
                </Button>
              </Space>
            }
            trigger="click"
          >
            <Avatar
              className="main-layout__main-header__profile__avatar"
              src={
                <img src={`${config.API_URL}/${user?.avatar}`} alt="avatar" />
              }
            />
            <span className="main-layout__main-header__profile__name">
              {user?.userName}
            </span>
            <span className="main-layout__main-header__profile__icon">
              <DownOutlined />
            </span>
          </Popover>
        </div>
        <MenuOutlined
          style={{ fontSize: '24px' }}
          className="main-layout__main-header__burger__button"
          onClick={() => setOpenMenu(!openMenu)}
        />
        <div
          className={`main-layout__main-header${
            openMenu ? '__burger' : '__burder-open'
          }`}
        >
          <MenuOutlined
            className="main-layout__main-header__burder-open__button"
            style={{ fontSize: '24px' }}
            onClick={() => setOpenMenu(!openMenu)}
          />
          <div className="main-layout__main-header__burder-open__text">
            <div
              className="main-layout__main-header__burder-open__text__main"
              onClick={() => dispatch(setPage('main'))}
            >
              Главная
            </div>
            <div
              className="main-layout__main-header__burder-open__text__coffee"
              onClick={() => dispatch(setPage('coffee'))}
            >
              Кофе
            </div>
            <div
              className="main-layout__main-header__burder-open__text__favorites"
              onClick={() => dispatch(setPage('favorites'))}
            >
              Избранное
            </div>
            <div
              className="main-layout__main-header__burder-open__text__practice"
              onClick={() => dispatch(setPage('practice'))}
            >
              Тест
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
