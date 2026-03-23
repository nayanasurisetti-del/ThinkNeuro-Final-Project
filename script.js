function happy(){
    console.log("happy");
}
function stressed(){
    console.log("Stressed");
}
function sad(){
    console.log("sad");
}

async function getQuote() {
    const proxy = "https://api.allorigins.win/raw?url=";
    const url = proxy + encodeURIComponent("https://zenquotes.io/api/random");
    const response = await fetch(url);
    const data = await response.json();
    return `${data[0].q} — ${data[0].a}`;
}