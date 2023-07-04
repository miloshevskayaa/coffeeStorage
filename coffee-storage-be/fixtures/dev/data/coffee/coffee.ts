import { DeepPartial } from 'typeorm';

import { Coffee } from '@entities/coffee';

export const COFFEE_FIXTURES: DeepPartial<Coffee>[] = [
  {
    id: 'ec17ac93-7b60-47dc-99a8-fc1c6365cc58',
    title: 'espresso',
    imagePrimary: 'images/coffee/espresso1.jpg',
    imageSecondary: 'images/coffee/espresso2.jpg',
    videoLink: 'https://www.youtube.com/embed/cGzQWgOuAfg',
    recipe: {
      id: '9f371532-b026-43e5-abda-e190846530d7',
    },
  },
  {
    id: '3f6fbf22-26b5-4938-b4d2-dc084252bc1b',
    title: 'americano',
    imagePrimary: 'images/coffee/americano1.jpg',
    imageSecondary: 'images/coffee/americano2.jpg',
    videoLink: 'https://www.youtube.com/embed/tjKxHQGB2aw',
    recipe: {
      id: 'da9b3564-b226-4d6a-a5e6-112e112ae2cd',
    },
  },
  {
    id: 'fdd12fdc-f7fe-4c17-96e3-c1b228e2a049',
    title: 'kapuchino',
    imagePrimary: 'images/coffee/kapuchino1.jpg',
    imageSecondary: 'images/coffee/kapuchino2.jpg',
    videoLink: 'https://www.youtube.com/embed/5Q8VU8WegqE',
    recipe: {
      id: '525746f7-87ba-4272-bf9c-4e41879657fb',
    },
  },
  {
    id: '1e7412aa-c281-47be-b227-3c786342385e',
    title: 'flat white',
    imagePrimary: 'images/coffee/flatWhite1.jpg',
    imageSecondary: 'images/coffee/flatWhite2.jpg',
    videoLink: 'https://www.youtube.com/embed/7ONJ4cDY8MQ',
    recipe: {
      id: 'bbaf1348-fba9-4caf-90cf-e1996655313e',
    },
  },
  {
    id: '78205627-668e-4450-92d9-deb6b6911c3e',
    title: 'latte',
    imagePrimary: 'images/coffee/latte1.jpg',
    imageSecondary: 'images/coffee/latte2.jpg',
    videoLink: 'https://www.youtube.com/embed/VR__TWd_PRA',
    recipe: {
      id: 'b893e290-f77d-46ae-a405-ef0186971ae9',
    },
  },
  {
    id: '9b1e6c58-1983-4bb3-bd65-6b93d42cfec0',
    title: 'raf',
    imagePrimary: 'images/coffee/raf1.jpg',
    imageSecondary: 'images/coffee/raf2.jpg',
    videoLink: 'https://www.youtube.com/embed/hHQlbAWVbNk',
    recipe: {
      id: 'c4c7c654-9c14-4adb-a20e-bd4c5ac031af',
    },
  },
  {
    id: 'c14eff29-b9c0-4d1c-b79a-b39e50fb22e3',
    title: 'macchiato',
    imagePrimary: 'images/coffee/macchiato1.jpg',
    imageSecondary: 'images/coffee/macchiato2.jpg',
    videoLink: 'https://www.youtube.com/embed/LyUj1MsnRt4',
    recipe: {
      id: '98121817-8413-4bc1-ae93-006dcd4fd00c',
    },
  },
  {
    id: '46aa260d-e57d-47a4-a79b-10493d8c2b3a',
    title: 'glace',
    imagePrimary: 'images/coffee/glace1.jpg',
    imageSecondary: 'images/coffee/glace2.jpg',
    videoLink: 'https://www.youtube.com/embed/zvmjrnNa_wc',
    recipe: {
      id: '39c994db-fe77-4e80-8cbb-36a119bcdd33',
    },
  },
  {
    id: '6818038e-b51c-4dc4-b0b2-22f899aa7228',
    title: 'romano',
    imagePrimary: 'images/coffee/romano1.jpg',
    imageSecondary: 'images/coffee/romano2.jpg',
    videoLink: 'https://www.youtube.com/embed/P6yr20b3Sik',
    recipe: {
      id: 'f0f1675f-f921-458b-a3ff-62050fb7c3dd',
    },
  },
  {
    id: 'fa9ad460-5132-4bd4-994b-1807e77a76ba',
    title: 'mocha',
    imagePrimary: 'images/coffee/mocha1.jpg',
    imageSecondary: 'images/coffee/mocha2.jpg',
    videoLink: 'https://www.youtube.com/embed/RFsktz_W-xI',
    recipe: {
      id: '61158407-4489-484e-be94-0834b2678e2e',
    },
  },
  {
    id: '416f3dc1-b43d-4851-a48b-d7900fba6af3',
    title: 'corretto',
    imagePrimary: 'images/coffee/corretto1.jpg',
    imageSecondary: 'images/coffee/corretto2.jpg',
    videoLink: 'https://www.youtube.com/embed/8qMtvMDizBs',
    recipe: {
      id: 'e395b634-1153-49bb-925a-d3dc9a644a56',
    },
  },
  {
    id: '01703a68-75b1-4aff-b66b-668cc281a1d5',
    title: 'marocchino',
    imagePrimary: 'images/coffee/marocchino1.jpg',
    imageSecondary: 'images/coffee/marocchino2.jpg',
    videoLink: 'https://www.youtube.com/embed/w_8KqwRuEfQ',
    recipe: {
      id: 'a85e34e2-f442-481c-a5bc-5b5065877cfb',
    },
  },
];
