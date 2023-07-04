import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Space } from 'antd';
import { useAppDispatch } from 'app/core/hooks';
import { setPageAuth } from 'app/store/pages';
import { useCreateUserMutation } from 'app/store/users';
import { IUser } from 'app/store/users/models';

import './styles.scss';

export const Registration: React.FC = () => {
  const [createUser] = useCreateUserMutation();
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onFinish = async (fieldsValues: IUser) => {
    await createUser(fieldsValues);
    dispatch(setPageAuth('auth'));

    navigate('/');
  };

  return (
    <div className="registration">
      <Space direction="vertical" size={16}>
        <Form
          form={form}
          className="form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Имя"
            name="userName"
            rules={[{ required: true, message: 'Please input your username!' }]}
            className="form__item"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Логин"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              {
                type: 'email',
                message: 'The input is not valid email!',
              },
            ]}
            className="form__item"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            className="form__item"
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Подтверждение пароля"
            name="confirmPassword"
            rules={[
              { required: true, message: 'Please repeat your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('Password mismatch!'));
                },
              }),
            ]}
            className="form__item"
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
};
