import React from 'react';

const Playlist = ({thumbnail, name}) => {
    return (
        <>
            <div className="playlist">
                <img className='playlist--thumbnail' src={thumbnail} alt="thumbnail" />
                <p className='playlist--name'>{name}</p>
            </div>
        </> 
    );
};

export default Playlist;