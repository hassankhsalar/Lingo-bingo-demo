import React from 'react';

const Card = ({ word, meaning, pronunciation, partOfSpeech, difficulty, lessonNo, whenToSay, example }) => {
    const playPronunciation = () => {
        const utterance = new SpeechSynthesisUtterance(pronunciation);
        utterance.lang = "ja-JP"; // Japanese language code
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div 
            className={`p-4 border rounded-md shadow-md bg-white flex flex-col justify-between ${
                difficulty === 'easy' ? 'bg-green-300' : 
                difficulty === 'medium' ? 'bg-yellow-200' : 
                'bg-red-200'
            }`}
            style={{ height: '100%' }}
        >
            <div className='text-slate-700'>
                <h2 className="text-xl font-bold ">{word}</h2>
                <p><strong>Pronunciation:</strong> {pronunciation}</p>
                <p><strong>Meaning:</strong> {meaning}</p>
                <p><strong>Part of Speech:</strong> {partOfSpeech}</p>
                <p><strong>Lesson:</strong> {lessonNo}</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <button 
                    className="p-2 bg-blue-500 text-white rounded"
                    onClick={() => alert(`${word} (${pronunciation})\n${whenToSay}\nExample: ${example}`)}
                >
                    When to Say
                </button>
                <button 
                    className="p-2 bg-green-500 text-white rounded"
                    onClick={playPronunciation}
                >
                    Play Pronunciation
                </button>
            </div>
        </div>
    );
};

export default Card;
