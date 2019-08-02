import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './StartPage.module.css';
import AsideFlowBlock from '../../components/AsideBlocks/AsideFlowBlock/AsideFlowBlock';
import TopicSelector from '../../components/TopicSelector/TopicSelector';
import TitleBlock from '../../components/Post/TitleBlock/TitleBlock';

// будет приходить из бека в стор под ключ topics:[]
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
};

export default class StartPage extends Component {
  state = {
    currentTopic: 'Все потоки',
  };

  render() {
    const { currentTopic } = this.state;
    return (
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.mainFlow}>
            <TopicSelector
              topics={topics.filter(item => item.name !== currentTopic)}
              currentTopic={currentTopic}
            />
            <div className={style.filterBlock}>
              <div className={style.filterBlock_titleBlock}>
                <button type="button" className={style.titleBlock_titleBtn}>
                  Лучшие
                </button>
                <button type="button" className={style.titleBlock_titleBtn}>
                  Все подряд
                  <span className={style.titleBlock_titleBtn_counter}>+34</span>
                </button>
              </div>
              <div className={style.filterBlock_timeBlock}>
                <ul className={style.filterBlock_timeBlock_list}>
                  <li className={style.filterBlock_timeBlock_listItem}>
                    <button type="button" className={style.listItem_btn}>
                      Сутки
                    </button>
                  </li>
                  <li className={style.filterBlock_timeBlock_listItem}>
                    <button type="button" className={style.listItem_btn}>
                      Неделя
                    </button>
                  </li>
                  <li className={style.filterBlock_timeBlock_listItem}>
                    <button type="button" className={style.listItem_btn}>
                      Месяц
                    </button>
                  </li>
                  <li className={style.filterBlock_timeBlock_listItem}>
                    <button type="button" className={style.listItem_btn}>
                      Год
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <TitleBlock post={post} />
          </div>
          <aside className={style.asideFlow}>
            <AsideFlowBlock topics={topics} />
            <AsideFlowBlock topics={topics} />
            <AsideFlowBlock topics={topics} />
          </aside>
        </div>
      </div>
    );
  }
}
