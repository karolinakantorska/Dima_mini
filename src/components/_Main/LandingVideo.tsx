import React, { useEffect, useState, SyntheticEvent, ReactEventHandler } from 'react';

export default function LandingVideo() {
    //console.log('DIMA_IntroMovie', DIMA_IntroMovie)
    return (
        <video
            style={{
                objectFit: 'cover',
                width: "100vw",
                //height: "100vh"
                maxHeight: "100vh",
                minHeight: "40vh",
            }}
            controls={false}
            autoPlay
            muted
            loop
            src={'/video/DIMA_IntroMovie.mp4'}
        //poster={poster}
        >
            <source src={'/video/DIMA_IntroMovie.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

    )
}

/*

        */