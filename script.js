async function happy(){
    const quote = await getQuote();
    const display = document.getElementById("moodDisplay");
    display.innerHTML = `
    <h3>😊 You selected happy!</h3>
    <p>${quote}</p>
    `;
}
async function stressed(){
    const quote = await getQuote();
    const display = document.getElementById("moodDisplay");
    display.innerHTML = `
    <h3>😟 You selected stressed</h3>
    <p>${quote}</p>
    `;
}
async function sad(){
    const quote = await getQuote();
    const display = document.getElementById("moodDisplay");
    display.innerHTML = `
    <h3>🥺 You selected sad</h3>
    <p>${quote}</p>
    `;
}
async function getQuote() {
    const proxy = "https://api.allorigins.win/raw?url=";
    const apiUrl = "https://zenquotes.io/api/random?t=" + Date.now();
    const url = proxy + encodeURIComponent(apiUrl);
    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();
    return `${data[0].q} — ${data[0].a}`;
}