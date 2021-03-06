import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const App = () => {
  const [isDarkMode, setDarkMode] = React.useState(localStorage.getItem("darkmode") === 'true');

  const toggleDarkMode = (checked: boolean) => {               
    localStorage.setItem('darkmode', checked);    
    setDarkMode(checked);
  };

  return (
    <div
    className="main"
    style={{
      minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: isDarkMode ? '#1b242c' : 'white',
        color: isDarkMode ? '#ffffff' : '#000000',
        transition: '0.2s background',        
    }}
    >    
    <DarkModeSwitch
      style={{ marginBottom: '0.5rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}      
    />
    <h3 style={{fontSize: '24px'}}>Hello, I am Ankit Dubey</h3>
    <p className="p-width" style={{width: "50%"}}>
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
    </p>
    </div>
  );
};

export default App;
