import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import App from './App.tsx';
// import RecommendScreen from './caminho/para/RecommendScreen'; // Certifique-se de ajustar o caminho correto

// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={App} />
//         <Route path="/recomendacoes" component={RecommendScreen} />
//       </Switch>
//     </Router>
//   </React.StrictMode>,
// );