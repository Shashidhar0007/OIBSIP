function convertToCelsius() {
  const fahrenheit = document.getElementById("fahrenheit").value;
  const kelvin = document.getElementById("kelvin").value;

  let celsius;
  if (fahrenheit !== "") {
    celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById("celsius").value = celsius.toFixed(2);
  }
  if (kelvin !== "") {
    celsius = kelvin - 273.15;
    document.getElementById("celsius").value = celsius.toFixed(2);
  }
}

function convertToFahrenheit() {
  const celsius = document.getElementById("celsius").value;
  const kelvin = document.getElementById("kelvin").value;

  let fahrenheit;
  if (celsius !== "") {
    fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }
  if (kelvin !== "") {
    fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }
}

function convertToKelvin() {
  const celsius = document.getElementById("celsius").value;
  const fahrenheit = document.getElementById("fahrenheit").value;

  let kelvin;
  if (celsius !== "") {
    kelvin = parseFloat(celsius) + 273.15;
    document.getElementById("kelvin").value = kelvin.toFixed(2);
  }
  if (fahrenheit !== "") {
    kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
    document.getElementById("kelvin").value = kelvin.toFixed(2);
  }
}
