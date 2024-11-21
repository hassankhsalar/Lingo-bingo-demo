import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tutorials = () => {
    const navigate = useNavigate();
    return (
        <div className="relative">
            <div>
            <h1 className='text-3xl font-bold text-center pb-5'>Tutorials</h1>
            </div>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            
            <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/4MNnv5hsfYw?si=i7f3rpMG8jLlAZqy"
                    title="Learn ABCs with DOGEN"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="w-full h-48"
                ></iframe>
                <div className="card-body">
                    <h2 className="card-title">Learn ABCs with DOGEN</h2>
                    <p>Get prepared on your journey</p>
                </div>
            </div>

            
            <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/rGrBHiuPlT0?si=m-m-Wq8SoAdRxaF2"
                    title="Japan Society NYC"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="w-full h-48"
                ></iframe>
                <div className="card-body">
                    <h2 className="card-title">Japan Society NYC</h2>
                    <p>Learn Japanese at the Japan Society Language Center!</p>
                </div>
            </div>

            
            <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/bOUqVC4XkOY?si=n63YQZk9T89FgnX4"
                    title="Learn How to count in Japanese"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="w-full h-48"
                ></iframe>
                <div className="card-body">
                    <h2 className="card-title">Japan Society NYC</h2>
                    <p>Learn How to count in Japanese!</p>
                </div>
            </div>

            
            <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
                <iframe width="500" height="315" src="https://www.youtube.com/embed/JnoZE51WZg4?si=XsJlU1yAqJ1VHjcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-2xl w-full h-48'></iframe>
                <div className="card-body">
                    <h2 className="card-title">Japan Society NYC</h2>
                    <p>Learn Japanese Days of the Week and Days of the Month !</p> 
                </div>
            </div>
           
            <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
                <iframe width="500" height="315" src="https://www.youtube.com/embed/k74yjmfFb_A?si=LgDbGgj45y0CTWzD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-2xl w-full h-48'></iframe>
                <div className="card-body">
                    <h2 className="card-title">Japan Society NYC</h2>
                    <p>Learn Japanese Going to a Destination!</p> 
                </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
                <iframe width="500" height="315" src="https://www.youtube.com/embed/KUIWRsVZZZA?si=ZlxZS0dTxEqjL_BH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-2xl w-full h-48'></iframe>
                <div className="card-body">
                    <h2 className="card-title">Japan Society NYC</h2>
                    <p>Learn 4 Verbs (Nomimasu, Tabemasu, Mimasu, Kikimasu)!</p> 
                </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
                <iframe width="500" height="315" src="https://www.youtube.com/embed/ZGGufccTLso?si=kM-BSgKmX-ZEzT5f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-2xl w-full h-48'></iframe>
                <div className="card-body">
                    <h2 className="card-title">Japan Society NYC</h2>
                    <p>Learn Japanese To do (verb)!</p> 
                </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
                <iframe width="500" height="315" src="https://www.youtube.com/embed/W0n-ODPwtzA?si=qvV3Fu_lm9syD3Fv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-2xl w-full h-48'></iframe>
                <div className="card-body">
                    <h2 className="card-title">Japan Society NYC</h2>
                    <p>Learn Japanese To give & To Receive!</p> 
                </div>
            </div>
        </div>
            </div>
            
            <button
                className="fixed bottom-4 right-4 p-3 bg-pink-600 text-white rounded-full shadow-lg 
                           hover:bg-pink-400 focus:ring-2 focus:ring-blue-300 transition-all 
                           sm:bottom-6 sm:right-6"
                onClick={() => navigate('/lessons')}
            >
                Learn Vocabularies
            </button>
        </div>
    );
};

export default Tutorials;
