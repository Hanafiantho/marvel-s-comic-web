import React from 'react'

type Props = {
    imgPath: string
    imgExtension: string
    name: string
    onClick?: () => void
}

const CharacterBox: React.FC<Props> = (props) => {
    return (
        <div 
            className='h-80 border-2 border-black shadow-lg cursor-pointer relative duration-500 ease-in-out transform hover:scale-105'
            onClick={props.onClick}
        >
            <img 
                src={props.imgPath + "." + props.imgExtension} 
                alt={`${props.name}-thumbnail`} 
                className="w-full h-full"
            />
            <div
                className='absolute bottom-0 right-0 bg-white p-1 border-2 border-black font-semibold italic'
            >
                {props.name}
            </div>
        </div>
    )
}

export default CharacterBox