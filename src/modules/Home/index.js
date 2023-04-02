import React from 'react';
import Playlist from '../../components/Playlist';
import Card from '../../components/Card';

  const albums = [
    "Thriller",
    "Nevermind",
    "Dark Side of the Moon",
    "Abbey Road",
    "The Miseducation of Lauryn Hill",
    "Pet Sounds"
  ];
  
  const albumCovers = albums.map(albumName => {
    let query = albumName.replace(/\s/g, "+");
    return `https://source.unsplash.com/64x64/?${query}`;
  });

  const fakeSportifyList= [
    {
      id: 1,
      name: 'Daily Mix 1',
      thumbnail: 'https://source.unsplash.com/180x180/?morning%20commute',
    },
    {
      id: 2,
      name: 'Daily Mix 2',
      thumbnail: 'https://source.unsplash.com/180x180/?workout%20mix',
    },
    {
      id: 3,
      name: 'Daily Mix 3',
      thumbnail: 'https://source.unsplash.com/180x180/?chill%20vibes',
    },
    {
      id: 4,
      name: 'Daily Mix 4',
      thumbnail: 'https://source.unsplash.com/180x180/?throwback%20jams',
    },
    {
      id: 5,
      name: 'Daily Mix 5',
      thumbnail: 'https://source.unsplash.com/180x180/?study%20session',
    },
    {
      id: 6,
      name: 'Daily Mix 6',
      thumbnail: 'https://source.unsplash.com/180x180/?joji',
    },
    {
      id: 7,
      name: 'Daily Mix 7',
      thumbnail: 'https://source.unsplash.com/180x180/?lofi',
    }
  ];


const Home = () => {
    const prefix = 'home'
    return (
        <div className={`${prefix}`}>
           <span className={`${prefix}--title`}>Good Morning</span> 
           <div className={`${prefix}--list_song`}>
                {albums.map((item, index) => (
                    <Playlist key={index} thumbnail={albumCovers[index]} name={item}/>
                ))}
           </div>
           <span className={`${prefix}--sub_title`}>Made for you</span> 
          <div className={`${prefix}--made_for_you`}>
            {fakeSportifyList.map((item, index) => (
                <Card key={index} cover={item.thumbnail} title={item.name} subtitle="Spotify" />
            ))}
          </div> 
          <span className={`${prefix}--sub_title`}>Tops hit</span> 

          <div className={`${prefix}--made_for_you`}>
            {fakeSportifyList.map((item, index) => (
                <Card key={index} cover={item.thumbnail} title={item.name} subtitle="Spotify" />
            ))}
          </div> 
          <span className={`${prefix}--sub_title`}>RnB rap</span> 

          <div className={`${prefix}--made_for_you`}>
            {fakeSportifyList.map((item, index) => (
                <Card key={index} cover={item.thumbnail} title={item.name} subtitle="Spotify" />
            ))}
          </div> 
        </div>
    );
};

export default Home;