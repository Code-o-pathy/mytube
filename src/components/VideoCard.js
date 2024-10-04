import React from 'react'

const VideoCard = ({data}) => {
    // console.log(data)

  return data &&(
    <div className='shadow-lg m-2   bg-gray-200 w-64 rounded-lg p-2'>
        <img src={data.snippet.thumbnails.medium.url} alt='thumbnail' className=' rounded-md '/>
        <h3 className='font-bold line-clamp-2 mt-1'>{data.snippet.localized.title}</h3>
        <h5 className='text-sm mt-2 mb-2'>{data.snippet.channelTitle}</h5>
        <h6>{data.statistics.viewCount} views</h6>  

    </div>
  )
}

export default VideoCard