import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import User from './pages/User';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';

function App() {
  return (
    <GithubProvider>
      <Router>
        <Navbar />

        <div className='container mx-auto mt-24 dark:text-gray-50 relative'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:login' element={<User />} />
            <Route path='/about' element={<About />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </GithubProvider>
  );
}

export default App;
