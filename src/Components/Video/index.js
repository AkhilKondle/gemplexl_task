import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

import {
   
    VideoItemContent,
    ChannelAndDescription,
    ChannelAndDescriptionContent,
    ChannelThumbnail,
    VideoItemDetails
} from './styledComponents';
import './index.css';
import Header from '../Header/Header';
import { Button } from '@mui/material';

const Video = () => {
    const renderVideoDetails = () => {
        return (
            <div>
                <p style={{ fontWeight: '550', fontSize: '16px', color: '#ffffff' }}>{`Avatar | Official Trailer (HD) | 20th Century FOX`}</p>
                        <p style={{ fontWeight: '550', fontSize: '14px', color: '#ffffff' }}>12M Views</p>
                
            </div>
        );
    };



    const renderChannelAndDescription = () => {
        return (
           
                <ChannelAndDescription>
                    <ChannelThumbnail src='https://res.cloudinary.com/dyivs1j8u/image/upload/v1709120242/download-removebg-preview_1_fotw06.png' alt='channel logo' />
                    <ChannelAndDescriptionContent>
                        <div style={{ paddingBottom: '15px' }}>
                            <p style={{ fontWeight: '550', fontSize: '16px', color: '#ffffff' }}>Gemplex</p>
                            <p style={{  fontSize: '12px', color: '#ffffff' }}>1M</p>
                        </div>
                        <p style={{ fontWeight: '550', fontSize: '14px', color: '#ffffff' }}>{`GEMPLEX is a premium video-on-demand & Music Streaming platform that lets you watch latest Originals, Web Films, TV Series, Feature Films, Sports, Spiritual Content, Lifestyle & Travel Videos & Live Content & events on-the-go. Gemplex is India's one of the most premium streaming platform with hours of audio- video content in various languages. `}</p>
                    </ChannelAndDescriptionContent>
                </ChannelAndDescription>
                
           
        );
    };

    const renderVideoContent = () => {
        return (
            <>
            
            <VideoItemDetails>
                <ReactPlayer url='https://youtu.be/5PSNL1qE6VY?si=bFYENv43dgZNUZa3' controls width='100%' height='45%' />
                <div>
                    {renderVideoDetails()}
                    <hr/>
                    {renderChannelAndDescription()}
                </div>
            </VideoItemDetails>
            </>
        );
    };

    return (
        <div style={{backgroundColor:'#232b2b',minHeight:'100vh',backgroundSize:'cover'}}>
            <Header/>
                <VideoItemContent>
                    {renderVideoContent()}
                </VideoItemContent>
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" style={{ width: '120px', marginLeft: '20px' ,marginBottom:'20px'}} >Back</Button>
                </Link>
        </div>
    );
};

export default Video;
