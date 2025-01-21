// Stupidly simple code to support multiple language
"use strict";

const languages = [
    {
        shortCode: 'fr',
        fullName: 'Français',
        flag: '🇨🇵'
    },
    {
        shortCode: 'en',
        fullName: 'English',
        flag: '🇬🇧'
    }
];

const translations = {
    en: {
        'landing.header.name': 'alexpado',
        'landing.header.title': 'French Web Developer',
        'intro.title': 'Web developer on paper, but there’s more to it...',
        'intro.description.p1': 'Alexandre Padovan — 27 years old',
        'intro.description.p2': 'Eager to learn new tech and language, I often find myself scattering the web without any particular goal just for the sake of “knowing” and “learning”.',
        'intro.description.p3': 'It’s a fact though, on paper I’m a simple web developer, but in reality I can do much more, ranging from full web application to electron applications, without forgetting our beloved Discord bots.',
        'works.title': 'Some of my personal works...',
        'works.tags.extension': 'Browser Extension',
        'works.projects.anisekai': 'Probably my biggest personal project to this day (and the one on which I am the most active), writing a summary here would be quite the challenge. The website part of the project is private as it is a way for me to manage my own library of Japanese TV Shows (anime) with some additional features for Discord. However, the code is open-source and anyone can start contributing or using it.',
        'works.projects.cva': 'When I play, I usually love sharing what I’m playing, but good capture cards are quite costly for just a hobby. So with a relatively cheap capture card and a custom-made software, I am now able to share my games with my friends, both with good video/audio synchronization and low latency !',
        'works.projects.gwc': 'At first a simple spreadsheet, the tool was quickly put in place for a better UI and UX. The website allow players of the game “Genshin Impact” to quickly know how they should manage their premium currency to obtain the in-game content they really want.',
        'works.projects.pixiv': 'This is a browser extension I made after noticing how many time I was sending over multiple Discord channels the same link for a Pixiv Artwork. Using Discord’s Webhooks and this browser extension, it is now possible to quickly share an artwork on multiple channel without ever leaving your favorite web browser.',
        'works.actions.website-en': 'Website',
        'works.actions.website-fr': 'Website (French)',
        'hobbies.title': '... and it’s not only about code.',
        'hobbies.description.p1': 'I have other hobbies than having my head between two lines of code all the time; I play video games but also piano occasionally. I even have few amateur compositions that you can listen on my <a href="https://soundcloud.com/saruwatari-masaki" target="_blank">Soundcloud</a>!',
        'hobbies.description.p2': 'If you want more insight on the genre of music I listen, I recommend giving a try to artists like <b>ARForest</b>, <b>Sakuzyo</b>, <b>Evan Call</b>, <b>Hiroyuki Sawano</b>, <b>Kevin Penkin</b> and finally, <b>Hans Zimmer</b>.',
        'hobbies.description.p3': 'I also love to fiddle around with networking stuff, so much that at home I have an Intel NUC I use as hosting server but also my very own DNS server associated to PiHole !',
        'contact.title': 'Contact Me',
        'contact.download-cv': 'Download CV (French)',
        'footer.signature': 'Made by <b>alexpado</b>',
        'errors.panic': 'Back to Home',
        'errors.404.title': '404 Not Found',
        'errors.404.description': 'Wooops, you got lost.',
        'errors.403.title': '403 Forbidden',
        'errors.403.description': 'You do not have access to this resource.',
        'errors.401.title': '401 Not Authorized',
        'errors.401.description': 'Curiosity Killed the Cat',
        'errors.500.title': '500 Internal Server Error',
        'errors.500.description': 'Ok, something went <b>really</b> wrong there.'
    },
    fr: {
        'landing.header.name': 'alexpado',
        'landing.header.title': 'Développeur Web',
        'intro.title': 'Développeur Web sur papier, mais il y a plus...',
        'intro.description.p1': 'Alexandre Padovan — 27 ans',
        'intro.description.p2': 'Désireux d’apprendre de nouvelles technologies et de nouveaux langages, je me retrouve souvent à parcourir le web sans but particulier simplement pour “savoir” et “apprendre”.',
        'intro.description.p3': 'C’est un fait, sur le papier je suis un simple développeur web, mais en réalité je peux faire beaucoup plus, allant de l’application web complète aux applications Electron, sans oublier nos bots Discord favoris.',
        'works.title': 'Quelques-uns de mes projects personnels...',
        'works.tags.extension': 'Extension Navigateur',
        'works.projects.anisekai': 'Probablement l’un de mes plus gros projet personnel à ce jour (et l’un de ceux sur lequel je suis le plus actif), en écrire un résumé relèverai du défi. La partie web du projet est privée car c’est un moyen pour moi de gérer ma propre librairie de séries Japonaises (anime) avec quelques fonctionnalités en plus pour Discord. Cependant le code est open-source et n’importe qui peut y contribuer ou l’utiliser.',
        'works.projects.cva': 'Lorsque je joue, j’apprécie partager ce que je fais, mais les bonnes cartes de capture sont généralement onéreuses. Donc avec une carte de capture entrée de gamme et un logiciel fait main, je peux désormais partager mes jeux avec une bonne synchronisation video/audio et une faible latence.',
        'works.projects.gwc': 'Un simple tableur au départ, la solution a très vite évolué en application web pour des raisons UI et UX. Le site permet aux joueurs du jeu “Genshin Impact” de connaître rapidement comment ils devront gérer leur monnaie premium en jeu pour pouvoir obtenir le contenu souhaité.',
        'works.projects.pixiv': 'C’est une extension navigateur que j’ai créée après avoir remarqué le nombre de fois ou je partagais le même lien sur plusieurs salons Discord différents. En profitant des Webhooks de Discord et de cette extension, il est désormais possible de partager rapidement un même artwork sur plusieurs salons sans jamais quitter le confort de son navigateur favori.',
        'works.actions.website-en': 'Site (Anglais)',
        'works.actions.website-fr': 'Site',
        'hobbies.title': '... et ce n’est pas seulement que du code.',
        'hobbies.description.p1': 'J’ai également d’autre passe-temps lorsque je n’ai pas ma tête plongée dans le code, je joue à des jeux vidéos et également du piano de temps à autre. J’ai même composé quelques musiques amateures que vous pouvez écouter sur mon profil <a href="https://soundcloud.com/saruwatari-masaki" target="_blank">Soundcloud</a> !',
        'hobbies.description.p2': 'Si vous voulez en savoir plus sur mes goûts musicaux, je recommande d’écouter des artistes comme <b>ARForest</b>, <b>Sakuzyo</b>, <b>Evan Call</b>, <b>Hiroyuki Sawano</b>, <b>Kevin Penkin</b> et pour finir, <b>Hans Zimmer</b>.',
        'hobbies.description.p3': 'J’apprécie également toucher un peu au monde du réseau, tellement que chez moi, j’ai une Intel NUC dont je me sers comme serveur personnel mais également mon propre serveur DNS associé à PiHole !',
        'contact.title': 'Me Contacter',
        'contact.download-cv': 'Télécharger le CV',
        'footer.signature': 'Développé par <b>alexpado</b>',
        'errors.panic': 'Retour à l’accueil',
        'errors.404.title': '404 Non Trouvé',
        'errors.404.description': 'Oups, vous vous êtes perdu(e).',
        'errors.403.title': '403 Interdit',
        'errors.403.description': 'Vous n’avez pas accès à cette ressource.',
        'errors.401.title': '401 Non Autorisé',
        'errors.401.description': 'La curiosité est un vilain défaut !',
        'errors.500.title': '500 Erreur de Serveur Interne',
        'errors.500.description': 'Ok, quelque chose s’est <b>vraiment</b> mal passé.'
    },
}


export default class I18N {

    translate(shortCode) {
        if (!translations.hasOwnProperty(shortCode)) {
            return; // Ignore translation.
        }

        this.selectedLanguage = shortCode;
        const activeTranslationMap = translations[shortCode];

        localStorage.setItem('language', this.selectedLanguage);

        // Rendering
        document.querySelectorAll('[data-i18n]').forEach(node => {
            const key = node.dataset.i18n;

            if (activeTranslationMap[key]) {
                node.innerHTML = activeTranslationMap[key];
            } else {
                node.innerHTML = `📕 <pre style="display: inline">${key}</pre>!`;
            }
        });

        // Language switcher
        const switcher = document.querySelector('#language-switcher');
        switcher.innerHTML = '';

        languages.forEach(language => {
            if (language.shortCode !== shortCode) {
                const flagButton = document.createElement('button');
                flagButton.classList.add('clickable')

                flagButton.innerText = language.flag;
                flagButton.title = language.fullName;

                flagButton.addEventListener('click', () => this.translate(language.shortCode));
                switcher.appendChild(flagButton);
            }
        })
    }
}

(() => {
    const i18n = new I18N();
    const defaultLanguage = localStorage.getItem('language') ?? 'en';
    i18n.translate(defaultLanguage);
})()
