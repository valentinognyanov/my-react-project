import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { movieServiceFactory } from './services/movieService';
import { AuthProvider } from './contexts/AuthContext';

import { MainNavigation } from './components/Navigation/MainNavigation';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Profile } from './components/Profile/Profile';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Search } from './components/Search/Search';
import { Create } from './components/Create/Create';
import { Footer } from './components/Footer/Footer';
import { Details } from './components/Details/Details';
import { Logout } from './components/Logout/Logout';
import { Edit } from './components/Edit/Edit';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [movies, setMovies] = useState([]);
    const movieService = movieServiceFactory(); // auth.accessToken
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getAll()
            .then(res => {
                setMovies(res)
            })
    });

    const onCreateMovieSubmit = async (data) => {
        const newMovie = await movieService.create(data);

        setMovies(movies => [...movies, newMovie]);

        navigate('/catalog');
    };

    const onMovieEditSubmit = async (values) => {
        const result = await movieService.edit(values._id, values);

        setMovies(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/details/${values._id}`);
    };

    return (
        <AuthProvider>
            <div className="App">
                <header className="App-header">
                    <MainNavigation />
                </header>
                <main className='App-main'>
                    <Routes>
                        <Route path='/*' element={<PageNotFound />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<Catalog movies={movies} />} />
                        <Route path='/edit/:movieId' element={<Edit onMovieEditSubmit={onMovieEditSubmit} />} />
                        <Route path='/details/:movieId' element={<Details />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/create' element={<Create onCreateMovieSubmit={onCreateMovieSubmit} />} />
                        <Route path='/profile/:userId' element={<Profile />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;