function cambiarTasa() {
  var e = document.getElementById("cual-billetera");
  var value = e.value;

  if (value=="mercadopago") {
    tasa=96.7;
    console.log("MP");
  }
  else if (value=="prex") {
    tasa=123.01;
    console.log("Prex");
  }
  else if (value=="naranjax") {
    tasa=110;
    console.log("naranjax");
  }

document.getElementById("tasaActual").innerHTML = "Tasa: " + tasa + " %"
}

function gastoMes() {
  gastoHoy = Number(document.getElementById("gastos").value);
  gastoTotal = gastoHoy;
  plataTotal = Number(document.getElementById("billetera").value);
  

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
      gastoTotal = gastoTotal + gastoHoy*((1+0.01)**i);
      if (plataTotal>0) {
        neto = plataTotal - gastoTotal + (plataTotal-gastoTotal)*((tasa/100)/365)*i;
      }
      else {
        neto = plataTotal - gastoTotal;
      }
    }

    document.getElementById("gastoTotal").innerHTML = "&emsp; $ " + String(round(gastoTotal).toLocaleString('en-US'));

    document.getElementById("plataTotal").innerHTML = "&emsp; $ " + String(round(neto).toLocaleString('en-US'));
    
  

    
  
  if (neto <= 0) {
    document.getElementById('llegas').style.display = 'block';
  }
  else {
    document.getElementById('llegas').style.display = 'none';
  }
  
  }