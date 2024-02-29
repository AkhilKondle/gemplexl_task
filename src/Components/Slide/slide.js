import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = () => {
    const [picturesArray, setPicturesArray] = useState([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/783f8c69-af91-45ff-87df-e675c3f11fef')
            .then((res) => {
                setPicturesArray(res.data.data[0]['content_list']);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    // need to give this dynamically 
    const duneImage='https://res.cloudinary.com/dyivs1j8u/image/upload/v1709126349/wallpapersden.com_poster-of-dune-2020_3840x2160_kqkttw.jpg'

    return (
        <Carousel  labels={false}  autoPlay={true} renderThumbs={() => false} showArrows={true  } swipeable={true}  interval={2000}>
            {picturesArray.map((item, index) => (
                <div key={item['name']}>
                    <img src={item['name']!='Dune'?item['image_url']:duneImage} alt={item['name']} />
                    {/* <img src={item['image_url']} alt={item['name']} /> */}
                </div>
            ))}
        </Carousel>
    );
}



export default Slider;
