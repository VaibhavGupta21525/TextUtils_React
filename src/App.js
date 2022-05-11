import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("success", "Dark mode has been enabled")
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode has been enabled")
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
    </div>
    </>
  );
}

export default App;
