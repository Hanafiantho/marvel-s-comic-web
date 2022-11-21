import {useState, useEffect} from "react"
import {ComicData} from "../../types"
import {ComicsService} from "../../services"
import {URLParams} from "../../helpers/URLParams"

type Params = {
    offset: number
    limit: number
    characters: number | null
}

export const useModelComics = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<{
        count: number
        limit: number
        offset: number
        results: Array<ComicData>
        total: number
    }>({
        count: 0,
        limit: 20,
        offset: 0,
        results: [],
        total: 0
    })
    const [params, setParams] = useState<Params>({
        limit: 20,
        offset: 0,
        characters: URLParams("id") !== null ? parseInt(URLParams("id") || "") : null
    })

    const fethComics = async(queryParams:Params) => {
        setLoading(true)
        const res = await ComicsService.getComics(queryParams)
        
        if (res.code === 200) {
            setData({
                ...res.data, 
                count: data.count + res.data.count,
                results:[...data.results, ...res.data.results]
            })
        } else {
            
        }
        setLoading(false)
    }

    useEffect(() => {
        fethComics(params)
    }, [params])

    const handleLoadMore = () => {
        setParams({...params, offset: params.offset + params.limit})
    }

    return {
        loading,
        data,
        handleLoadMore
    }
}