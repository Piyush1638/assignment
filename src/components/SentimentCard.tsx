import React from 'react'

const SentimentCard = ({color,content,icon}:{color: any, content: string, icon: any}) => {
  return (
    <div className={`${color} rounded-md flex items-center gap-3 px-2 py-2 w-full`}>
        <div className='bg-sky-600 px-2 py-2 rounded-full text-white'>
            {icon}
        </div>
        <div className=''>
            <p>{content}</p>
        </div>

    </div>
  )
}

export default SentimentCard