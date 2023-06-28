import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

import './WelcomeMessage.scss';

export const WelcomeMessage = () => {
    const { language } = useContext(LanguageContext);

    const getMessage = () => {
        switch(language) {
            case 'German':
                return 'Hallo Welt';
            case 'Francais':
                return 'Bonjour le monde';
            case 'English':
                return 'Hello world';
            default:
                return '';
        }
    }

    return(
        <div className='WelcomeMessage'>
            <h2>{getMessage()}</h2>
        </div>
    )
}