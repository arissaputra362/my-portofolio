const moveMenuNav = (event) => {
  const getId = event.id;
  const links = document.querySelectorAll(".navbar .nav-link");
  for (i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("class")) {
      links[i].classList.remove("active");
    }
  }

  event.classList.add("active");
};

function showDesc(id) {
  let descID = "#" + id;
  let desc = document.querySelector(descID);
  desc.classList.add("show");
}

function hideDesc(id) {
  let descID = "#" + id;
  let desc = document.querySelector(descID);
  desc.classList.remove("show");
}
