import {useState, useEffect} from "react"
import {CharacterData} from "../../types"
import {CharacterService} from "../../services"

type Params = {
    offset: number
    limit: number
}

export const useModelCharacters = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<{
        count: number
        limit: number
        offset: number
        results: Array<CharacterData>
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
        offset: 0
    })

    const fethCharacter = async(queryParams:Params) => {
        setLoading(true)
        const res = await CharacterService.getCharacters(queryParams)
        
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
        fethCharacter(params)
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