//codigo cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

console.groupEnd();

//codigo triangulo
console.group("Triangulos");


function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}

console.groupEnd();

//codigo circulos
console.group("Circulos");

function diametroCirculo(radio){
    return radio*2;
}


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*Math.PI;
}

function areaCirculo(radio){
    return (radio*radio)*Math.PI;
}

console.groupEnd();

//interactuando con HTML

//calculos cuadrado

function calcularPerimetroCuadrado(){
 const input=document.getElementById("inputCuadrado");
 const value=input.value;
 const perimetro=perimetroCuadrado(value);
 alert(perimetro);

}

function calcularAreaCuadrado(){
 const input=document.getElementById("inputCuadrado");
 const value=input.value;
 const area=areaCuadrado(value)
 alert(area);
}

//calculos triangulo

const alturaTriangulo = (lado1, lado2, base) =>  {
    if(lado1 === lado2 && lado1 != base) {
      alert("este es un triangulo isoceles");
      const altura = (Math.sqrt(lado1 ** 2 - (base ** 2 / 4)));
      alert("La altura del triangulo es " + altura);
    } else if(lado1 === lado2 && lado1 === base){
      alert("este es un triangulo equilatero");
      const altura = (lado1*(Math.sqrt(3)))/2;
      alert("La altura del triangulo es " + altura);
    } else if(lado1 != lado2 && lado1 != base && lado2 != base){
        alert("este es un triangulo escaleno");
        const altura = (2/lado1)*Math.sqrt(((lado1+lado2+base)/2)*(((lado1+lado2+base)/2)-lado1)*(((lado1+lado2+base)/2)-lado2)*(((lado1+lado2+base)/2)-base));
        alert("La altura del triangulo es " + altura);
    }
    else {
      alert("No es un triangulo");
    }
  }
  
  function calcularAlturaTriangulo() {
    const lado1 = document.getElementById("input1LadoTriangulo");
    const valorlado1 = Number(lado1.value);
    const lado2 = document.getElementById("input2LadoTriangulo");
    const valorLado2 = Number(lado2.value);
    const base = document.getElementById("baseTriangulo");
    const valorBase = Number(base.value);
    const altura = alturaTriangulo(valorlado1, valorLado2, valorBase);
    
  }

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("input1LadoTriangulo");
    const valorlado1 = Number(lado1.value);
    const lado2 = document.getElementById("input2LadoTriangulo");
    const valorLado2 = Number(lado2.value);
    const base = document.getElementById("baseTriangulo");
    const valorBase = Number(base.value);
    const perimetro = perimetroTriangulo(valorlado1, valorLado2, valorBase);
    alert(perimetro);
 }
   

function  calcularAreaTriangulo() {
    const base = document.getElementById("baseTriangulo");
    const valorBase = Number(base.value);
    const altura =  calcularAlturaTriangulo();
    const area = areaTriangulo(base,altura);
    alert(area);

 }

//calculos triangulo

function calcularPerimetroCirculo(){
  const input=document.getElementById("inputRadio");
  const value=inp.value;
  const perimetro = perimetroCirculo(value);
  alert(perimetro);
 }

 function calcularAreaCirculo(){
  const input=document.getElementById("inputRadio");
  const value=inp.value;
  const area = areaCirculo(value);
  alert(area);
 }