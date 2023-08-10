function botao1(){
    
    var area = document.getElementById("area").value
    var populacao = document.getElementById("populacao").value
    var densidade = populacao / area
    
if(densidade >= 100){
    document.getElementById("resposta").innerHTML ="A densidade é alta"
}
if(densidade >= 25 && densidade < 100){
    document.getElementById("resposta").innerHTML ="A densidade é média"
}  
if(densidade < 25){
    document.getElementById("resposta").innerHTML ="A densidade é baixa"
}  
}
