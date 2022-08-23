import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCommentDots, faCalendarDays, faChalkboardUser, faPeopleRobbery, faChartLine, faBriefcase, faHeadset, faEarthAmericas, faChartColumn, faQuoteLeft, faQuoteRight, faChevronRight, faChevronLeft, faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faCommentDots, faCalendarDays, faChalkboardUser, faPeopleRobbery, faChartLine, faBriefcase, faHeadset, faEarthAmericas, faChartColumn, faQuoteLeft, faQuoteRight, faChevronRight, faChevronLeft, faTimes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
