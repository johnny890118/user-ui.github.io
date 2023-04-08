let signin = document.querySelector(".changeView");
let signup = document.querySelector(".changeView2");

function btn2() {
  let signin = document.querySelector(".changeView");
  let signup = document.querySelector(".changeView2");

  signin.style.display = "none";
  signup.style.display = "block";
}

function btn1() {
  let signin = document.querySelector(".changeView");
  let signup = document.querySelector(".changeView2");

  signin.style.display = "block";
  signup.style.display = "none";
}

function okbtn() {
  let userdata = document.querySelector(".user-data").value;
  let emaildata = document.querySelector(".email-data").value;
  let passdata = document.querySelector(".pass-data").value;
  let p1 = document.querySelector(".p1");
  let p2 = document.querySelector(".p2");
  let p3 = document.querySelector(".p3");
  let n = emaildata.includes("@");
  if (userdata == "" || userdata.length > 40) {
    p1.style.display = "block";
  } else {
    p1.style.display = "none";
  }
  if (emaildata == "" || n == false) {
    p2.style.display = "block";
  } else {
    p2.style.display = "none";
  }
  if (passdata == "" || passdata.length < 8 || passdata.length > 100) {
    p3.style.display = "block";
  } else {
    p3.style.display = "none";
  }
}
