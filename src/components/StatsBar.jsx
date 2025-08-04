import React from 'react';

// Updated stats data
const statsData = [
    { value: '2', label: 'Fellows' },
    { value: '31', label: 'Full Members' },
    { value: '81', label: 'Associate/Graduate Members' },
    { value: '102', label: 'Student Members' },
];

// Individual stat box
const StatItem = ({ value, label }) => (
    <div className="text-center transform hover:scale-105 transition duration-300 ease-in-out">
        <p className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            {value}
        </p>
        <p className="mt-2 text-xs sm:text-sm font-semibold text-[#2c5b43] uppercase tracking-widest">
            {label}
        </p>
    </div>
);

const StatsBar = () => {
    return (
        <section className="bg-[#bde0d2] w-full py-12" style={{ fontFamily: 'Montserrat' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
                    {statsData.map((stat) => (
                        <StatItem key={stat.label} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
