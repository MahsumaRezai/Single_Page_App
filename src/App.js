import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import AllQutes from './Pages/AllQutes';
import QutesDetail from './Pages/QutesDetail';
import NewQutes from './Pages/NewQutes';
function App() {
  return (
    <Switch>
      <Route path='/quotes' exact>
        <AllQutes />

      </Route>
      <Route path='/quotes/:quoteId'>
        <QutesDetail />

      </Route>
      <Route path='/new'>
        <NewQutes />

      </Route>

    </Switch>

  );
}

export default App;
