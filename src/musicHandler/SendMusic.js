import axios from 'axios';
import * as Tone from 'tone';

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const songs = ["../music/BeethovenMoonlight1.mp3"]

const getMusic = () => {
  for(var url in songs){
    const player = new Tone.Player(url).toDestination();
    

    axios.get("https://git.heroku.com/qchacks-jukebox.git", { param: "100"})
    .then((results) => {
      console.log(results)
    })
    .catch( 
      console.log("Error occurred")
    );
  }
}

export default getMusic;