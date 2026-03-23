const happyActivities = [
    "Go for a walk outside",
    "Call a friend",
    "Listen to your favorite music",
    "Dance for 5 minutes",
    "Write down 3 things you're grateful for"
];
const stressedActivites = [
    "Take 5 deep breaths",
    "Stretch your body",
    "Drink some water",
    "Take a short break from screens",
    "Go outside for fresh air"
];
const sadActivties = [
    "Watch a comfort show",
    "Write your feelings in a journal",
    "Give yourself a break",
    "Listen to calming music",
    "Talk to someone you trust"
];
async function happy(){
    const quote = await getQuote();
    const activity = getRandomActivity(happyActivities);
    const display = document.getElementById("moodDisplay");
    display.innerHTML = `
    <h3>😊 You selected happy!</h3>
    <p>${quote}</p>
    `;
}
async function stressed(){
    const quote = await getQuote();
    const activity = getRandomActivity(stressedActivities);
    const display = document.getElementById("moodDisplay");
    display.innerHTML = `
    <h3>😟 You selected stressed</h3>
    <p>${quote}</p>
    <p><strong>Try this activity:</strong> ${activity}</p>
    `;
}
async function sad(){
    const quote = await getQuote();
    const activity = getRandomActivity(sadActivities);
    const display = document.getElementById("moodDisplay");
    display.innerHTML = `
    <h3>🥺 You selected sad</h3>
    <p>${quote}</p>
    <p><strong>Try this activity:</strong> ${activity}</p>
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
function getRandomActivity(activties){
    const randIndex = Math.floor(Math.random() * activities.length);
    return activities[randIndex];
}