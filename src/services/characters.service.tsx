import Axios from "axios"
import {Md5} from 'ts-md5'

export default class CharacterService {
    static async getCharacters(params?:any) {
      try {
        const url = `${process.env.REACT_APP_BASE_URL}/characters`;
        const ts = new Date().getTime()
        const apikey = process.env.REACT_APP_PUBLIC_API_KEY
        const hash = Md5.hashStr(`${ts}${process.env.REACT_APP_PRIVATE_API_KEY}${apikey}`)
  
        const res = await Axios.get(url, { 
            params: {
                ...params,
                ts,
                apikey,
                hash
            }
        });
  
        return res.data;
      } catch (error:any) {
        return error.response;
      }
    }
}