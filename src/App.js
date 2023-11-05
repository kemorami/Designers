import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Showcase from './components/Showcase'
import Services from './components/Services'
import Designers from './components/Designers'
import Packages from './components/Packages'
import Contacts from './components/Contacts'

function App() {
  return (
    <>
    <Menu/>
    <div class="main">
        <h1>Interior Design</h1>
        <Showcase/>
        <Services/>
        <Designers/>
        <Packages/>
        <Contacts/>
    </div>
    <div class="end">
           <p>Powered by <span> Alexsey </span></p> 
        </div>
    </>
  );
}

export default App;
