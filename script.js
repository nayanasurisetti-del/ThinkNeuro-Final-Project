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
    const url = proxy + encodeURIComponent("https://zenquotes.io/api/random");
    const response = await fetch(url);
    const data = await response.json();
    return `${data[0].q} — ${data[0].a}`;
}