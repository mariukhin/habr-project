import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import StartPage from '../pages/StartPage/StartPage';

function App() {
  return (
    <ToastProvider placement="bottom-right">
      <>
        <Router>
          <Route exact path="/" component={StartPage} />
          {/* <Route exact path="/language_descr" component={LanguageDescrPage} />
          <Route exact path="/test" component={TestPage} />
          <Route exact path="/result" component={ResultPage} />
          <Route exact path="/contacts" component={ContactPage} /> */}
        </Router>
      </>
    </ToastProvider>
  );
}

export default App;
