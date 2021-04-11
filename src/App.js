import './App.css';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <h1>Quantum Jukebox</h1>
      <Project />
      <div className = "Description">
        <p>
          The Quantum Jukebox explains “noise” with literal noise. 
          In quantum computing, interference can be harnessed to improve encryption and communication,  or to make virtual jukeboxes.
          The goal of the Quantum Jukebox is a song to be cloned and pitch shifted 8 times, one for each of the 8 codewords of length 3.
          The song would then play all 8 of these clones, at varying volumes. The volumes would be scaled to match the probability of its respective codeword.

          Interference refers to the distribution of probabilities received from an output. 
          When the Bernstein-Vazirani algorithm is employed, these probabilities create a distribution where the highest probability is the intended codeword. 
          This project is meant to exemplify that through music. Ideally, there would be multiple songs, but for now there’s only one.

          I wasn't able to fully implement the project. I created a heroku app for the backend that I struggled with until the final hour.
          I struggled a lot with finding a way to utilize Python with a web application. 
          I tried many different products before deciding to use Heroku.
          I also struggled to learn the concept of interference. I enjoyed the process of learning I got to experience.

          This project could benefit new learners like me who don't fully understand the technical ideas of quantum mechanics yet.
        </p>
      </div>
    </div>
  );
}

export default App;
