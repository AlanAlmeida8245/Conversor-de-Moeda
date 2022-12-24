

    
        

function converter(){


    let numeroConverter = document.getElementById("moeda1")
    let MensagemErro = document.getElementById("error")
    
    if(numeroConverter.value < 0)
    {
        MensagemErro.style.display = "block";
        
    }
    else{

        const url = 'https://economia.awesomeapi.com.br/last/'
        const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'
        fetch(url + moedas)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)
    
                const dolarReal = data.USDBRL.bid //bid é onde está guardado o valor da cotacao
                const euroReal = data.EURBRL.bid
                const Bit = data.BTCBRL.bid
        
                let valorDolar = document.getElementById("valordolar")
                var valorFormatado = valorDolar.toLocaleString('en', { style: 'currency', currency: 'USD' });
                let TotalDolar, TotalEuro, TotalBit;

                let valorEuro = document.getElementById("valoreuro")
                let valorBit = document.getElementById("valorbit")
                TotalDolar = numeroConverter.value / dolarReal
                TotalEuro =  numeroConverter.value / euroReal
                TotalBit = numeroConverter.value * Bit * 1000
                valorDolar.innerHTML = `$${TotalDolar.toFixed(2).toLocaleString('en-US')}`
                valorEuro.innerHTML = `€${TotalEuro.toFixed(2).toLocaleString('de-DE')}`
                valorBit.innerHTML = `R$${TotalBit.toLocaleString('de-DE')}`
                MensagemErro.style.display = "none";


            })

        
    }
    

     
 
     
}