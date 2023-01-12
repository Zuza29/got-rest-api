const input = document.createElement("input");
const div = document.getElementById("container");
const btn = document.createElement("button");
const text = document.createElement('p');
div.append(input);
div.append(btn);
div.append(text);
btn.innerText = "click";

const fetchHandler = async (userValue) => {

    if (userValue === "") {
        alert("please provide a query");
    }

    try {

        const response = await fetch(`https://anapioficeandfire.com/api/characters/?name=${userValue}`);
        const object = await response.json();
        const actor = object[0].playedBy[0];
        text.innerText = actor;

    }
    catch (e) {
        Notiflix.Notify.failure('Sorry, something went wrong...')
    }


}

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
