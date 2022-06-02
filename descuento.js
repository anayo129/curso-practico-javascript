
const coupons=[
    1234,
    3456,
    1290
];

function calcularPrecioConDescuento(precio,descuento){
    const procentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*procentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function  onclickButtonPrice(){
    const inputPrice=document.getElementById("inputPrice");
    const priceValue= inputPrice.value;

    const inputDiscount=document.getElementById
    ("inputCoupon");
    const discountValue=inputDiscount.value;

    let descuento;

    switch(discountValue==coupons.values){
        case coupons[0]: descuento=15;
        break;
        case coupons[1]: descuento=30;
        break;
        case coupons[2]: descuento=25;
    }

    const precioTotal=calcularPrecioConDescuento(priceValue,descuento);

    const resultp=document.getElementById("resultado");
    resultp.innerText="el precio con descuento el: $"+precioTotal;


}