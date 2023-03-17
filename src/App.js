import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as movieService from './services/movieService';
import { MainNavigation } from './components/Navigation/MainNavigation';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Profile } from './components/Profile/Profile';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

function App() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll()
            .then(res => {
                setMovies(res)
            })
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <MainNavigation />
            </header>
            <main className='App-main'>
                <Routes>
                    <Route path='/*' element={<PageNotFound />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/profile/*' element={<Profile />} />
                    <Route path='/catalog' element={<Catalog movies={movies} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;