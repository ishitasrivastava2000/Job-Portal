import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@mantine/carousel/styles.css';

function App() {
  const theme = createTheme ({
    colors: {
      'tulip-tree': 
      ['#fdfae9','#faf3c7','#f7e691','#f2d052','#ebb619','#dca216','#be7d10','#985910','#7e4815','#6b3b18','#3e1d0a'],
      'cyan': 
      ['#ecfeff', '#cffafe', '#a5f3fc','#67e8f9','#22d3ee','#06b6d4','#0891b2','#0e7490','#155e75','#164e63','#083344']
    }
  })
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
