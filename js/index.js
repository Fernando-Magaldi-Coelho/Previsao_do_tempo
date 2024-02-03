

const key = "efa39c68a51a8600b1c72f4b6a6ffd30";


function ShowData(dados){

    const city = document.querySelector('.city');

    const temp = document.querySelector('.temp');

    const umid = document.querySelector('.umidade');

    const previ = document.querySelector('.previsao');

    const img_prev = document.querySelector('.img_prev');

    if
        
        (dados.cod && dados.cod !== 200){
        city.innerHTML = "Cidade Inválida";
        temp.innerHTML = "Temperatura:";
        previ.innerHTML = "";
        umid.innerHTML = "Umidade: ";
    } 
    
    else
    
    {

    img_prev.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    if(img_prev.src == "https://openweathermap.org/img/wn/01n.png"){
        img_prev.src = "img/sol.svg";
    }

    city.innerHTML = "Tempo em " + dados.name;

    temp.innerHTML = "Temperatura: " + dados.main.temp.toFixed(0) + "°C"; //toFixed é para arredondor o (0) é para ter nenhuma casa decimal

    previ.innerHTML = dados.weather[0].description;    

    umid.innerHTML = "Umidade: " + dados.main.humidity + "%";

    }
}


async function buscarCidade(cidade){ //Funções assincronas servem para quando for inicar um servidor 

    //com o AWAIT é para dizer q ele tem que esperar o servidor para continuar executar o codigo 
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
    //o fecth é para usar o servidor 
    ShowData(dados)

    console.log(dados)

    // Chama a função ClickButton se o valor do input for maior que 0
}


function ClickButton(){
    const input = document.querySelector(".input_city").value;

    buscarCidade(input)
}



const form = document.querySelector('.form');

const NaoAtualiza = (e) =>{
    e.preventDefault();
}

form.addEventListener('submit', NaoAtualiza)


// // Adicione o evento "keydown" ao input
// const input = document.querySelector(".input_city");
// input.addEventListener("keydown", function (event) {
//     // Verifica se a tecla pressionada foi "Enter"
//     if (event.key === "Enter") {
//         ClickButton();
//     }
// });

// // Adicione o evento "click" ao botão
// const buttonElement = document.querySelector(".container_submit button");
// buttonElement.addEventListener("click", ClickButton);