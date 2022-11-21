import React from 'react'

type Props = {
    onClick: () => void
}

const LoadMoreButton: React.FC<Props> = ({onClick}) => {
    return (
        <button 
            className="p-3 font-bold hover:text-red-600 hover:italic" 
            onClick={onClick}
        >
            Load More...
        </button>
    )
}

export default LoadMoreButton