// App.jsx
// Xuan Tri Nguyen 
// 3013888576
// Duedate: Sep 26, 2024
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
const App = () => {
  return (
    <Router>
      
        <MainRouter />
     
    </Router>
  );
};
export default App;
