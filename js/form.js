//tarkista sähköposti
document.getElementById("email").addEventListener("change", function () {
  let x = document.getElementById("email").value;
  let at = x.indexOf("@");
  var dot = x.lastIndexOf(".");

  if (at < 1 || dot < at + 2 || dot + 2 >= x.length) {
    document.getElementById("email").value = "";
    document.getElementById("email").style.borderColor = "rgb(244, 114, 109)";
    document.getElementById("afterCheck").innerText = "email invalid";
    document.getElementById("afterCheck").style.color = "rgb(244, 114, 109)";
  } else {
    document.getElementById("email").style.borderColor = "none";
    document.getElementById("afterCheck").innerText = "";
  }
});

//tarkista form
function checkForm() {
  obj = JSON.parse(localStorage.yourObject || "{}");
  
  if (obj.Name === 1) {
    document.getElementById("hidden").value = "1";
  } else if (obj.Name === 0) {
    document.getElementById("hidden").value = "0";
  }

  if (
    document.getElementById("name").value === "" ||
    document.getElementById("email").value === "" ||
    document.getElementById("message").value === "" ||
    grecaptcha.getResponse() == ""
  ) {
    document.getElementById("afterCheck").innerText =
      "Tarkista, että olet täyttänyt kaikki pakolliset kentät ja olet vahvistanyt, ettet ole robotti.";
    document.getElementById("afterCheck").style.color =
      "rgb(244, 114, 109)";
    return false;
  } else {
    return true;
  }
}

//tarkista tarvitseko lähetysviesti ja musta ruutu
function load() {
  //voi käyttää : document.location.search + window.location.search
  let mes = "";
  mes = document.location.search;

  if (mes === "?sent") {
    document.getElementById("yhteydenotto-report").style.visibility =
      "visible";
    document.getElementById("black").style.visibility = "visible";
    document.body.style.overflow = "hidden";
  } else {
    document.getElementById("yhteydenotto-report").style.visibility =
      "hidden";
    document.getElementById("black").style.visibility = "hidden";
    document.body.style.overflow = "scroll";
  }
}
//jos napsauta lähetysviesten "X"-painike
document.getElementById("close").addEventListener("click", function () {
  document.getElementById("yhteydenotto-report").style.visibility = "hidden";
  document.getElementById("black").style.visibility = "hidden";
  document.body.style.overflow = "scroll";
});