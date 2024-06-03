import React from "react";
import '../Main.css'
// import { NavLink } from "react-router-dom";


export default function websockettest() {
    
    let usdt = new WebSocket("wss://fstream.binance.com/ws/btcusdt@markPrice")
    let usdc = new WebSocket("wss://fstream.binance.com/ws/btcusdc@markPrice")
    let zec = new WebSocket("wss://fstream.binance.com/ws/zecusdt@markPrice")
    let stg = new WebSocket("wss://fstream.binance.com/ws/stgusdt@markPrice")
    let alice = new WebSocket("wss://fstream.binance.com/ws/aliceusdt@markPrice")

    let lastBtcUsdt = null
    let lastPriceusdc = null
    let lastPricezec = null
    let lastPricestg = null
    let lastPricealice = null

usdt.onmessage = (event) =>{
    let stockObject = JSON.parse(event.data)
    // console.log(`usdt :\n`,stockObject)
    document.getElementById('usdt').innerText = parseFloat(stockObject.p).toFixed(2)
    document.getElementById('usdt').style.color = (!stockObject.p || stockObject.p === lastBtcUsdt? 'black' : (stockObject.p > lastBtcUsdt? 'green':'red'))
    lastBtcUsdt = stockObject.p
}

usdc.onmessage = (event) =>{
    let stockObject = JSON.parse(event.data)
    // console.log(`usdc :\n`,stockObject)
    document.getElementById('usdc').innerText = parseFloat(stockObject.p).toFixed(2)
    document.getElementById('usdc').style.color = (!stockObject.p || stockObject.p === lastPriceusdc? 'black' : (stockObject.p > lastPriceusdc? 'green':'red'))
    lastPriceusdc = stockObject.p
}

zec.onmessage = (event) =>{
    let stockObject = JSON.parse(event.data)
    // console.log(`zec :\n`,stockObject)
    document.getElementById('zec').innerText = parseFloat(stockObject.p).toFixed(2)
    document.getElementById('zec').style.color = (!stockObject.p || stockObject.p === lastPricezec? 'black' : (stockObject.p > lastPricezec? 'green':'red'))
    lastPricezec = stockObject.p
}

stg.onmessage = (event) =>{
    let stockObject = JSON.parse(event.data)
    // console.log(`stg :\n`,stockObject)
    document.getElementById('stg').innerText = parseFloat(stockObject.p).toFixed(2)
    document.getElementById('stg').style.color = (!stockObject.p || stockObject.p === lastPricestg? 'black' : (stockObject.p > lastPricestg? 'green':'red'))
    lastPricestg = stockObject.p
}

alice.onmessage = (event) =>{
    let stockObject = JSON.parse(event.data)
    // console.log(`alice :\n`,stockObject)
    document.getElementById('alice').innerText = parseFloat(stockObject.p).toFixed(2)
    document.getElementById('alice').style.color = (!stockObject.p || stockObject.p === lastPricealice? 'black' : (stockObject.p > lastPricealice? 'green':'red'))
    lastPricealice = stockObject.p
}






  return (
    <div>
      <div className="socketTest">
        <p>Btc/Usdt: <span id="usdt" className='cryptoPrice' >Loading...</span></p>
        <p>Btc/Usdc: <span id="usdc" className='cryptoPrice'>Loading...</span></p>
        <p>Zec/Usdt: <span id="zec" className='cryptoPrice'>Loading...</span></p>
        <p>Stg/Usdt: <span id="stg" className='cryptoPrice'>Loading...</span></p>
        <p>Alice/Usdt: <span id="alice" className='cryptoPrice'>Loading...</span></p>
        

      </div>
    </div>
  );
}
