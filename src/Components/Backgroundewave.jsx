import React from "react";

const BackgroundWave = () => {
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#12002b] overflow-hidden">
                <svg
                    className="absolute bottom-0 left-0 w-[300%] animate-wave opacity-40 shadow-xl "
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter id="blur">
                            <feGaussianBlur stdDeviation="10" /> 
                        </filter>
                    </defs>
                    <path
                        fill="#4A0080"
                        fillOpacity="1"
                        d="M0,288L80,261.3C160,235,320,181,480,154.7C640,128,800,128,960,165.3C1120,203,1280,277,1360,314.7L1440,352L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                        filter="url(#blur)" 
                    ></path>
                </svg>
                <svg
                    className="absolute bottom-0 left-0 w-[300%] animate-wave-slow opacity-40 shadow-xl "
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#2D004D"
                        fillOpacity="1"
                        filter="url(#blur)" 
                        d="M0,288L80,261.3C160,235,320,181,480,154.7C640,128,800,128,960,165.3C1120,203,1280,277,1360,314.7L1440,352L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path>
                </svg>
                <svg
                    className="absolute bottom-0 left-0 w-[300%] animate-wave-fast opacity-40 shadow-xl "
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#3B0066"
                        fillOpacity="1"
                        filter="url(#blur)" 
                        d="M0,288L80,261.3C160,235,320,181,480,154.7C640,128,800,128,960,165.3C1120,203,1280,277,1360,314.7L1440,352L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path>
                </svg>
            </div>


        </>
    );
};

export default BackgroundWave;
