// App.js
import './App.css';
import {Hello} from './example';
import Ex from './Componentsex';
import Header from './Header'; // Import your Header component
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Hello />
      <Ex />
      <Footer />
    </div>
  );
}

export default App;
