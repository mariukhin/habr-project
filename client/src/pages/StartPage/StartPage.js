import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './StartPage.module.css';
import AsideFlowBlock from '../../components/AsideBlocks/AsideFlowBlock/AsideFlowBlock';
import TopicSelector from '../../components/TopicSelector/TopicSelector';
import PostPreview from '../../components/Post/PostPreview/PostPreview';
import pageHoc from '../../hoc/pageHoc/pageHoc';
import { fetchTopics } from '../../services/server-api';

// будет приходить из бека в стор под ключ topics:[]

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

class StartPage extends Component {
  state = {
    currentTopic: 'Все потоки',
    topics: [],
  };

  componentDidMount() {
    fetchTopics().then(result => this.setState({ topics: result }));
  }

  render() {
    const { currentTopic, topics } = this.state;
    return (
      <Fragment>
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
export default pageHoc(StartPage);
