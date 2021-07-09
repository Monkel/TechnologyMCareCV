import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation.js';
import About from './fragments/About.js';
import Home from "./HomePage.js"
import SkillsProfile from './fragments/SkillsProfile.js';
import WorkExperience from './fragments/WorkExperience.js';
import Education from './fragments/Education.js';
import Aspirations from './fragments/Aspirations.js';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
          <Router>
            
            {/*For navigation bar at top of screen using Navigation.js*/}
            <Navigation />
              <Switch>
                <Route exactcomponent={About} pattern="/About" />
                <Route component={SkillsProfile} pattern="/SkillsProfile.js" />
                <Route component={WorkExperience} pattern="/WorkExperience" />
                <Route component={Education} pattern="/Education" />
                <Route component={Aspirations} pattern="/Aspirations" />
              </Switch>
            
          </Router>
        </div>
  );
}

export default App;
