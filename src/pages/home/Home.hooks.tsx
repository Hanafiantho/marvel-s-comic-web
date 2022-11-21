import {useState, useEffect} from "react"
import {CharacterData} from "../../types"
import {CharacterService} from "../../services"

export const useModelCharacters = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<Array<CharacterData>>([])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1500,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
        ]
    };

    const fethCharacter = async() => {
        setLoading(true)
        const res = await CharacterService.getCharacters()
        
        console.log(res);
        if (res.code === 200) {
            setData(res.data.results)
        } else {
            
        }
        setLoading(false)
    }

    useEffect(() => {
        fethCharacter()
    }, [])

    return {
        loading,
        data,
        settings
    }
}