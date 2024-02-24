let input = document.querySelector("#input");
let ul = document.querySelector(".ul");
let form = document.querySelector("form");

const getUrl = async (id) => {
  try {
    const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${id}`);
    let newLink = res.data.result.short_link;
    let oldLink = document.createElement("p");
    let newA = document.createElement("a");
    let newLi = document.createElement("li");
    oldLink.innerText = `${id}`;
    newLi.classList.add("new-li");
    newA.innerText = `${newLink}`;
    newA.href = `https://${newLink}`;
    newA.target = "_blank";
    newLi.append(oldLink);
    newLi.append(newA);
    ul.append(newLi);
  } catch {
    let newLi = document.createElement("li");
    newLi.classList.add("new-li");
    newLi.textContent =
      "Xato togri url manzil kiriting";
    ul.append(newLi);
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getUrl(input.value);
});
