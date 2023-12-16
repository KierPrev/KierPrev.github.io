function gastoMes() {
    gastoHoy = Number(document.getElementById("gastos").value);
    gastoTotal = gastoHoy;
    plataTotal = Number(document.getElementById("billetera").value);

    for (let i = 1; i < 30; i++) {
      gastoTotal = gastoTotal + gastoHoy*(1+0.01*i);
    }

    document.getElementById("gastoTotal").innerHTML = "&emsp; $ " + String(gastoTotal.toLocaleString('en-US'));

    document.getElementById("plataTotal").innerHTML = "&emsp; $ " + String((plataTotal - gastoTotal).toLocaleString('en-US'));

  if (plataTotal - gastoTotal <= 0) {
    document.getElementById('milei').style.display = 'block';
  }
  else {
    document.getElementById('milei').style.display = 'none';
  }
  }