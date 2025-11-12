import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Para obtener __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ruta a tu carpeta de iconos SVG
const carpetaSVG = join(__dirname, 'src/assets/iconos');

const convertirSVGs = (rutaCarpeta) => {
  readdirSync(rutaCarpeta).forEach((archivo) => {
    const rutaArchivo = join(rutaCarpeta, archivo);

    if (statSync(rutaArchivo).isDirectory()) {
      convertirSVGs(rutaArchivo); // recursividad si hay subcarpetas
    } else if (archivo.endsWith('.svg')) {
      let contenido = readFileSync(rutaArchivo, 'utf8');

      // Reemplaza fill="..." excepto fill="none"
      contenido = contenido.replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"');

      // Reemplaza stroke="..." excepto stroke="none"
      contenido = contenido.replace(/stroke="(?!none)[^"]*"/g, 'stroke="currentColor"');

      // Opcional: añade class="icono" al elemento <svg> si no lo tiene
      if (!contenido.includes('class=')) {
        contenido = contenido.replace('<svg', '<svg class="icono"');
      }

      writeFileSync(rutaArchivo, contenido, 'utf8');
      console.log(`✅ Modificado: ${archivo}`);
    }
  });
};

convertirSVGs(carpetaSVG);
