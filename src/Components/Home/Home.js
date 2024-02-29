import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Header from '../Header/Header';
import Slider from '../Slide/slide';
import MovieList from '../MoviesList/movilist';

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{backgroundColor:'#232b2b',minHeight:'100vh',backgroundSize:'cover'}}>
    <Header/>
    <div style={{ paddingTop: '65px' }}>
    
    <Box style={{marginBottom:'2px'}} >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Home" style={{color:'#FFFFFF'}}/>
        <Tab label="Orginals" style={{color:'#FFFFFF'}}/>
        <Tab label="Movies" style={{color:'#FFFFFF'}}/>
        <Tab label="Videos" style={{color:'#FFFFFF'}}/>
        <Tab label="Music" style={{color:'#FFFFFF'}}/>
      </Tabs>
    </Box>

    <Slider/>
    <MovieList/>
    </div>
    </div>
  );
}
