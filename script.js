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
let quotesCache = null;

async function getQuote() {
    if (!quotesCache) {
        const response = await fetch("https://type.fit/api/quotes");
        quotesCache = await response.json();
    }
    const randomIndex = Math.floor(Math.random() * quotesCache.length);
    const quote = quotesCache[randomIndex];
    return `${quote.text} — ${quote.author || "Unknown"}`;
}