// Import stylesheets
// import './style.css';

const runApp = () => {
    console.log('App running!');
    setTimeout(() => {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
    }, 1000);
}

// document.addEventListener("DOMContentLoaded", runApp);
if(window.attachEvent) {
    window.attachEvent('onload', runApp);
} else {
    if(window.onload) {
        const curronload = window.onload;
        var newonload = function(evt: Event) {
            curronload(evt);
            runApp();
        };
        window.onload = newonload;
    } else {
        window.onload = runApp;
    }
}

// trivial change to test deployment trigger on netlify - now with correct branch name!