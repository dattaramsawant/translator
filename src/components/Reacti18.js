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

			<p>{t("i18next is an internationalization-framework written in and for JavaScript. But it's much more than that! i18next goes beyond just providing the standard i18n features such as (plurals, context, interpolation, format). It provides you with a complete solution to localize your product from web to mobile and desktop.")}</p>
			<p>{t("how are you?")}</p>
		</div>
	);
}

export default Reacti18