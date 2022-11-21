import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useModelCharacters} from "./Characters.hooks"
import {CharacterBox, Loading, LoadMoreButton} from "../../components"
import {CharacterData} from "../../types"

const Characters: React.FC = () => {
    const navigate = useNavigate();
    const {
        loading,
        data,
        handleLoadMore
    } = useModelCharacters()

    return (
        <React.Fragment>
            <div className='max-w-6xl mx-auto p-2.5'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {data.results.map((datum:CharacterData, key) => (
                        <CharacterBox 
                            key={key}
                            name={datum.name}
                            imgPath={datum.thumbnail.path}
                            imgExtension={datum.thumbnail.extension}
                            onClick={() => navigate(`/comics?id=${datum.id}`)}
                        />
                    ))}
                </div>
            </div>
            {loading ? <Loading /> : data.total !== data.count && (
                <div className='text-center'>
                    <LoadMoreButton 
                        onClick={handleLoadMore}
                    />
                </div>
            )}
        </React.Fragment>
    )
}

export default Characters