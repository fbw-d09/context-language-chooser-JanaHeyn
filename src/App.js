import React, { useState } from 'react';

import { Header, Content } from './component';

import { LanguageContext } from './LanguageContext';

import './App.scss';

// Hallo Welt
// Bonjour le monde
// Hello world

/* const languageArr = [
    { 
        id: 1,
        flag: '🇩🇪️',
        language: 'German'
    },
    { 
        id: 2,
        flag: '🇨🇵️',
        language: 'Francais'
    },
    { 
        id: 3,
        flag: '🇬🇧️',
        language: 'English'
    }
] */

const App = () => {

    const [ language, setLanguage ] = useState('Francais');

    const value = { language, setLanguage };

    return (
        <LanguageContext.Provider value={value}>

            <div className='App'>
                <Header />
                <Content />
            </div>
            
        </LanguageContext.Provider>
    )
}

export default App
