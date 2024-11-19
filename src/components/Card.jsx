import React from 'react';

const Card = ({ word, meaning, pronunciation, partOfSpeech, difficulty, lessonNo, whenToSay, example }) => {
    return (
        <div 
            className={`p-4 border rounded-2xl shadow-md bg-white flex flex-col justify-between ${
                difficulty === 'easy' ? 'bg-green-300' : 
                difficulty === 'medium' ? 'bg-yellow-200' : 
                'bg-red-200'
            }`}
            style={{ height: '100%' }} // Ensures consistent card height
        >
            <div>
                <h2 className="text-xl font-bold">{word}</h2>
                <p><strong>Pronunciation:</strong> {pronunciation}</p>
                <p><strong>Meaning:</strong> {meaning}</p>
                <p><strong>Part of Speech:</strong> {partOfSpeech}</p>
                <p><strong>Lesson:</strong> {lessonNo}</p>
            </div>
            <button 
                className="mt-4 p-2 bg-blue-400 text-white rounded"
                onClick={() => alert(`${word} (${pronunciation})\n${whenToSay}\nExample: ${example}`)}
            >
                When to Say
            </button>
        </div>
    );
};

export default Card;
