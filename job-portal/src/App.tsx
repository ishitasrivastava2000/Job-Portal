import './App.css';
import { createTheme, MantineProvider, Slider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';

function App() {
  const theme = createTheme ({
    colors: {
      'tulip-tree': 
      ['#fdfae9','#faf3c7','#f7e691','#f2d052','#ebb619','#dca216','#be7d10','#985910','#7e4815','#6b3b18','#3e1d0a'],
      'blue': 
      ['#eff6ff', '#dbeafe', '#bfdbfe','#93c5fd','#60a5fa','#3b82f6','#2563eb','#1d4ed8','#1e40af','#1e3a8a','#172554']
    }
  })
  return (
    <MantineProvider theme={theme}>
      <HomePage/>
    </MantineProvider>
  );
}

export default App;
