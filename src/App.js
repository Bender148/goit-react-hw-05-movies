// React imports
import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Components imports
import AppBar from './components/AppBar';
import {TailSpin} from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Views imports
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <TailSpin
            color="#80cbc4"
            height={80}
            width={80}
            className="loader"
          />
        }
      >
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};

export default App;