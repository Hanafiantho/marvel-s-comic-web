import React, {useState} from 'react'

type Props = {
    title: string
    imgPath: string
    imgExtension: string
    publishedDate: string
    writer?: string
    detailURL: string
}

const ComicBox: React.FC<Props> = (props) => {
    const [modal, setModal] = useState<boolean>(false)

    return (
        <React.Fragment>
            <div
                className='p-3 duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-red-600 cursor-pointer'
                onClick={() => setModal(true)}
            >
                <div className='h-72 mb-3'>
                    <img 
                        src={props.imgPath + "." + props.imgExtension} 
                        alt={`${props.title}-thumbnail`} 
                        className="w-full h-full"
                    />
                </div>
                <div
                    className='text-center italic font-semibold'
                >
                    {props.title}
                </div>
            </div>

            {modal && (
                <div className='z-20 w-screen h-screen absolute top-0 left-0 grid grid-cols-1 content-center justify-items-center'>
                    <div className='z-30 opacity-60 bg-black w-full h-full absolute' />
                    <div className='bg-main-black text-white p-5 z-50 opacity-100 w-1/2 grid grid-cols-3 relative'>
                        <div 
                            className='absolute top-1 right-2 cursor-pointer'
                            onClick={() => setModal(false)}
                        >
                            X
                        </div>
                        <div className="">
                            <img 
                                src={props.imgPath + "." + props.imgExtension} 
                                alt={`${props.title}-thumbnail`} 
                                className="w-full h-full"
                            />
                        </div>
                        <div className="col-span-2 pl-5">
                            <div className='text-2xl font-bold italic mb-5'>{props.title}</div>
                            <div className='mb-4'>
                                <div className='text-lg font-semibold'>Published:</div>
                                <div>
                                    {props.publishedDate}
                                </div>
                            </div>
                            <div className='mb-10'>
                                <div className='text-lg font-semibold'>Writer:</div>
                                <div>
                                    {props.writer}
                                </div>
                            </div>
                            <div>
                                <a href={props.detailURL} target="_blank" rel="noreferrer">
                                    <button className='bg-white py-1.5 px-5 text-black font-semibold hover:bg-red-600 hover:text-white'>
                                        Detail
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default ComicBox