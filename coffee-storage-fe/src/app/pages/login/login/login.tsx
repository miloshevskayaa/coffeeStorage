import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import { Loader } from 'app/components/ui-kit';
import { useAppDispatch } from 'app/core/hooks';
import {
  setToken,
  useGetCurrentUserMutation,
  useLoginUserMutation,
} from 'app/store/users';
import { EmailModal } from '../components/restore-password-email';

import './styles.scss';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );
  const navigate = useNavigate();

  const [loginUser, { data: loggedUser, isLoading, isSuccess }] =
    useLoginUserMutation();

  const [getCurrent, { isSuccess: isGetCurrentUserSuccess }] =
    useGetCurrentUserMutation();

  const onFinish = async () => {
    if (email && password) {
      await loginUser({ email, password });
      await getCurrent({});
    } else {
      message.info('Необходимо заполнить все поля');
    }
  };

  const onFinishFailed = () => {
    message.info('Необходимо заполнить все поля');
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(loggedUser.token));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isGetCurrentUserSuccess) {
      navigate('/main');
    }
  }, [isGetCurrentUserSuccess]);

  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const showEmailModal = () => {
    setIsEmailModalOpen(true);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="login">
          <Form
            className="form"
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Логин"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
              ]}
              className="form__item"
            >
              <Input onChange={onEmailChange} />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
              className="form__item"
            >
              <Input.Password onChange={onPasswordChange} />
            </Form.Item>

            <Form.Item name="forgotPassword">
              <span
                onClick={() => showEmailModal()}
                className="form__forgot-password"
              >
                Забыли пароль?
              </span>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Войти
              </Button>
            </Form.Item>
          </Form>

          <EmailModal
            isEmailModalOpen={isEmailModalOpen}
            setIsEmailModalOpen={setIsEmailModalOpen}
          />
        </div>
      )}
    </>
  );
};
