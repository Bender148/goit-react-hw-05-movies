// React imports
import { Route, Switch, Redirect } from 'react-router-dom';

// Components imports
import AppBar from './components/AppBar';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Views imports
import Home from './views/HomePage';
import MoviesSearch from './views/MoviesPage';
import MoviePage from './views/MovieDetailsPage';

const App = () => {
  return (
    <>
      <AppBar />
      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={MoviesSearch} />
          <Route path="/movies/:movieId" component={MoviePage} />
          <Redirect to="/" />
        </Switch>
      
      {/* <Footer /> */}
    </>
  );
};

export default App;