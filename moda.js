const lista1=[
    1,
    3,
    6,
    7,
    6,
    3,
    1,
    2,
    7,
    8,
    5,
    6
];

function modaLista(array){

    const listaCount={};

array.map(
    function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] +=1 ;
        }
        else{
            listaCount[elemento]=1;
        }
        

    }
);

const lista1Array= Object.entries(listaCount).sort(
    function(valorAcumulado,valorNuevo){
       return valorAcumulado[1]-valorNuevo[1];
    }
);

const moda= lista1Array[lista1Array.length-1];
};

// const listaCount={};

// lista1.map(
//     function(elemento){
//         if(listaCount[elemento]){
//             listaCount[elemento] +=1 ;
//         }
//         else{
//             listaCount[elemento]=1;
//         }
        

//     }
// );

// const lista1Array= Object.entries(listaCount).sort(
//     function(valorAcumulado,valorNuevo){
//        return valorAcumulado[1]-valorNuevo[1];
//     }
// );

// const moda= lista1Array[lista1Array.length-1];

