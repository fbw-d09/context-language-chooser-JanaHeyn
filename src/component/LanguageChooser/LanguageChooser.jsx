import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

import './LanguageChooser.scss';

export const LanguageChooser = () => {

    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return(
        <div className='LanguageChoose'>
            <select
                className='LanguageChoose__selected'
                id='language-selected' 
                value={language} 
                onChange={handleLanguageChange}
            >
                
                <option value='German'>🇩🇪 Deutsch</option>
                <option value='Francais'>🇨🇵️ Francais</option>
                <option value='English'>🇬🇧️ English</option>

            </select>
        </div>
    )
}