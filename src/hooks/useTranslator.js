import React, { useState } from 'react'
import Translate from 'translate'

const useTranslator = () => {
    const [translator,setTransalator]=useState("")

    const onTranslate=async(text)=>{
        console.log('text', text)
        try{
            const res =  await Translate(text,{to:'hi'})
            setTransalator(res)
        }catch(err){
            setTransalator('')
        }
    }

    return [translator,onTranslate]
}

export default useTranslator