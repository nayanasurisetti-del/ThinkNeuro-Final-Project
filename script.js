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
async function getQuote(){
    try{
        const response = await fetch(
        "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random")
        );
        const data = await response.json();
        return data[0].q + " - " + data[0].a;
    } catch (error) {
        console.log("Error fetching quote:", error);
        return "Stay positive!";
    }
}