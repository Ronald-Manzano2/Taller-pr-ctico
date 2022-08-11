//variables globales
var fecha = new Date;
var f;
    //var clientes = new Array();

//variables de trabajo
var desc1= random(80,100);
var desc2= random(60,79);
var desc3= random(0,59);
var descVIP = 10;
var descCum= random(80,100);
var dia = fecha.getDate();
var mes = fecha.getMonth() + 1;
var descTot,newTot,descOb;

//funciones secundarias
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function solicitarDatos(){
    //variables que le solicito al cliente
    do{
        var nom = prompt("Digite su nombre");
        if(isNaN(nom)){f=true;}else{f=false;}
    }while(f==false);

    do{
        var mescumple = prompt("¿En qué mes cumple años?");
        if(isNaN(mescumple) || mescumple<1 || mescumple > 12){f=false;}else{f=true;}
    }while(f==false);

    do{
        var diacumple = prompt("¿En qué día cumple años?");
        if(isNaN(diacumple) || diacumple<1 || diacumple > 31){
            f=false;
        }else{
            if(mescumple==2){
                if(diacumple>29){
                    f=false;
                }else{
                    f=true;
                }
            }else{
                f=true;
            }
        }
    }while(f==false);

    do{
        var total = prompt("¿Cuánto es el total a pagar? Solo el número");
        if(isNaN(total) || total < 1){
            f=false;
        }else{
            f=true;
        }
    }while(f==false);

    do{
        var vip=prompt("¿Usted es un cliente vip? S/N");
        if(vip == "S" || vip == "N"){
            f=true;
        }else{
            f=false;
        }
    }while(f==false);

    descuentos(total,vip,mescumple,diacumple,nom,total);
}

//funciones primarias
function descuentos(total,vip,mescumple,diacumple,nombre){
    desc1= random(80,100);
    desc2= random(60,79);
    desc3= random(0,59);
    descCum = random(80,100);

    
    if(mescumple==mes && diacumple==dia){
        descTot=descTot+(total*(descCum/100));
        descOb=descOb+descCum;
        desc1=0;
        desc2=0;
        desc3=0;
    }

    if(total<20){
        descTot = parseFloat(total)*(desc1/100);
        descOb = desc1;
    }else{
        if(total>=20 && total<=100){
            descTot=parseFloat(total)*(desc2/100);
            descOb=desc2;
        }else{
            if(total>100){
                descTot=parseFloat(total)*(desc3/100);
                descOb=desc3;
            }
        }
    }

    if(vip=="S"){
        descTot=descTot+(total*(descVIP/100));
        descOb=descOb+descVIP;
    }

    if(mescumple==mes && diacumple==dia){
        descTot=descTot+(total*(descCum/100));
        descOb=descOb+descCum;
    }

    newTot=total-descTot;

    if(newTot < 0){
        newTot=0;
    }

    //Impresion de la tabla
    document.write("<head><link rel='stylesheet' href='css/style.css'></head>");
        document.write("<table class='tabla'>");
        document.write("<tr><th>Información del cliente</th></tr>")
        document.write("<tr><td>Nombre</td><td>"+ nombre +"</td></tr>");
        document.write("<tr><td>Total a pagar</td><td>$"+ total +"</td></tr>");
        document.write("<tr><td>Descuento obtenido</td><td>"+ descOb +"%</td></tr>");
        document.write("<tr><td>Monto de descuento</td><td>$"+ descTot +"</td></tr>");
        document.write("<tr><td>Nuevo total</td><td>$"+ newTot +"</td></tr>");
        document.write("</table>");
        document.write("<input type='button' onClick=' solicitarDatos();' value='Agregar un nuevo cliente'>");
}
