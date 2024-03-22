// Función para cargar un archivo CSV
function cargarArchivoCSV(archivo, callback) {
    // Crea un nuevo objeto FileReader
    let lector = new FileReader();
  
    // Define la función de callback para cuando se cargue el archivo
    lector.onload = function(evento) {
      // Obtiene el contenido del archivo como texto
      let contenidoCSV = evento.target.result;
      // Llama al callback con el contenido del CSV
      callback(contenidoCSV);
    };
  
    // Lee el archivo como texto
    lector.readAsText(archivo);
  }
  
  // Función para procesar el contenido del CSV y enviarlo a Firebase
  function procesarYEnviarDatosCSV(contenidoCSV) {
    // Divide el contenido del CSV en filas
    let filas = contenidoCSV.split('\n');
  
    // Procesa cada fila del CSV (excepto la primera fila si contiene encabezados)
    for (let i = 0; i < filas.length; i++) {
      let fila = filas[i].trim(); // Elimina los espacios en blanco al principio y al final de la fila
      if (fila !== '') { // Verifica que la fila no esté vacía
        // Divide la fila en columnas
        let columnas = fila.split(',');
  
        // Aquí puedes procesar las columnas como desees
        // Por ejemplo, podrías enviarlas a Firebase
        // Suponiendo que tienes una referencia a tu base de datos de Firebase llamada "db"
        // y que tienes una colección llamada "datosTurbina"
        db.collection('datosTurbina').add({
          columna1: columnas[0], // Suponiendo que la primera columna contiene el dato que deseas almacenar en campo "columna1" en Firebase
          columna2: columnas[1], // Suponiendo que la segunda columna contiene el dato que deseas almacenar en campo "columna2" en Firebase
          // Y así sucesivamente para las demás columnas
        })
        .then(function(docRef) {
          console.log("Documento agregado con ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error al agregar documento: ", error);
        });
      }
    }
  }
  
  
  