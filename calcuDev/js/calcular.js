function gastoMes() {
  gastoHoy = Number(document.getElementById("gastos").value);
  gastoTotal = gastoHoy;
  plataTotal = Number(document.getElementById("billetera").value);

  var e = document.getElementById("cual-billetera");
  var value = e.value;
  
  if (value=="mercadopago") {
    tasa=96.7/100;
    console.log("MP");
  }
  else if (value=="prex") {
    tasa=123.01/100;
    console.log("Prex");
  }
  

// Días hasta fin de mes
    function daysUntilEndOfMonth() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentMonthLastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
      const daysLeftInMonth = currentMonthLastDate - currentDate.getDate();
      return daysLeftInMonth;
    }  
    const diasRestantes = daysUntilEndOfMonth();

  function round(v) {
      return Math.sign(v) * Math.round(Math.abs(v));
  }


    for (let i = 1; i < diasRestantes; i++) {
      gastoTotal = gastoTotal + gastoHoy*(1+0.01*i);
      if (plataTotal>0) {
        neto = plataTotal - gastoTotal + (plataTotal-gastoTotal)*(tasa/365)*i;
      }
      else {
        neto = plataTotal - gastoTotal;
      }
    }

    document.getElementById("gastoTotal").innerHTML = "&emsp; $ " + String(round(gastoTotal).toLocaleString('en-US'));

    document.getElementById("plataTotal").innerHTML = "&emsp; $ " + String(round(neto).toLocaleString('en-US'));
    
  

    

  if (neto <= 0) {
    document.getElementById('milei').style.display = 'block';
  }
  else {
    document.getElementById('milei').style.display = 'none';
  }
  }