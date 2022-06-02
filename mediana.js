
let mediana;
const array=[];
array.sort((a,b)=>a-b);


function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}

function mitadlista(lista){
    const mitad= parseInt(lista.length/2);
    return mitad;
}


function esPar(numero){
    if(numero%2===0){
        return true;
    }
    else{
        return false;
    }
}

    if (esPar(array.length)){
    const elem1=array[mitadlista(array)-1];
    const elem2=array[mitadlista(array)];
    const promedio=calcularMediaAritmetica([elem1,elem2]);
    mediana=promedio;
}
else{
    mediana=lista1[mitadlista(array)];
}