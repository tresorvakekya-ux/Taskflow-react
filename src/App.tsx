import Headers from './Composants/Header';
import './App.css';
import Buton from './Composants/Buton';
function App() {

  return (
    <>
      <Headers />

    <div className="App">
      <h2>Welcome to My App</h2>
      <p>Ma première application avec React</p>
      <Buton />
    </div>
    </>
  )
}

export default App
