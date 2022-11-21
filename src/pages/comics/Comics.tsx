import React from 'react'
import moment from "moment"
import {useModelComics} from "./Comics.hooks"
import {ComicData} from "../../types"
import {ComicBox, Loading, LoadMoreButton} from "../../components"
import {FindValueArrayOfObject} from '../../helpers/FindValueArrayOfObject'

const Comics:React.FC = () => {
    const {
        loading,
        data,
        handleLoadMore
    } = useModelComics()

    return (
        <React.Fragment>
            <div 
                className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2.5'
            >
                {data.results.map((datum:ComicData, key) => (
                    <div key={key}>
                        <ComicBox
                            title={datum.title}
                            imgPath={datum.thumbnail.path}
                            imgExtension={datum.thumbnail.extension}
                            publishedDate={
                                FindValueArrayOfObject(datum.dates, "type", "onsaleDate", "date", "") !== "" ? (
                                    moment(FindValueArrayOfObject(datum.dates, "type", "onsaleDate", "date", "")).format("MMMM DD, YYYY")
                                ) : (
                                    "-"
                                )
                            }
                            writer={FindValueArrayOfObject(datum.creators.items, "role", "writer", "name", "-")}
                            detailURL={FindValueArrayOfObject(datum.urls, "type", "detail", "url", "#")}
                        />
                    </div>
                ))}
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

export default Comics