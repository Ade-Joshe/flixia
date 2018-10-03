import React, { Component } from 'react';
import MainLayout from "./MainLayout";
import AdminLayout from './AdminLayout'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/home/Home'
import About from './Pages/about/About';
import Movies from './Pages/movies/Movies';
import FAQ from './Pages/faq/FAQ';
import Celebs from './Pages/celebs/Celebs';
import Terms_and_Conditions from './Pages/terms/tandc';
import SingleCeleb from './Pages/singleceleb/singleCeleb.js';
import SingleMovie from './Pages/singlemovie/SingleMovie';
import AdminHome from './Pages/Admin/AdminHome';
import AddVideos from './Pages/Admin/addVideos';
import AddCeleb from './Pages/Admin/addCelebs';
import Reviews from './Pages/components/reviews';
const AppRoute = ({ Component, Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )}
  />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppRoute exact path="/admin/addTrailers" Layout={AdminLayout} Component={AddVideos} />
          <AppRoute exact path="/admin/addCelebs" Layout={AdminLayout} Component={AddCeleb} />
          <AppRoute exact path="/movies/singlemovie/:id" Layout={MainLayout} Component={SingleMovie} />
          <AppRoute exact path="/celebs/single_celebs/:id" Layout={MainLayout} Component={SingleCeleb} />
          <AppRoute exact path="/movies" Layout={MainLayout} Component={Movies} />
          <AppRoute exact path="/celebs" Layout={MainLayout} Component={Celebs} />
          <AppRoute exact path="/about" Layout={MainLayout} Component={About} />
          <AppRoute exact path="/reviews" Layout={MainLayout} Component={Reviews} />
          <AppRoute exact path="/faq" Layout={MainLayout} Component={FAQ} />
          <AppRoute exact path="/terms" Layout={MainLayout} Component={Terms_and_Conditions} />
          <AppRoute exact path="/" Layout={MainLayout} Component={Home} />
          <AppRoute exact path="/admin" Layout={AdminLayout} Component={AdminHome} />
        </div>
      </Router>
    );
  }
}

export default App;
