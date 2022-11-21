import React from 'react'
import {useNavigate} from 'react-router-dom'
import Slider from "react-slick"
import {useModelCharacters} from "./Home.hooks"
import {CharacterBox, Loading} from "../../components"
import {CharacterData} from "../../types"

const Home: React.FC = () => {
    const navigate = useNavigate();
    const {
        loading,
        data,
        settings
    } = useModelCharacters()

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <React.Fragment>  
            <div className='pb-10 pt-3 px-3 bg-main-black'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className='pt-4'>
                        <p className='text-white font-extrabold text-5xl italic text-center md:text-left md:w-9/12 mb-3 leading-tight'>
                            Welcome to Marvel's Comic Website
                        </p>
                        <p className='text-red-600 italic font-bold text-xl text-center md:text-left'>
                            choose your character!
                        </p>
                    </div>
                    <div>
                        <Slider
                            {...settings}
                        >
                            {data.map((datum:CharacterData, key) => (
                                <div className='px-2'>
                                    <CharacterBox 
                                        key={key}
                                        name={datum.name}
                                        imgPath={datum.thumbnail.path}
                                        imgExtension={datum.thumbnail.extension}
                                        onClick={() => navigate(`/comics?id=${datum.id}`)}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto p-2.5'>
                <div>
                    <div className='text-black font-bold text-2xl italic border-b-2 border-black py-2'>
                        Marvel's Characters
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5'>
                        {data.slice(0, 8).map((datum:CharacterData, key) => (
                            <CharacterBox 
                                key={key}
                                name={datum.name}
                                imgPath={datum.thumbnail.path}
                                imgExtension={datum.thumbnail.extension}
                                onClick={() => navigate(`/comics?id=${datum.id}`)}
                            />
                        ))}
                    </div>
                    <div className='text-center'>
                        <button 
                            className='border-2 border-black py-2 px-3 font-bold hover:bg-red-600 hover:text-white hover:border-red-600'
                            onClick={() => navigate(`/characters`)}
                        >
                            See More
                        </button>
                    </div>
                </div>      
            </div>
        </React.Fragment>
    )
}

export default Home