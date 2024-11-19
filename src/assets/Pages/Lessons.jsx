import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import LessonCards from '../../components/LessonCards';

const Lessons = () => {
    const data = useLoaderData();
    const [selectedLesson, setSelectedLesson] = useState(null); // State to store the selected lesson

    // Filter data based on selected lesson or show all if null
    const filteredData = selectedLesson
        ? data.filter((item) => item.lesson_no === selectedLesson)
        : data;

    return (
        <div>
            {/* Lesson Filter Buttons */}
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
                {/* Show All Button */}
                <button
                    className={`btn w-20 border-2 ${
                        selectedLesson === null ? 'bg-sky-500 text-white' : 'border-sky-500'
                    }`}
                    onClick={() => setSelectedLesson(null)}
                >
                    All
                </button>
            </div>

            {/* Vocabulary Cards */}
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
                        example={item.example}
                    />
                ))}
            </div>
        </div>
    );
};

export default Lessons;
