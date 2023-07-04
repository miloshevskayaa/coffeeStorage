import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';

export const ModalFinish: React.FC<any> = ({
  isModalOpen,
  setIsModalOpen,
  countRightAnswers,
}) => {
  const navigate = useNavigate();

  const handleOk = () => {
    navigate('/main/coffee');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    navigate('/main/coffee');
    setIsModalOpen(false);
  };

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (countRightAnswers === 5) {
      setTitle('Великолепно! Молодец!');
    } else if (countRightAnswers === 4) {
      setTitle('Отлично! Молодец!');
    } else if (countRightAnswers === 3) {
      setTitle('Хороший результат!');
    } else if (countRightAnswers === 2) {
      setTitle('Неплохо! В следующий раз будет лучше!');
    } else if (countRightAnswers === 1) {
      setTitle('Не старшно! Попробуй еще!');
    } else {
      setTitle('Ничего страшного, попробуй еще!');
    }
  }, [countRightAnswers]);

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          OK
        </Button>,
      ]}
    >
      <p>{countRightAnswers} из 5 правильных ответов!</p>
    </Modal>
  );
};
