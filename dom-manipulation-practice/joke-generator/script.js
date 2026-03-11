const btn = document.getElementById("btn");
const jokeText = document.getElementById("joke-text");
const errorMsg = document.getElementById("error-msg");

async function fetchJoke() {
  btn.disabled = true;
  jokeText.textContent = "Loading...";
  jokeText.classList.add("loading");
  errorMsg.classList.add("hidden");

  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/any?blacklistFlags=nsfw,racist,sexist"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    jokeText.classList.remove("loading");

    if (data.type === "twopart") {
      jokeText.textContent = `${data.setup} ... ${data.delivery}`;
    } else {
      jokeText.textContent = data.joke;
    }
  } catch (error) {
    jokeText.classList.remove("loading");
    jokeText.textContent = "Click the button to get a random joke!";
    errorMsg.classList.remove("hidden");
  } finally {
    btn.disabled = false;
  }
}

btn.addEventListener("click", fetchJoke);
