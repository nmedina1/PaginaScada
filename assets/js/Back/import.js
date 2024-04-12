const fs = require('fs');

// Lee el archivo JSON original
const originalData = JSON.parse(fs.readFileSync('C:/Docs/Wind_turbine/PaginaScada/material-kit-master/firebase/dataset.json'));

// Objeto que contendrá la nueva estructura para la importación
const newData = {
  "__collections__": {
    "data": {}
  }
};

// Itera sobre los datos originales y crea nuevos objetos con la estructura requerida
originalData.forEach((data, index) => {
  const documentId = `documentId${index + 1}`;
  newData["__collections__"]["data"][documentId] = {
    "Date/Time": data["Date/Time"],
    "LV ActivePower (kW)": data["LV ActivePower (kW)"],
    "Wind Speed (m/s)": data["Wind Speed (m/s)"],
    "Theoretical_Power_Curve (KWh)": data["Theoretical_Power_Curve (KWh)"],
    "Wind Direction (°)": data["Wind Direction (°)"]
  };
});

// Guarda los nuevos datos en un archivo JSON
fs.writeFileSync('C:/Docs/Wind_turbine/PaginaScada/material-kit-master/firebase/datasetconv.json', JSON.stringify(newData, null, 2));

  
  
  