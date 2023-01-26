import './App.css';
import Home from './components/Home';
import { useSelector } from 'react-redux';
function App() {
  const { myValue } = useSelector(state => state.myCustomReducer);


  return (
    <div className="App">
      <h1>Parent Component value : {myValue}</h1>
      <Home/>
    </div>
  );
}

export default App;
