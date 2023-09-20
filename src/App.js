import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{ useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [alert, setAlert] = useState(null);

    const showAlert =(message, type)=>{
        setAlert({
          msg:message,
          typ:type
        });
        setTimeout(() => {
          setAlert(null);
        },1500);
    }
  const [mode, setMode]= useState("light");
  const toggleMode=()=>{
    if (mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode is enabled","success");
    }
    
  }
  return (
    <>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
