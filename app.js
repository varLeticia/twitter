let tweet = document.querySelector('textarea');
let botao = document.querySelector('input');
let tweetText = tweet.value;

function doSomething(input) {
  document.getElementById('btnEnvia').disabled = (input.value.length == 0);
}

function pegarHora(){
  let day = new Date();
  let hour = day.getHours();
  let min = day.getMinutes();

  let final =  hour + ":" + min; 
  return final
}

botao.addEventListener('click', clicarParaTweetar);

function clicarParaTweetar() {
  let tweetText = document.createTextNode(tweet.value);
  let tweetList = document.querySelector(".tweetSpace");
  let tweetBox = document.createElement('div');
  let hourParag = document.createElement('p');
  let textParag = document.createElement('p');
  
  hourParag.innerHTML = pegarHora();  
  textParag.appendChild(tweetText);
  tweetBox.appendChild(hourParag);
  tweetBox.appendChild(tweetText);
  tweetList.appendChild(tweetBox);
}

tweet.addEventListener('keyup', disabledBotao);

function disabledBotao() {
  disabled()
}

function disabled() {
  let tweet = document.querySelector('textarea');
  let tweetText = tweet.value;
  if (tweetText.length == 0 || tweetText.length > 140) {
    botao.disabled = true;
  }
  else {
    botao.disabled = false;
  }
}

function caracteres() {
  var current = document.querySelector('textarea').value.length;
  let valor = 140 - current;
  document.getElementById('contador').innerHTML = valor;

  if (valor < 0){ console.log('entrou uhuu')
    document.getElementById('contador').style.color = 'red';
  }
  else if (valor < 10){
    document.getElementById('contador').style.color = 'orange';
  }
  else if (valor < 20){
  document.getElementById('contador').style.color = 'yellow';
   }
  else if (valor < 50){
    document.getElementById('contador').style.color = 'green';
  }
  else if (valor < 75){
    document.getElementById('contador').style.color = 'blue';
  }
  else if (valor < 100 ){
    document.getElementById('contador').style.color = 'purple';
  }
  else if (valor < 140){
     document.getElementById('contador').style.color = 'black';
   }
}












