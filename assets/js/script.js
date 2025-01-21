"use strict";
/** @var {object} feather Silence, IDE inspections ! **/
const nightSettings = {
    start: {hour: 22, minute: 30},
    end: {hour: 6, minute: 0},
};


(() => {
    feather.replace();

    const flash = document.getElementById('effect');

    window.addEventListener('mousemove', (e) => {
        flash.style.setProperty('--mouse-x', `${e.pageX}px`);
        flash.style.setProperty('--mouse-y', `${e.pageY}px`);
    });

    const setNight = (isNight) => {
        if (isNight) {
            flash.classList.add('enabled');
        } else {
            flash.classList.remove('enabled');
        }
    }

    let enforceNightState = null;

    document.body.addEventListener('keypress', event => {
        if (event.key === 'N') { // Night
            enforceNightState = true;
        } else if (event.key === 'D') { // Day
            enforceNightState = false;
        } else if (event.key === 'A') { // Auto
            enforceNightState = null;
        }
    })

    const handleTimeCheck = () => {

        if (enforceNightState !== null) {
            setNight(enforceNightState);
            return;
        }

        const date = new Date();
        const now = date.getHours() * 60 + date.getMinutes();

        let start = nightSettings.start.hour * 60 + nightSettings.start.minute;
        let end = nightSettings.end.hour * 60 + nightSettings.end.minute;

        // Across days ?
        const isNight = () => {
            if (start > end) {
                return now >= start || now < end;
            } else {
                return now >= start && now < end;
            }
        }

        setNight(isNight());
    }

    // Is it night ?
    handleTimeCheck();
    setInterval(handleTimeCheck, 1000);

    setTimeout(() => {
        flash.classList.add('transition')
    }, 100);
})();
