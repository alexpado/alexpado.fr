"use strict";

function setupNavigationElements() {

    /** @var {{link: HTMLElement, section: HTMLElement}[]} **/
    const items = [];
    const navigation = document.getElementById('navigation');
    const main = document.querySelector('body > main');
    const navHeight = navigation.clientHeight;

    document.querySelectorAll('#navigation a').forEach(node => {
        // Using .getAttribute() instead of .href to avoid retrieving resolved link.
        const href = node.getAttribute('href');

        if (href.startsWith('#')) {
            const id = href.substring(1);
            const section = document.getElementById(id);

            if (section) {
                items.push({link: node, section})
            }
        }
    });

    // Listeners
    items.forEach(({link, section}) => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + main.scrollTop;
            const scrollTo = offsetPosition - (window.innerWidth > 850 ? navHeight : 0);

            main.scrollTo({
                top: scrollTo,
                behavior: "smooth"
            });
        })
    });

    const updateActiveSection = () => {
        const triggerLine = main.scrollTop + (main.clientHeight / 2);
        let activeSection = items[0].section;

        for (const item of items) {
            if (item.section.offsetTop <= triggerLine) {
                activeSection = item.section;
            } else {
                break;
            }
        }

        items.forEach(item => {
            if (item.section === activeSection) {
                item.link.classList.add('active');
            } else {
                item.link.classList.remove('active');
            }
        });
    };

    let isScrolling = false;
    main.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateActiveSection();
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });

    updateActiveSection();
}

(async () => {
    setupNavigationElements();
})();