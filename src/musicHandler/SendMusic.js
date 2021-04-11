import axios from 'axios';
import * as Tone from 'tone';

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const songs = ["../music/BeethovenMoonlight1.mp3"]

const getMusic = () => {
  const merge = new Tone.Merge().toDestination();

  for(var url in songs){
  //   axios.get("https://qchacks.herokuapp.com/", { param: "100"})
  //   .then((results) => {
  //     console.log(results)
  //   })
  //   .catch( 
  //     console.log("Error occurred")
  //   );
  // }

    for(var i = 0; i < 8; i++){
      const pitchShift = new Tone.PitchShift().toDestination();
      const player = new Tone.Player(url).connect(pitchShift).toDestination();
      player.autostart = true;
      pitchShift.pitch = i;
      var vol = new Tone.Volume(12);
      if(i!=0){
        var vol = new Tone.Volume(6);
      }
      player.chain(vol, Tone.Master);
      player.connect(merge, 0, 0);
    }
  }

  Tone.start()
}

export default getMusic;