import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../../axios';
import Youtube from 'react-youtube';
import { API_KEY } from '../../constants/constants';

function Row(props) {
    const [rows, setRows] = useState([]);
    const [videoId, setVideoId] = useState(null); // State to store selected video ID

    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                console.log(response);
                setRows(response.data.results); // Assuming response.data.results contains the data
            })
            .catch(err => alert("ERROR"));
    }, [props.url]); // Add props.url to the dependency array

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleMovie = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                const video = response.data.results[0]; // Assuming you want the first video
                if (video) {
                    console.log(video);
                    setVideoId(video.key);
                    console.log(video.key);// Set the video ID to the state
                }
            })
            .catch(err => alert("ERROR"));
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {rows.map((row, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <img onClick={() => handleMovie(row.id)}
                            className={props.isSamll ? 'smallposter' : 'poster'}
                            src={`https://image.tmdb.org/t/p/w500${row.poster_path}`} // Assuming row has a poster_path property
                            alt={row.name || row.title} // Assuming row has a name or title property
                        />
                        {
                            props.Notitle ? null : <h4 style={{ color: 'white', zIndex: '1' }}>
                                {row.title?.length <= 12 ? row.title : `${row.title?.slice(0, 12)}...`}
                            </h4>
                        }

                    </div>
                ))}
            </div>
            {videoId && (
                <Youtube
                    opts={opts}
                    videoId={videoId} // Use videoId state to dynamically set the video
                />
            )}
        </div>
    );
}

export default Row;
