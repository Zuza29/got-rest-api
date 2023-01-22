const input = document.createElement("input");
const div = document.getElementById("container");
const btn = document.createElement("button");
const text = document.createElement("p");
const header = document.createElement("h1");
div.append(input);
div.append(btn);
div.append(text);
div.prepend(header);
btn.innerText = "click";
header.innerText = "choose a character";

const fetchHandler = async (userValue) => {

    if (userValue.trim() === "") {
        Notiflix.Notify.info("Please do not leave the field empty");
        return;
    }

    const response = await fetch(`https://anapioficeandfire.com/api/characters/?name=${userValue}`);
    const object = await response.json();

    try {
        const actor = object[0].playedBy[0];
        text.innerText = actor;
    } catch (e) {
        if (response.ok) {
        Notiflix.Notify.info("Please check your spelling");
        return;
        } 
        Notiflix.Notify.failure("Sorry, something went wrong...");
    }
};




btn.addEventListener("click", () => {
    const val = input.value;
    fetchHandler(val);
});

document.addEventListener("keydown", (e) => {
    const val = input.value;
    if (e.key === 'Enter') {
        fetchHandler(val);
    }
});
