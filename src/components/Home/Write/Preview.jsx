import React, { useEffect, useRef, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import ReactQuill from 'react-quill-new'
import { TagsInput } from "react-tag-input-component";

const Preview = ({setPublish,description, title}) => {

    const imageref = useRef(null)
    const [imageUrl, setImageUrl] = useState("")
    const [desc, setDesc] = useState('')
    const [tags, setTags] = useState([])
    const [preview, setPreview] = useState({
        title : '',
        photo : '',
    })


    useEffect(() => {
       if(title || description){
        setPreview({...preview,title : title})
        setDesc(description)
       }else{
        setPreview({...preview,title : ""})
        setDesc("")
       }
    },[title, description])


    const handleClick = () => {
        imageref.current.click()
    }

    return (
        <section className='absolute inset-0 bg-white z-30'>
            <div className="size !my-[2rem]">
                <span 
                onClick={() => setPublish(false)}
                className='absolute !right-[6rem] md:right-5rem !top-[3rem] text-2xl cursor-pointer'>
                    <LiaTimesSolid />
                </span>
                <div className='!mt-[8rem] flex flex-col md:flex-row gap-10'>
                    <div className='!flex-[1]'>
                        <h3>Story Preview</h3>
                        <div
                            style={{ backgroundImage: `url(${imageUrl})` }}
                            onClick={handleClick} className='w-full h-[200px] object-cover bg-gray-100 my-3 grid
                                place-items-center cursor-pointer bg-cover bg-no-repeat'>
                            {!imageUrl && "Add Image"}
                        </div>
                        <input onChange={(e) => {
                            setImageUrl(URL.createObjectURL(e.target.files[0]));
                            setPreview({...preview, photo : e.target.files[0]});
                        } }
                         ref={imageref} type="file" hidden />
                        <input
                            type="text"
                            placeholder='Title'
                            className='text-3xl border-b border-gray-300 py-2 
                            !md:text-5xl outline-none w-full font-serif placeholder:text-gray-300'
                            value={preview.title}
                            onChange={(e) => setPreview({...preview, title : e.target.value})}
                        />

                        <ReactQuill theme='bubble'
                            value={desc}
                            onChange={setDesc}
                            placeholder='Tell Your Story...'
                            className='py-5 border-b border-gray-300' />

                        <p className='texxt-gray-500 pt-4 text-sm'>
                            <span className='font-bold'>Note:</span>Changes here will affect how your story appears in 
                            public places like Medium's
                             homepage and in subscribers' inboxes - not the contents of the story itself.
                        </p>
                    </div>
                    <div className='!flex-[1] flex flex-col gap-4 mb-5 md:mb-0'>
                        <h3 className='text-2xl'>Publishing to: 
                            <span className='font-bold capitalize'>Milad Tech</span>
                        </h3>
                        <p>Add or change topics up to 5 so readers know what your story is about</p>

                        <TagsInput value={tags} onChange={() => setTags}/>
                        <button className='btn !bg-green-800 !w-fit !text-white !rounded-full'> Publish Now</button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preview
