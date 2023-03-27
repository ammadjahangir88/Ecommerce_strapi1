
import './App.css';
import User from './User'
// import Home from './components/Home';
import HomeContainer from './container/HomeContainer'
import HeaderContainer from './container/HeaderContainer';
function App() {
  return (
    <div className="App">
     <HeaderContainer />
      <HomeContainer />
   
    </div>
  );
}

export default App;
