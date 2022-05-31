import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Containers/Header/Header';
import QrContainer from './Containers/QrContainer/QrContainer';
import CancelOrder from './Components/CancelOrder/CancelOrder';
import Submit from './Components/Submit/Submit';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Routes>
          
          <Route path="/cancel" exact element={<CancelOrder />} />
          <Route path="/submitted" exact element={<Submit />} />
          <Route path="/" exact element={<QrContainer />} />

        </Routes>
          
        
        
      </Router>
        
        


      
    </div>
  );
}

export default App;
