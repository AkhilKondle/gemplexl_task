import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



const MovieList = () => {
    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {

        axios.get('https://mocki.io/v1/cead1ab5-8153-4557-a587-f6ebb2710769')
            .then((res) => {
                setMoviesList(res.data.data)
                console.log(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    const aspectRatio = 16 / 9; 

    return (
        <div >
        {moviesList.map((item) => (
        <div key={item.id} style={{ color: '#ffffff', marginLeft: '10px', flex: '0 0 auto' }}>
            <p style={{ color: '#59D5E0', fontWeight: '570',fontSize:'18px' }}>{item['card_name']}</p>
            <ul className='ul' key={item.id} style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', padding: 0 ,WebkitOverflowScrolling: 'touch'}}>
                {item['content_list'].map((subItem) => (
                    
                    <li key={subItem.id}  style={{ listStyle: 'none', margin: '3px', flex: '0 0 auto' }}>
                        <Link to="/video" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img src={subItem['image_url']} style={{ height: '30vh', width: `${(13 * aspectRatio)}vh`, borderRadius: '5px' }} />
                        </Link>
                        <p style={{ fontWeight: '550',fontSize:'16px' }}>{subItem['name']}</p>
                    </li>
                    
                ))}
            </ul>
        </div>
    ))}
</div>


    )
}

export default MovieList