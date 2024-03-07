"use client";
import Link from 'next/link';
import React from 'react';

const ClickableOptions = () => {
    const [active, setActive] = React.useState('Overview');

    return (
        <div className='flex items-center overflow-x-auto gap-8 w-full bg-transparent border-b-2 border-gray-300'>
            <Link href="#" className={`py-3 tablet:text-base text-xs border-b-4 font-bold whitespace-nowrap ${active === 'Overview' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-700'}`} onClick={() => setActive('Overview')}>Overview</Link>
            <Link href="#" className={`py-3 tablet:text-base text-xs border-b-4 font-bold whitespace-nowrap ${active === 'Fundamentals' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-700'}`} onClick={() => setActive('Fundamentals')}>Fundamentals</Link>
            <Link href="#" className={`py-3 tablet:text-base text-xs border-b-4 font-bold whitespace-nowrap ${active === 'News Insights' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-700'}`} onClick={() => setActive('News Insights')}>News Insights</Link>
            <Link href="#" className={`py-3 tablet:text-base text-xs border-b-4 font-bold whitespace-nowrap ${active === 'Sentiments' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-700'}`} onClick={() => setActive('Sentiments')}>Sentiments</Link>
            <Link href="#" className={`py-3 tablet:text-base text-xs border-b-4 font-bold whitespace-nowrap ${active === 'Team' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-700'}`} onClick={() => setActive('Team')}>Team</Link>
            <Link href="#" className={`py-3 tablet:text-base text-xs border-b-4 font-bold whitespace-nowrap ${active === 'Technicals' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-700'}`} onClick={() => setActive('Technicals')}>Technicals</Link>
            <Link href="#" className={`py-3 tablet:text-base text-xs border-b-4 font-bold whitespace-nowrap ${active === 'Tokenomics' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-700'}`} onClick={() => setActive('Tokenomics')}>Tokenomics</Link>
        </div>
    );
};

export default ClickableOptions;
