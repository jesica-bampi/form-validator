const inputState = document.querySelector("#inputState");
var requestURLExp =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome";
var requestExp = new XMLHttpRequest();
requestExp.open("GET", requestURLExp);
requestExp.responseType = "json";
requestExp.send();

requestExp.onload = function () {
  var states = requestExp.response;
  addOption(states);
};

function addOption(state) {
  for (var i = 0; i < state.length; i++) {
    var itemOption = document.createElement("option");

    itemOption.textContent = state[i].nome;

    inputState.appendChild(itemOption);
  }
}
