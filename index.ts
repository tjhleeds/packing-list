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
console.log('starting');
if(window.attachEvent) {
    console.log('attachEvent found');
    window.attachEvent('onload', runApp);
} else {
    if(window.onload) {
        console.log('onload found');
        const curronload = window.onload;
        var newonload = function(evt: Event) {
            curronload(evt);
            runApp();
        };
        window.onload = newonload;
    } else {
        console.log('setting onload');
        window.onload = runApp;
    }
}

// trivial change to test deployment trigger on netlify - now with correct branch name!