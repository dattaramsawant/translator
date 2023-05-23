import React from 'react'
import { useTranslation } from "react-i18next";
import { Cookies } from 'react-cookie'
import { constants } from '../utils/constants';

const Reacti18 = () => {
    const { t, i18n } = useTranslation();

    const cookie=new Cookies()

	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
        cookie.set(constants.REACT_18_LANGUAGE_KEY)
	};

	return (
		<div>
			<button onClick={() => handleChangeLng("en")}>English</button>
			<button onClick={() => handleChangeLng("mr")}>Marathi</button>

			<p>{t("hello")}</p>
			<p>{t("how are you?")}</p>
		</div>
	);
}

export default Reacti18