fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.querySelector("#react-icon").setAttribute("src", data[0].icon);
    document.querySelector("#react-text").textContent = data[0].category;
    document.querySelector("#react-score").innerHTML =
      data[0].score + "<span class='total'> / 100</span>";

    document.querySelector("#memo-icon").setAttribute("src", data[1].icon);
    document.querySelector("#memo-text").textContent = data[1].category;
    document.querySelector("#memo-score").innerHTML =
      data[1].score + "<span class='total'> / 100</span>";

    document.querySelector("#verb-icon").setAttribute("src", data[2].icon);
    document.querySelector("#verb-text").textContent = data[2].category;
    document.querySelector("#verb-score").innerHTML =
      data[2].score + "<span class='total'> / 100</span>";

    document.querySelector("#vis-icon").setAttribute("src", data[3].icon);
    document.querySelector("#vis-text").textContent = data[3].category;
    document.querySelector("#vis-score").innerHTML =
      data[3].score + "<span class='total'> / 100</span>";
  });

document.querySelector(".continue-btn").addEventListener("click", function () {
  var btn = document.querySelector(".continue-btn");
  btn.classList.add("clicked");
  setTimeout(function () {
    btn.classList.remove("clicked");
  }, 100);
});
