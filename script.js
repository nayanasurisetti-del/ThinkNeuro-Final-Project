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
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return data.content + " - " + data.author;
    } catch (error) {
        console.log("Error fetching quote:", error);
        return "Stay positive!";
    }
}