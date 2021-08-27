// Import stylesheets
// import './style.css';
const runApp = () => {
    console.log('App running!');
    setTimeout(() => {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
    }, 1000);
};
document.addEventListener("DOMContentLoaded", runApp);
