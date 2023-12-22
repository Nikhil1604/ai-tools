import {Box} from '@mui/material'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Userexp from './components/Userexp';
import Pricing from './components/Pricing';
import News from './components/News';
import Review from './components/Review';
import Qustions from './components/Qustions';
import Membership from './components/Membership';
import Footer from './components/Footer';

function App() {
  return (
    <Box>
      <Navbar/>
      <Hero/>
      <Features />
      <Userexp/>
      <Pricing/>
      <News/>
      <Review />
      <Qustions />
      <Membership />
      <Footer />
    </Box>
  );
}

export default App;
