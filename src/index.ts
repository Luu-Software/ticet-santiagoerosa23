import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.
 
function calcularTotal(artista:string, cantidad:number, codigo:string):number{
  
  let preciobase:number = 0;

  if (artista === 'sabrina') {
    preciobase = 1000;

else if (artista === 'kgatlw') {
    preciobase = 700;
    else if (artista === 'lali') {
      preciobase = 500;
      else if (artista === 'magdalena') {
        preciobase = 600;
        else if (artista === 'viagra') {
          preciobase = 400;
          else if (artista === 'dillom') {
            preciobase = 350;
            else if (artista === 'marilina') {
              preciobase = 200;
              else if (artista === 'mugre') {
                preciobase = 150;
              }
            }
          }
        }
      }
    
}}}
}
cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();
