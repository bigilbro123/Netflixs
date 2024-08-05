import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_KEY } from '../../constants/constants'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'



function Banner() {
    const [banner, setBanner] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            const randomNumber = Math.floor(Math.random() * 20) + 1;
            setBanner(response.data.results[randomNumber - 1])
        })
    }, [])
    return (
        <div style={{ backgroundImage: `url(${banner ? imageUrl + banner.backdrop_path : ''})` }} className='banner container-fluid'>
            <div className="content">
                <h1 className="title">{banner ? banner.title : 'Loding'}</h1>
                <div className="buttons">
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className="description">{banner ? banner.overview : "nice"}</h1>
            </div>
            <div className="fade_bottom container-fluid">

            </div>

        </div>
    )
}

export default Banner