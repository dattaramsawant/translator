import React, { useEffect, useState } from 'react'
import styles from '../styles/googleTranslator.module.css'
import { Cookies } from 'react-cookie'
import { constants } from '../utils/constants'
import { translator } from '../functions/translator'

const GoogleTranslator = () => {
    const cookie=new Cookies()

    const [value,setValue]=useState("")
    const [translatedValue,setTranslatedValue]=useState('')
    const [selectedTranslateLanguage,setSelectedTranslateLanguage]=useState(cookie.get(constants.TRANSLATE_LANGUAGE_KEY) || constants.DEFAULT_LANGUAGE)
    const [multiPara,setMultiPara]=useState([])

    const [defaultPara,setDefaultPara] = useState("Now you know what dummy text is, let’s learn about its usefulness. Some people say that they don’t need to use a dummy text generator to deliver a web design project to the customer. Even though this might be true, the effect that the final project will produce on the client won’t be as satisfactory as in the case of one with included filler content.")

    const handleChange=async(e)=>{
        setValue(e.target.value)
    }

    const handleSubmit=async()=>{
        const res=await translator(value)
        setTranslatedValue(res)
        
        setValue("")
    }

    const handleOptionChange=(e)=>{
        setSelectedTranslateLanguage(e.target.value)
        cookie.set(constants.TRANSLATE_LANGUAGE_KEY,e.target.value)
    }

    const defaultTranslate=async(text)=>{
        const res=await translator(text)
        setDefaultPara(res)
    }

    useEffect(()=>{
        defaultTranslate(defaultPara)
    },[selectedTranslateLanguage])

    useEffect(()=>{
        if(translatedValue){
            setMultiPara(prev=>([...prev,translatedValue]))    
        }
    },[translatedValue])

    return (
        <div className={styles.mainContainer}>
            <div className={styles.languageDropdown}>
                <label
                    className={styles.label}
                    htmlFor='dropdown'
                >
                    Select Language
                </label>
                <select
                    id='dropdown'
                    className={styles.dropdown}
                    onChange={handleOptionChange}
                    value={selectedTranslateLanguage}
                >
                    <option value={"en"}>English</option>
                    <option value={"hi"}>Hindi</option>
                    <option value={"mr"}>Marathi</option>
                    <option value={"gu"}>Gujrati</option>
                </select>
            </div>
            <div className={styles.formContainer}>
                <textarea 
                    className={styles.textArea}
                    onChange={handleChange}
                    value={value}
                    placeholder='Enter dummy text'
                />
                <button
                    className={styles.submitButton}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
            <p>{defaultPara}</p>
            {multiPara.map((data,i)=>{
                return(
                    <p key={i}>
                        {data}
                    </p>
                )
            })}
        </div>
    )
}

export default GoogleTranslator