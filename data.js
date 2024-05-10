const submitMaior = document.getElementById("submit_maiorDate")
const submitIntervalo = document.getElementById("submit_intervalo")
const submitPadrao = document.getElementById("submit_padraoDate")


submitMaior.addEventListener("click", ()=>{
    const data1 = String(document.getElementById("data1").value)
    const data2 = String(document.getElementById("data2").value)

    if(validarValor(data1, data2)){
        alert(formatarData(maiorData(data1, data2)))
    }else{
        alert("Peencha todos os dados")
    }
    
})


submitIntervalo.addEventListener("click", ()=>{
    const dataUm = String(document.getElementById("dataUm").value)
    const dataDois = String(document.getElementById("dataDois").value)

    console.log(dataUm)
    console.log(dataDois)

    if(validarValor(dataUm, dataDois)){
        alert(intervaloData(dataUm, dataDois))
    }else{
        alert("Peencha todos os dados")
    }
})


submitPadrao.addEventListener("click", ()=>{
    alert(padraoData())
})



function maiorData(date1, date2) {
    // pega o primeiro parametro e converte para o tipo data com fuso horarío correto
    const dataUm = new Date(`${date1}T00:00:00-02:00`)

    // pega o segundo parametro e converte para o tipo data com fuso horarío correto        
    const dataDois = new Date(`${date2}T00:00:00-02:00`)

    // compara os dois e retorna o maior parametro
    return dataUm > dataDois ? dataUm : dataDois
}

console.log(maiorData("2020-11-20", "2014-12-29"))


function intervaloData(date1, date2) {
    // pega o primeiro parametro e converte para o tipo data com fuso horarío correto
    const dataUm = new Date(`${date1}T00:00:00-02:00`)

    // pega o segundo parametro e converte para o tipo data com fuso horarío correto        
    const dataDois = new Date(`${date2}T00:00:00-02:00`)

    // verifica qual o maior entre parametro A e B. Se A, então A - B. Se B então B - A. Diferenca retorna em milisegundos desde 1970
    return dataUm > dataDois? dataUm.getTime() - dataDois.getTime() : dataDois.getTime() - dataUm.getTime()
}

console.log(intervaloData("2014-12-29", "2015-12-20"))


function padraoData(){
    // gerar um tipo de dado Date do horario do computador
    const nowTime = new Date()

    // pegar os minutos do tipo Date e transformar em string
    const minuto = String(nowTime.getMinutes()).padStart(2, "0")

    // pegar as horas do tipo Date e tranforma em string com "0" na frente
    const hora = String(nowTime.getHours()).padStart(2, "0")

    // pegar o dia do tipo Date e tranforma em string com "0" na frente
    const dia = String(nowTime.getDate()).padStart(2, "0")

    // pegar o mes do tipo Date e tranforma em string com "0" na frente
    const mes = String(nowTime.getMonth()).padStart(2, "0")

    // pegar o ano do tipo Date e tranforma em string
    const ano = String(nowTime.getFullYear())
    
    // retorna um template string com as variáveis criadas
    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`
}

console.log(padraoData())


function formatarData(data){
    const dia = String(data.getDate()).padStart(2, "0")

    const mes = String(data.getMonth()).padStart(2, "0")
    
    const ano = String(data.getFullYear())
    return `${dia}/${mes}/${ano}`
}

function validarValor(value1, value2){
    return value1 && value2? true: false
}