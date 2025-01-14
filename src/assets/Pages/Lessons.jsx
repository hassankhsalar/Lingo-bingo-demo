import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LessonCards from '../../components/LessonCards';


const Lessons = ({ loaderData }) => {
    const navigate = useNavigate();
    const [selectedLesson, setSelectedLesson] = useState(null);

   
    const filteredData = selectedLesson
        ? loaderData.filter((item) => item.lesson_no === selectedLesson)
        : loaderData;

    return (
        <div className="relative">
            <div>
                <h1 className="text-3xl font-bold text-center pb-10">Lessons</h1>
            </div>

           
            <div className="flex justify-between flex-wrap gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6].map((lesson) => (
                    <button
                        key={lesson}
                        className={`btn w-20 border-2 ${
                            selectedLesson === lesson ? 'bg-sky-500 text-white' : 'border-sky-500'
                        }`}
                        onClick={() => setSelectedLesson(lesson)}
                    >
                        Lesson {lesson}
                    </button>
                ))}
               
                <button
                    className={`btn w-20 border-2 ${
                        selectedLesson === null ? 'bg-sky-500 text-white' : 'border-sky-500'
                    }`}
                    onClick={() => setSelectedLesson(null)}
                >
                    All
                </button>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {filteredData.map((item) => (
                    <LessonCards
                    key={item.id}
                        word={item.word}
                        meaning={item.meaning}
                        pronunciation={item.pronunciation}
                        partOfSpeech={item.part_of_speech}
                        difficulty={item.difficulty}
                        lessonNo={item.lesson_no}
                        whenToSay={item.when_to_say}
                        example={item.example}/>
                ))}
            </div>

            
            <button
                className="fixed bottom-4 right-4 p-3 bg-pink-600 text-white rounded-full shadow-lg 
                            hover:bg-pink-400 focus:ring-2 focus:ring-blue-300 transition-all sm:bottom-6 sm:right-6"
                onClick={() => navigate('/learn')}
            >
                Back to Learning
            </button>
        </div>
    );
};

export default Lessons;
