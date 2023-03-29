import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { MovieProvider } from './contexts/MovieContext';

import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { MainNavigation } from './components/Navigation/MainNavigation';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Profile } from './components/Profile/Profile';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Search } from './components/Search/Search';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';

import { RouteGuard } from './components/common/RouteGuards';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <AuthProvider>
            <MovieProvider>
                <div className="App">
                    <header className="App-header">
                        <MainNavigation />
                    </header>
                    <main className='App-main'>
                        <Routes>
                            <Route path='/*' element={<PageNotFound />} />
                            <Route path='/' element={<Home />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/edit/:movieId' element={<Edit />} />
                            <Route path='/details/:movieId' element={<Details />} />
                            <Route path='/search' element={<Search />} />
                            <Route path='/create' element={
                                <RouteGuard>
                                    <Create />
                                </RouteGuard>
                            } />
                            <Route path='/profile/:userId' element={<Profile />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </MovieProvider>
        </AuthProvider>
    );
}

export default App;