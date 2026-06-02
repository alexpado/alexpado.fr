/**
 * Simple CSS-based translation solution.
 *
 * I don't know if it has a huge impact on SEO, but instead of relying on heavy / cumbersome libraries on a static
 * website, I chose to rely on a simple CSS trick. It only uses a tiny bit of JavaScript, which is very performance
 * efficient.
 *
 * The basic principle is very simple: If the lang attribute on the html tag is 'en', hide every underlying tag having
 * their own lang attribute set to 'fr'. If instead, the lang attribute is set to 'fr', every tag having 'en' as lang
 * will be hidden.
 *
 * This works and doesn't break even with JavaScript disabled: It will just diplay the default language that is being
 * used in the original HTML file.
 *
 * This is fine for now as I only support two languages (toggle), but this would not scale well at all.
 */

"use strict";

const french = { shortCode: 'fr', fullName: 'Français', flag: '🇫🇷' };
const english = { shortCode: 'en', fullName: 'English', flag: '🇬🇧' };

/**
 * @param {{shortCode: string, fullName: string, flag: string}} language
 * @returns {HTMLButtonElement}
 */
function createLanguageButton(language) {
    const button = document.createElement('button');
    button.classList.add('language-button');
    button.innerText = `${language.flag} ${language.fullName}`;
    button.title = language.fullName;

    button.setAttribute('lang', language.shortCode);

    button.addEventListener('click', () => useLanguage(language.shortCode));

    return button;
}

/**
 * @param {string} shortCode
 */
function useLanguage(shortCode) {
    document.documentElement.setAttribute('lang', shortCode);
    localStorage.setItem('language', shortCode);
    updateButtonVisibility(shortCode);
}

/**
 * Toggles visibility classes on buttons based on active language
 * @param {string} activeLang
 */
function updateButtonVisibility(activeLang) {
    const buttons = document.querySelectorAll('.language-button');
    buttons.forEach(button => {
        if (button.getAttribute('lang') === activeLang) {
            button.style.display = 'none';
        } else {
            button.style.display = 'inline-block';
        }
    });
}

(() => {
    const frenchButton = createLanguageButton(french);
    const englishButton = createLanguageButton(english);

    document.body.append(frenchButton, englishButton);
    updateButtonVisibility(localStorage.getItem('language') ?? 'en');
})();