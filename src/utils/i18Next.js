import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { Cookies } from 'react-cookie'

import en from '../json/en.json'
import mr from '../json/mr.json'
import { constants } from "./constants";

const cookie=new Cookies()

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		mr: {
			translation: mr,
		},
	},
	lng: cookie.get(constants.REACT_18_LANGUAGE_KEY) || "mr",
});

export default i18next;