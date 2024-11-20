import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ word, meaning, pronunciation, partOfSpeech, difficulty, lessonNo, whenToSay, example }) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

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
            <div className="flex gap-2 mt-4">
                {/* View More Button */}
                <button 
                    className="p-2 bg-blue-400 text-white rounded"
                    onClick={() => navigate(`/lessons`)}
                >
                    View More
                </button>

                {/* When to Say Button */}
                <button 
                    className="p-2 bg-green-500 text-white rounded"
                    onClick={() => setIsModalOpen(true)}
                >
                    When to Say
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)} // Close modal when clicking outside
                >
                    <div 
                        className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        <h2 className="text-xl font-bold mb-2">{word} - When to Say</h2>
                        <p className="mb-4">{whenToSay}</p>
                        <p className="italic">Example: {example}</p>
                        <button 
                            className="mt-4 p-2 bg-red-500 text-white rounded w-full"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
