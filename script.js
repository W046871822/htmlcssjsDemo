alert("Hello World");

button = document.getElementById("button");
button.addEventListener("click", sayHello);

theText = document.getElementById("someTxt");

function sayHello(){
  alert('msg');
  theText.innerHTml = "other text"();
}
