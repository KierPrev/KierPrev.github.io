function gastoMes() {
    gastoHoy = Number(document.getElementById("gastos").value);
    gastoTotal = gastoHoy;
    plataTotal = Number(document.getElementById("billetera").value);

    for (let i = 1; i < 30; i++) {
      gastoTotal = gastoTotal + gastoHoy*(1+0.01*i);
    }

    document.getElementById("gastoTotal").innerHTML = String(gastoTotal.toLocaleString('en-US'));

    document.getElementById("plataTotal").innerHTML = String((plataTotal - gastoTotal).toLocaleString('en-US'));

  if (plataTotal - gastoTotal <= 0) {
    document.getElementById('nohayplata').style.display = 'block';
  }
  else {
    document.getElementById('nohayplata').style.display = 'none';
  }
  }