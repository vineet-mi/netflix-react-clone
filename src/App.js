import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav /> 
      <Banner />
      {/* banner */}
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title = "Trending Now" fetchUrl={requests.fetchTreding}/>
      <Row title = "Top rated" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movie" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romactice Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title = "Documentries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
