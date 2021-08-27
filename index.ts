// Import stylesheets
// import './style.css';

const runApp = () => {
    console.log('App running!');
    setTimeout(() => {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = `<h1>Packing list</h1>`;
    }, 1000);
}

runApp();