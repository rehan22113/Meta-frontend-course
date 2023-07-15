import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BookingPage from './Pages/BookingPage';
import BookingConfirmation from './Pages/BookingConfirmation';

function App() {
  return (
    <>
    
    <Routes> 
    <Route path="/" element={<Home />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
    <Route path="/booking-confirmed" element={<BookingConfirmation />}></Route>

</Routes>
    
   
    </>
  );
}

export default App;


