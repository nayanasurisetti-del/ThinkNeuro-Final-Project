const happyActivities = [
    "Go for a walk outside",
    "Call a friend",
    "Listen to your favorite music",
    "Dance for 5 minutes",
    "Write down 3 things you're grateful for"
];

const stressedActivities = [
    "Take 5 deep breaths",
    "Stretch your body",
    "Drink some water",
    "Take a short break from screens",
    "Go outside for fresh air"
];

const sadActivities = [
    "Watch a comfort show",
    "Write your feelings in a journal",
    "Give yourself a break",
    "Listen to calming music",
    "Talk to someone you trust"
];

function startApp() {
    document.getElementById("homeScreen").classList.remove("active");
    document.getElementById("mainScreen").classList.add("active");
}

async function happy(){
    const activity = getRandomActivity(happyActivities);
    const display = document.getElementById("moodDisplay");

    display.innerHTML = `
    <h3>😊 You selected happy!</h3>
    <p>Loading quote...</p>
    <p><strong>Try this activity:</strong> ${activity}</p>
    `;

    const quote = await getQuote();

    display.innerHTML = `
    <h3>😊 You selected happy!</h3>
    <p>${quote}</p>
    <p><strong>Try this activity:</strong> ${activity}</p>
    `;
}

async function stressed(){
    const activity = getRandomActivity(stressedActivities);
    const display = document.getElementById("moodDisplay");

    display.innerHTML = `
    <h3>😟 You selected stressed</h3>
    <p>Loading quote...</p>
    <p><strong>Try this activity:</strong> ${activity}</p>
    `;

    const quote = await getQuote();

    display.innerHTML = `
    <h3>😟 You selected stressed</h3>
    <p>${quote}</p>
    <p><strong>Try this activity:</strong> ${activity}</p>
    `;
}

async function sad(){
    const activity = getRandomActivity(sadActivities);
    const display = document.getElementById("moodDisplay");

    display.innerHTML = `
    <h3>🥺 You selected sad</h3>
    <p>Loading quote...</p>
    <p><strong>Try this activity:</strong> ${activity}</p>
    `;

    const quote = await getQuote();

    display.innerHTML = `
    <h3>🥺 You selected sad</h3>
    <p>${quote}</p>
    <p><strong>Try this activity:</strong> ${activity}</p>
    `;
}

let lastQuote = null;

async function getQuote() {
    if (lastQuote) return lastQuote;

    const proxy = "https://api.allorigins.win/raw?url=";
    const apiUrl = encodeURIComponent("https://zenquotes.io/api/random");
    const url = proxy + apiUrl;

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(url, {
            cache: "no-store",
            signal: controller.signal
        });

        clearTimeout(timeout);

        const data = await response.json();
        lastQuote = `${data[0].q} — ${data[0].a}`;

        setTimeout(() => lastQuote = null, 2000);

        return lastQuote;
    } catch (err) {
        return "Stay Positive!";
    }
}

function getRandomActivity(activities){
    const randIndex = Math.floor(Math.random() * activities.length);
    return activities[randIndex];
}