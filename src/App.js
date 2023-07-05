import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import AllQutes from './Pages/AllQutes';
import QutesDetail from './Pages/QutesDetail';
import NewQutes from './Pages/NewQutes';
import Layout from './components/layout/Layout';
import NotFound from './Pages/Notfound';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQutes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QutesDetail />

        </Route>
        <Route path='/new'>
          <NewQutes />

        </Route>
        <Route path='*'>
          <NotFound/>

        </Route>
      </Switch>
    </Layout>

  );
}

export default App;
