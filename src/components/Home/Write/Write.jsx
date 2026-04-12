import React, { useState } from 'react'
import ReactQuill from 'react-quill-new'; // Just change the import name
import Preview from './Preview';
import { Blog } from '../../../Context/Context';

const Write = () => {

  const [description, setDescription] = useState('')
  const {publish,setPublish} = Blog();
  const [title, setTitle] = useState("")

  return (

    <section className="size mt-[8rem] flex flex-col ">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder='Title'
        className='text-4xl md:text-5xl outline-none w-full font-serif placeholder:text-gray-300'
      />

      <ReactQuill 
        theme='bubble' 
        value={description} 
        onChange={setDescription}
        className='write my-5'
        placeholder='Tell Your Story...' 
      />

        <div className={`${publish ? "visible opacity-100" : 'invisible opacity-0'} 
        transition-all duration-200`}>
        <Preview setPublish={setPublish} 
          description={description} 
          title={title} 
        />
        </div>

    </section>
  )
}

export default Write