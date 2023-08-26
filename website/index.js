const counter = document.querySelector(".count-number");
async function updateCounter() {
    let response = await fetch(
        "https://dplnfxjcnp7juyn5lhs55qfnse0aysks.lambda-url.us-east-1.on.aws/"
        );
    let data = await response.json();
    counter.innerHTML = ` Page view count: ${data}`;
}
updateCounter();