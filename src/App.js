import logo from './logo.svg';
import  './App.css';
import sd from './img.png'

function App() {
  return (
    
    <div className="App">
      <div id="map" style={{ width: "100vw", height: "100vh", margin: "0", padding: "0", border: "1px solid black"}}>
    
      <h1 style={{ color: "red", fontSize: 60 }}>kais</h1>
      <br/>
      <img src={sd}></img>
      <br/>
      <img src='/img2.png'></img>
      </div>
      <video width="320" height="240" controls>
  <source src="movie.ogg" type="video/ogg"></source>
</video>
      
    </div>
  );
}

export default App;
