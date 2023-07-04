import { DeepPartial } from 'typeorm';

import { Test } from '@entities/test';

export const TEST_FIXTURES: DeepPartial<Test>[] = [
  {
    id: '3ab4a702-a230-4aa7-a9f2-22047bb28be0',
    question: 'В каком напитке присутствуют следующие ингридиенты: взбитые сливки, молоко, эспрессо, шоколад?',
    image: 'images/coffee/mocha2.jpg',
    rightAnswer: {
      id: 'fa9ad460-5132-4bd4-994b-1807e77a76ba',
    },
  },
  {
    id: '8392444b-d0dc-44a3-8369-65451df016f8',
    question: 'В каком из напитков должно присутствовать мороженое?',
    image: 'images/test/ice-cream.jpg',
    rightAnswer: {
      id: '46aa260d-e57d-47a4-a79b-10493d8c2b3a',
    },
  },
  {
    id: '39aa1ac9-e51d-47f9-b245-083d77e71715',
    question: 'Какой напиток содержит алкоголь?',
    image: 'images/test/wiski.jpg',
    rightAnswer: {
      id: '416f3dc1-b43d-4851-a48b-d7900fba6af3',
    },
  },
  {
    id: 'd9b162ff-404a-4562-8353-204acccc942e',
    question: 'В каком напитке присутствуют следующие ингридиенты: взбитое молоко, еспрессо, шоколад?',
    image: 'images/coffee/marocchino2.jpg',
    rightAnswer: {
      id: '01703a68-75b1-4aff-b66b-668cc281a1d5',
    },
  },
  {
    id: '4bf3fe57-bd51-424d-97e5-2d1796e8ad1b',
    question: 'Какой напиток содержит лимонный сок?',
    image: 'images/test/lemon.jpg',
    rightAnswer: {
      id: '6818038e-b51c-4dc4-b0b2-22f899aa7228',
    },
  },
  {
    id: '0ff3c898-b243-4720-af6f-dccd2aadcc5b',
    question: 'Какой напиток содержит воду?',
    image: 'images/test/water.webp',
    rightAnswer: {
      id: '3f6fbf22-26b5-4938-b4d2-dc084252bc1b',
    },
  },
  {
    id: 'df7d0579-8e2b-454b-aa4f-223d11db7a9b',
    question: 'Какой напиток содержит эспрессо, молоко и взбитое молоко в количестве 1/4, 1/4, 2/4?',
    image: 'images/coffee/kapuchino2.jpg',
    rightAnswer: {
      id: 'fdd12fdc-f7fe-4c17-96e3-c1b228e2a049',
    },
  },
  {
    id: '8db8b350-0525-407c-b515-98423421c8e1',
    question: 'Какой напиток содержит только эспрессо и молоко?',
    image: 'images/coffee/flatWhite2.jpg',
    rightAnswer: {
      id: '1e7412aa-c281-47be-b227-3c786342385e',
    },
  },
  {
    id: '471edcb0-118e-467a-bbd4-fea6b1233a5f',
    question: 'Какой напиток содержит сироп?',
    image: 'images/test/syrops.jpg',
    rightAnswer: {
      id: '9b1e6c58-1983-4bb3-bd65-6b93d42cfec0',
    },
  },
  {
    id: '902634a5-5d26-48f5-94a8-d58de166aaff',
    question: 'Какой напиток содержит эспрессо, молоко и взбитое молоко в количестве 1/4, 2/4, 1/4?',
    image: 'images/coffee/latte2.jpg',
    rightAnswer: {
      id: '78205627-668e-4450-92d9-deb6b6911c3e',
    },
  },
];
