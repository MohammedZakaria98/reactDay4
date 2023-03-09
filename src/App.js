import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Navbar/navbar';
import UsersListFunctional from './Components/usersListFunctional/UsersListFunctional';
import AboutUs from './Components/AboutUs/aboutUs';
import ContactUs from './Components/contact/contactUs';
import NotFound from './Components/notFound/notFound';
import SaveProduct from './Components/SaveProduct/SaveProduct';
import EditProduct from './Components/EditProduct/EditProduct';
import Movies from './Components/movies/movies';
import MovieDetails from './Components/movieDetails/movieDetails';
import FavoriteMovies from './Components/favoriteMovies/favoriteMovies';

function App() {

  return (
    <div >

      <Header />

      <Routes>
        <Route path="/" element={<UsersListFunctional />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/movies" element={<Movies />}>
          <Route index element={<SaveProduct />} />
          <Route path="save" element={<SaveProduct />} />
          <Route path="edit" element={<EditProduct />} />
        </Route>
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/favoriteMovies" element={<FavoriteMovies />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;
