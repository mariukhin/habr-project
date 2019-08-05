import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import StartPage from '../pages/StartPage/StartPage';
import NewsPage from '../pages/NewsPage/NewsPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <ToastProvider placement="bottom-right">
      <>
        <Router>
          <Header />
          <Route exact path="/" component={StartPage} />
          <Route exact path="/news" component={NewsPage} />
          {/* <Route exact path="/language_descr" component={LanguageDescrPage} />
          <Route exact path="/test" component={TestPage} />
          <Route exact path="/result" component={ResultPage} />
          <Route exact path="/contacts" component={ContactPage} /> */}
          <Footer />
        </Router>
      </>
    </ToastProvider>
  );
}

export default App;
