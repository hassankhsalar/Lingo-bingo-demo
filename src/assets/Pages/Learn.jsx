import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card';
 

const Learn = () => {
    const data = useLoaderData(); 
    

    return (
        <div>
            <div>
            <h1 className='text-3xl font-bold text-center pb-5'>Lets Learn</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {data.map((item) => (
                <Card key={item.id} 
                word={item.word} 
                meaning={item.meaning} 
                pronunciation={item.pronunciation}
                partOfSpeech={item.part_of_speech}
                difficulty={item.difficulty}
                lessonNo={item.lesson_no}
                whenToSay={item.when_to_say}
                example={item.example}></Card>
            ))}
        </div>
        </div>
    );
};

export default Learn;
