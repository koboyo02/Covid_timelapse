/*Variable appelant les div de mes fichiers*/
var map = document.querySelector("#map");
var paths = map.querySelectorAll(".map_image a");
var links = map.querySelectorAll(".map_list a");
var formulaire = document.querySelector(".table");

// Rendre le foreach accessible partout

if (NodeList.prototype.forEach === undefined) {
  NodeList.prototype.forEach = function (callback) {
    [].forEach.call(this, callback);
  };
}
/*
var activeArea = function (id) {
  map.querySelectorAll(".is-active").forEach(function (item) {
    item.classList.remove("is-active");
  });
  if (id !== undefined) {
    document.querySelector("#FRN-" + id).classList.add("is-active");
    document.querySelector("#L-" + id).classList.add("is-active");
    formulaire.style.display = "table";
  } else {
    formulaire.style.display = "none";
  }
};
*/
var activeArea = function (id) {
  map.querySelectorAll(".is-active").forEach(function (item) {
    item.classList.remove("is-active");
  });
  if (id !== undefined) {
    document.querySelector("#FRN-" + id).classList.add("is-active");
    document.querySelector("#L-" + id).classList.add("is-active");

    /*formulaire.style.display = "table";*/
    /*departementColor();*/
  }
};

const departementColor = setInterval(() => {
  const departement = document.querySelectorAll(".departement").value;
  if (departement === "Gironde") {
    formulaire.style.background = "blue";
  } else {
    formulaire.style.background = "red";
  }
}, 2000);
/*
var activeFormulaire = function (id) {
  map.querySelectorAll(".is-active").forEach(function (item) {
    item.classList.remove("is-active");
  });
  if (id !== undefined) {
    document.querySelector("#FRN-" + id).classList.add("table");
    document.querySelector("#L-" + id).classList.add("table");
  }
};
*/
paths.forEach(function (path) {
  path.addEventListener("mouseenter", function (e) {
    var id = this.id.replace("L-", "");
    activeArea(id);
    /*activeFormulaire(id);*/
  });
});

links.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    var id = this.id.replace("FRN-", "");
    activeArea(id);
    /*activeFormulaire(id);*/
  });
});

map.addEventListener("mouseover", function () {
  activeArea();
  /*activeFormulaire();*/
});

/*map.addEventListener("mouseover", function () {});*/
