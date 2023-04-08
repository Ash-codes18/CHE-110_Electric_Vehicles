function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function scrollb() {
    const section = document.getElementById("blog");
    section.scrollIntoView({behavior: "smooth"});
}

  function scrollmp() {
    const section = document.getElementById("section1");
    section.scrollIntoView({behavior: "smooth"});
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({behavior: "smooth"});
}

function scrollvm() {
    const section = document.getElementById("section3");
    section.scrollIntoView({behavior: "smooth"});
}