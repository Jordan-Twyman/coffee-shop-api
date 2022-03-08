const url = "https://localhost:44313/api/beanvariety/";

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

