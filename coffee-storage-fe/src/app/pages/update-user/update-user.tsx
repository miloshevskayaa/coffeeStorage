import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Upload, UploadProps } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/core/hooks';
import {
  setUser,
  useUpdateUserMutation,
  useUploadImageUserMutation,
} from 'app/store/users';

import './styles.scss';

export const UpdateUser: React.FC<any> = () => {
  const [uploadImageUser, uploadedImageName] = useUploadImageUserMutation();

  const uploadImage: UploadProps['customRequest'] = async ({
    file,
    onSuccess,
  }) => {
    await uploadImageUser({ file });
    onSuccess?.({});
  };

  const [updateUser] = useUpdateUserMutation();
  const user = useAppSelector(state => state.user.user);
  const userId = user?.id;

  const dispatch = useAppDispatch();

  const onFinish = async (fieldsValue: any) => {
    const { confirmPassword, ...values } = fieldsValue;

    const resultValues = {
      ...values,
      avatar: uploadedImageName.data
        ? uploadedImageName.data.path
        : 'images/users/default.jpg',
    };

    await updateUser({ id: userId, data: resultValues });
    dispatch(setUser(resultValues));

    message.success(`данные успешно изменены`);
  };

  const props: UploadProps = {
    multiple: false,

    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} файл успешно загружен`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} файл не загружен успешно`);
      }
    },
  };

  const [form] = Form.useForm();

  return (
    <div className="account">
      <Form
        className="form"
        form={form}
        name="basic"
        layout="vertical"
        labelCol={{ span: 8 }}
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{
          ...user,
          password: '',
        }}
      >
        <Form.Item label="Имя" name="userName" className="form__item">
          <Input />
        </Form.Item>

        <Form.Item
          name="avatar"
          label="Фото"
          valuePropName="file"
          className="form__item"
          style={{ height: '100%' }}
        >
          <Upload
            name="file"
            listType="picture"
            accept=".jpeg,.png,.jpg"
            {...props}
            customRequest={uploadImage}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Логин"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
          ]}
          className="form__item"
        >
          <Input />
        </Form.Item>

        <Form.Item label="Телефон" name="phoneNumber" className="form__item">
          <Input />
        </Form.Item>

        <Form.Item label="Новый Пароль" name="password" className="form__item">
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Подтверждение пароля"
          name="confirmPassword"
          rules={[
            {
              required: !!form.getFieldValue('password'),
              message: 'Please repeat your password!',
            },
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
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginBottom: '40px' }}
          >
            Изменить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
