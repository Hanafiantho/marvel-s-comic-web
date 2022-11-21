export type comicThumbnail = {
    extension: string
    path: string
}

export type comicDate = {
    type:string
    date:string
}

export type comicCreatorItem = {
    name:string
    resourceURI:string
    role:string
}

export type comicCreators = {
    available: number
    collectionURI: string
    items: Array<comicCreatorItem>
}

export type comicUrl = {
    type:string
    url:string
}

export type ComicData = {
    id: number
    title: string
    thumbnail: comicThumbnail
    dates: Array<comicDate>
    creators: comicCreators
    urls: Array<comicUrl>
}