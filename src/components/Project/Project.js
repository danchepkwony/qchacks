import {useEffect} from 'react';
import jukebox from '../../images/jukebox.svg';
import getMusic from '../../musicHandler/SendMusic';
import './Project.css';

const Project = () => {
    getMusic();

    return(
        <div className = "Project">
            <div className = "Jukebox">
                <img src={jukebox}/>
                <p className = "song">Now Playing:</p>
            </div>
        </div>);
}

export default Project;