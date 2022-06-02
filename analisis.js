//helper
function esPar(numero){
    return (numero%2===0);
 };
 
 function calcularMediaAritmetica(lista){
     const sumaLista=lista.reduce(
         function(valorAcumulado=0,nuevoElemento){
             return valorAcumulado+nuevoElemento;
         }
     );
     const promedioLista=sumaLista/lista.length;
     return promedioLista;
 }

 //calculadora de medianas

 function medianaSalarios(lista){
    const mitad=parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1=lista[mitad-1];
        const personaMitad2=lista[mitad];
        const mediana=calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    }
    else{
        const personaMitad=lista[mitad];
        return personaMitad;
    }
};

 //mediana general

const salarioCol=colombia.map(
    function(persona){
        return persona.salary;
    }

);

const salarioColSorted=salarioCol.sort(
    function(salarioA,salarioB){
      return  salarioA-salarioB;
    }
);

const medianaGeneralCol=medianaSalarios(salarioColSorted);

//media top 10%

const spliceStart = (salarioColSorted.length*90)/100;
const spliceCount = salarioColSorted.length-spliceStart;

const salarioColTop10 = salarioColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col=medianaSalarios(salarioColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col
});