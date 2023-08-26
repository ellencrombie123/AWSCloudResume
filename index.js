const counter = document.querySelector(".count-number");
async function updateCounter() {
    let response = await fetch(
        "https://fmwc65m4bn7wczvxysuznk6vqy0ztczn.lambda-url.us-east-1.on.aws/"
        );
    let data = await response.json();
    counter.innerHTML = ` Page view count: ${data}`;
}
updateCounter();