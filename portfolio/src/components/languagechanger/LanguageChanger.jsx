// import React from 'react'
// import { useTranslation } from 'react-i18next'

// import './LanguageChanger.scss'

// function LanguageChanger() {
//     const { i18n } = useTranslation()

//     const changeLanguage = (lang) => {
//         i18n.changeLanguage(lang)
//     }


//     return (
//         <div className='language-changer-main-div'>
//             <div className={`language-item ${i18n.language.includes('en') ? 'selected' : 'unselected'}`} onClick={() => changeLanguage('en')}>
//                 <p>EN</p>
//             </div>
//             <div className={`language-item ${i18n.language.includes('pt') ? 'selected' : 'unselected'}`} onClick={() => changeLanguage('pt')}>
//                 <p>PT</p>
//             </div>
//         </div>
//     )
// }

// export default LanguageChanger