import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { config } from 'app/core/config';
import { useGetCoffeeQuery } from 'app/store/coffee';
import { useCreateStatisticMutation } from 'app/store/statistics';
import { useGetQuestionsQuery } from 'app/store/test';
import { ModalFinish } from './components/modal-finish';

import './styles.scss';

export const Test: React.FC = () => {
  const navigate = useNavigate();

  const [countQuestion, setCountQuestion] = useState(1);
  const [countRightAnswers, setCountRightAnswers] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createStatistic, { isLoading: isCreatingStatistic }] =
    useCreateStatisticMutation();

  useEffect(() => {
    const finish = async () => {
      if (countQuestion > 5) {
        if (isCreatingStatistic) {
          return;
        }

        setIsModalOpen(true);
        await createStatistic({ result: `${countRightAnswers}/5` });
      }
    };

    finish();
  }, [countQuestion]);

  const { data: questions = [] } = useGetQuestionsQuery({});
  const { data: coffee = [] } = useGetCoffeeQuery({});

  const [messageApi, contextHolder] = message.useMessage();

  const checkRightAnswer = (rightAnswer: any, answer: any) => {
    if (rightAnswer === answer) {
      messageApi.open({
        type: 'success',
        content: 'Правильно!',
      });
      setCountRightAnswers(countRightAnswers + 1);
    } else {
      messageApi.open({
        type: 'error',
        content: 'Неправильно',
      });
    }

    setCountQuestion(countQuestion + 1);
  };

  const [questionsElem, setQuestionsElem] = useState(0);
  let answers: any[] = [];

  const randomTwoElInCoffeeArray = [...coffee]
    .filter(i => i.title !== questions[questionsElem]?.rightAnswer.title)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  answers = [
    ...randomTwoElInCoffeeArray,
    questions[questionsElem]?.rightAnswer,
  ].sort(() => Math.random() - 0.5);

  return isModalOpen ? (
    <ModalFinish
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      countRightAnswers={countRightAnswers}
    />
  ) : (
    <div>
      {contextHolder}
      <div key={questions[questionsElem]?.id} className="test">
        <div className="test__count">{countQuestion}/5</div>
        <div className="modal__close" onClick={() => navigate(-1)}>
          <CloseOutlined style={{ fontSize: '32px' }} />
        </div>
        <div className="test__question">
          {questions[questionsElem]?.question}
        </div>
        <img
          className="test__image"
          src={`${config.API_URL}/${questions[questionsElem]?.image}`}
          alt="question"
        />
        <div className="test__answers">
          {answers?.map((answer: any) => (
            <div
              key={answer?.id}
              className="test__answers__answer"
              onClick={() => {
                checkRightAnswer(questions[questionsElem]?.rightAnswer, answer);
                setQuestionsElem(questionsElem + 1);
              }}
            >
              {answer?.recipe.rusTitle}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
