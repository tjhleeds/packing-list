export class AppLauncher {
  launchApp(): void {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `<h1>Packing list app</h1>`;
  }
}