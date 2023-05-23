import Translate from "translate"
import { Cookies } from 'react-cookie'
import { constants } from "../utils/constants";

export const translator=async(text)=>{
    const cookie = new Cookies();

    try {
        const res = await Translate(text,{from:constants.DEFAULT_LANGUAGE,to:cookie.get(constants.TRANSLATE_LANGUAGE_KEY)})
        console.log('res', res)
        return res;
    } catch (error) {
        return "Something went wrong"
    }
}