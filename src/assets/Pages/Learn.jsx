import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card';
 // Assuming Card is in the components folder

const Learn = () => {
    const data = useLoaderData(); // Fetch data from the loader
    console.log(data);

    return (
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
    );
};

export default Learn;
