import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light') // dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor= 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  }
  // const greenMode = () => {
  //   setMode('green');
  //   document.body.style.backgroundColor= '#198754';
  //     document.body.style.color = 'black';
  //     showAlert("Green mode has been enabled", "success");
  // }

  // const redMode = () => {
  //   setMode('red');
  //   document.body.style.backgroundColor= '#db3443';
  //     document.body.style.color = 'black';
  //     showAlert("Red mode has been enabled", "success");
  // }

  // const yellowMode = () => {
  //   setMode('yellow');
  //   document.body.style.backgroundColor= '#f8c314';
  //     document.body.style.color = 'black';
  //     showAlert("Yellow mode has been enabled", "success");
  // }
  return (
    <>
    <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} /*yellowMode={yellowMode} greenMode={greenMode} redMode={redMode}*//>
        <Alert alert={alert}/>
        <div className="container my-3">
                <Routes>
                  {/* /users --> Component 1
                  /users/home --> Component 2 */}
                  <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter text below to analyze" mode={mode}/> } />
                  <Route exact path='/about' element={<About mode={mode}/>} />
                </Routes>
        </div>
    </Router>

    </>
  );
}

export default App;
