import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import * as movieService from './services/movieService';
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
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll()
            .then(res => {
                setMovies(res)
            })
    }, []);

    const onCreateMovieSubmit = async (data) => {
        const newMovie = await movieService.create(data);
        
        setMovies(movies => [...movies, newMovie]);

        navigate('/catalog');
    };

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <MainNavigation />
                </header>
                <main className='App-main'>
                    <Routes>
                        <Route path='/*' element={<PageNotFound />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<Catalog movies={movies} />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/create' element={<Create onCreateMovieSubmit={onCreateMovieSubmit} />} />
                        <Route path='/profile/*' element={<Profile />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/details/*' element={<Details />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;