<script>
//Szutor Kata, junior frontend, Team12
document.write(`<h1>1. feladat megoldása</h1>`)
function keszito(){
document.write(`A feladatsor megoldásának készítője: <b>Szutor Kata</b><br>`)
document.write(`Ebben a képzésben vesz részt: <b>Junior frontend fejlesztő</b><br>`)
document.write(`Csoportjának azonosítója: <b>Team12</b><br>`)
}
keszito()

document.write(`<h1>2. feladat megoldása</h1>`)
function hatvanyozo(szam, hatvany){
	document.write(`A megadott szám: ${szam}, a megadott hatvány: ${hatvany}, a hatványozás eredménye: ${Math.pow(szam, hatvany)}<br>`)
    
}
hatvanyozo(2,3)
hatvanyozo(5,3)

document.write(`<h1>3. feladat megoldása</h1>`)
function parosLetrehoz(alsoHatar, felsoHatar){
	let randomSzam=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar
    	if(randomSzam%2==0){
        	parosSzam=randomSzam
        	document.write(`A megadott intervallum alsó határa: ${alsoHatar}, 
            felső határa: ${felsoHatar},<br> 
            random generált páros szám az intervallumban: ${parosSzam}<br>`)
        }
        else{
        	if(randomSzam<=felsoHatar && randomSzam>alsoHatar){
            	parosSzam=randomSzam-1
                document.write(`A megadott intervallum alsó határa: ${alsoHatar}, 
            felső határa: ${felsoHatar},<br> 
            random generált páros szám az intervallumban: ${parosSzam}<br>`)
            }
            else{
            	parosSzam=randomSzam+1
                 document.write(`A megadott intervallum alsó határa: ${alsoHatar}, 
            felső határa: ${felsoHatar},<br> 
            random generált páros szám az intervallumban: ${parosSzam}<br>`)
            }
        }
}
parosLetrehoz(1,100)
parosLetrehoz(3,7)

document.write(`<h1>4. feladat megoldása</h1>`)
function testTomegIndex(suly, magassag){
	let tti=suly/(Math.pow(magassag, 2))
    	if(tti<16){
        	document.write(`Testsúly: ${suly}, magasság: ${magassag}, testtömegindex: ${tti}, ítélet: <b>súlyos soványság</b><br>`)
        	}
        else if(tti<17){
        	document.write(`Testsúly: ${suly}, magasság: ${magassag}, testtömegindex: ${tti}, ítélet: <b>mérsékelt soványság</b><br>`)
        	}
        else if(tti<18.5){
        	document.write(`Testsúly: ${suly}, magasság: ${magassag}, testtömegindex: ${tti}, ítélet: <b>enyhe soványság</b><br>`)
        	}
        else if(tti<25){
        	document.write(`Testsúly: ${suly}, magasság: ${magassag}, testtömegindex: ${tti}, ítélet: <b>normál testsúly</b><br>`)
        	}
        else if(tti<30){
        	document.write(`Testsúly: ${suly}, magasság: ${magassag}, testtömegindex: ${tti}, ítélet: <b>túlsúly</b><br>`)
        	}
       	else if(tti<35){
        	document.write(`Testsúly: ${suly}, magasság: ${magassag}, testtömegindex: ${tti}, ítélet: <b>I. fokú elhízás</b><br>`)
        	}
        else if(tti<40){
        	document.write(`Testsúly: ${suly}, magasság: ${magassag}, testtömegindex: ${tti}, ítélet: <b>II. fokú elhízás</b><br>`)
        	}
        else if(tti>=40){
        	document.write(`Testsúly: ${suly}, magasság: ${magassag}, testtömegindex: ${tti}, ítélet: <b>III. fokú súlyos elhízás</b><br>`)
        	}
        else{
        	document.write(`érvénytelen`)}
}
testTomegIndex(200,2)
testTomegIndex(45,1.5)

document.write(`<h1>5. feladat megoldása</h1>`)
function egeszOsztoE(osztando, oszto){
	if(osztando%oszto==0){
    	return true
    }
    else{
    	return false
    }
}
function eredmenyKiiro5(kapcsolo, trueSzoveg, falseSzoveg){
	if(kapcsolo==true){
    	document.write(trueSzoveg)
    }
    else{
    	document.write(falseSzoveg)
    }
}
eredmenyKiiro5(egeszOsztoE(25,5), `Az osztó maradéktalanul osztja az osztandót.<br>`, 
`Az osztó NEM osztja maradéktalanul az osztandót.<br>`)
eredmenyKiiro5(egeszOsztoE(1050,7), `Az osztó maradéktalanul osztja az osztandót.<br>`, 
`Az osztó NEM osztja maradéktalanul az osztandót.<br>`)
eredmenyKiiro5(egeszOsztoE(2048,3), `Az osztó maradéktalanul osztja az osztandót.<br>`, 
`Az osztó NEM osztja maradéktalanul az osztandót.<br>`)

</script>