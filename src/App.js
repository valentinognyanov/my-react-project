import { Route, Routes } from 'react-router-dom';

import './App.css';
import { MainNavigation } from './components/MainNavigation';
import { Home } from './components/Home';
import { Catalog } from './components/Catalog';
import { Profile } from './components/Profile';
import { About } from './components/About';
import { Register } from './components/Register';
import { Login } from './components/Login';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <MainNavigation />
            </header>
            <main className='App-main'>
                <Routes>
                    <Route path='/*' element={<h1>404</h1>} />
                    <Route path='/' element={<Home />} />
                    <Route path='/profile/*' element={<Profile />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;