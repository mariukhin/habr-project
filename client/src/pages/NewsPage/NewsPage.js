import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import AsideFlowBlock from '../../components/AsideBlocks/AsideFlowBlock/AsideFlowBlock';
import PostPreview from '../../components/Post/PostPreview/PostPreview';
import pageHoc from '../../hoc/pageHoc/pageHoc';
import style from './NewsPage.module.css';

const topics = [
  { path: '/all', name: 'Все потоки', count: 54 },
  { path: '/flows/develop', name: 'Разработка', count: 23 },
  { path: '/flows/admin', name: 'Администрирование', count: 21 },
  { path: '/flows/design', name: 'Дизайн', count: 11 },
  { path: '/flows/management', name: 'Менеджмент', count: 11 },
  { path: '/flows/marketing', name: 'Маркетинг', count: 32 },
  { path: '/flows/geektimes', name: 'Гиктаймс', count: 21 },
  { path: '/flows/misc', name: 'Разное', count: 14 },
];
const post = {
  postId: '232132',
  profileImage: 'https://placeimg.com/640/480/any',
  profileName: 'zorkiy',
  publicationDate: 'вчера в 11:30',
  postTitle: 'Как работать с Postgres в Go: практики, особенности, нюансы',
  links: [
    {
      path: '/company/oleg-bunin',
      name: 'Блог компании Конференции Олега Бунина (Онтико), ',
    },
    { path: '/company/avito', name: 'Блог компании Авито, ' },
    { path: '/hub/hi', name: 'Высокая производительность, ' },
    { path: '/hub/postgresql', name: 'PostgreSQL' },
  ],
  previewText: `Как выдумаете, сложно ли написать на Python собственного чатбота, способного поддержать беседу? 
    Оказалось, очень легко, если найти хороший набор данных. Причём это можно сделать даже без нейросетей, хотя немного 
    математической магии всё-таки понадобится.</br></br> Идти будем маленькими шагами: сначала вспомним, как загружать данные в Python, 
    затем научимся считать слова, постепенно подключим линейную алгебру и теорвер, и под конец сделаем из получившегося 
    болтательного алгоритма бота для Телеграм.</br></br> Этот туториал подойдёт тем, кто уже немножко трогал пальцем Python, но 
    не особо знаком с машинным обучением. Я намеренно не пользовался никакими nlp-шными библиотеками, чтобы показать, 
    что нечто работающее можно собрать и на голом sklearn. `,
  postImage: 'https://placeimg.com/640/480/any',
  postStatistic: {
    ratingPlus: 23,
    ratingMinus: 11,
    saved: 24,
    views: '3k',
    comments: 12,
  },
};

class NewsPage extends Component {
  state = {
    currentTopic: 'Все потоки',
  };

  render() {
    return (
      <Fragment>
        <div className={style.mainFlow}>
          <p className={style.pageTitle}>Новости</p>
          <PostPreview post={post} />
          <PostPreview post={post} />
          <PostPreview post={post} />
        </div>
        <aside className={style.asideFlow}>
          <AsideFlowBlock topics={topics} />
          <AsideFlowBlock topics={topics} />
          <AsideFlowBlock topics={topics} />
        </aside>
      </Fragment>
    );
  }
}
export default pageHoc(NewsPage);
