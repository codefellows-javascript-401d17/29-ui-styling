import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createAppStore from '../../lib/store';
import DashboardContainer from '../dashboard-container';
import Header from '../header';

const store = createAppStore();

class App extends React.Component {

  componentDidMount() {
    store.subscribe(() =>{
      console.log('*___STATE___*', store.getState())
    });

    store.dispatch({ type: null });
  }

  render() {
    return (
      <section>
        <Header />
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App;
