var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var Xrp = document.getElementById("xrp");


var settings ={
    "async": true ,
    "scrossDomain": true ,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2CRipple&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    Xrp.innerHTML = response.ripple.usd;
})