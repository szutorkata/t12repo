<script>
document.write(`<hr>`)

document.write(`<h2 style=text-align:center>🔴🟠🟡🟢🔵 HALMAZOK 🔵🟢🟡🟠🔴</h2>`)



/*let aHalmaz=[2,1,5,4,3,3,2,5,5]
let bHalmaz=[2,2,0,0,4,3]*/
let aHalmaz=[]
let bHalmaz=[]
for(i=0;i<5;i++){
	aHalmaz.push(Math.round(Math.random()*5));
}
for(i=0;i<7;i++){
	bHalmaz.push(Math.round(Math.random()*5));
}
document.write(`<br>🅰 halmaz elemei: `)
for(i=0;i<aHalmaz.length;i++){
	document.write(aHalmaz[i]+",")
}
document.write(`<br>🅱 halmaz elemei: `)
for(i=0;i<bHalmaz.length;i++){
	document.write(bHalmaz[i]+",")
}

document.write(`<hr>`)

document.write(`<h3 style=text-align:center>🔴🟠🟡🟢🔵 Unió 🔵🟢🟡🟠🔴</h3>`)
document.write(`<br>🅰 halmaz elemei: `)
for(i=0;i<aHalmaz.length;i++){
	document.write(aHalmaz[i]+",")
}
document.write(`<br>🅱 halmaz elemei: `)
for(i=0;i<bHalmaz.length;i++){
	document.write(bHalmaz[i]+",")
}
document.write(`<hr>`)
document.write(`<h4>Unió - szűretlen</h4>`)
let unioSzuretlen=[]
	for(i=0;i<(aHalmaz.length);i++){
		unioSzuretlen.push(aHalmaz[i])
}
	for(i=0;i<(bHalmaz.length);i++){
		unioSzuretlen.push(bHalmaz[i])
}
document.write("Halmaz elemei: ")
document.write(unioSzuretlen)

document.write(`<hr>`)

document.write(`<h4>Unió - szűretlen, függvénnyel</h4>`)
function unioSzuretlenFuggveny(halmaz1, halmaz2) {
	let unioSzuretlenHalmaz=[]
	for(i=0;i<(aHalmaz.length);i++){
		unioSzuretlenHalmaz.push(aHalmaz[i])
	}
	for(j=0;j<(bHalmaz.length);j++){
		unioSzuretlenHalmaz.push(bHalmaz[j])
	}
    return unioSzuretlenHalmaz
}
document.write("Halmaz elemei: "+unioSzuretlenFuggveny(aHalmaz,bHalmaz))

document.write(`<hr>`)

document.write(`<h4>Unió - szűrt</h4>`)
let unioSzurt=[]
for(i=0;i<(aHalmaz.length);i++){
	let szerepelE=false
    for(j=0;j<unioSzurt.length;j++){
    	if(aHalmaz[i]==unioSzurt[j]){
        szerepelE=true
        }
    }
    if(szerepelE==false){
    unioSzurt.push(aHalmaz[i])
    }
}
for(i=0;i<(bHalmaz.length);i++){
	let szerepelE=false
    for(j=0;j<unioSzurt.length;j++){
    	if(bHalmaz[i]==unioSzurt[j]){
        szerepelE=true
        }
    }
    if(szerepelE==false){
    unioSzurt.push(bHalmaz[i])
    }
}
document.write(`Halmaz elemei:`)
document.write(unioSzurt)

document.write(`<hr>`)

document.write(`<h4>Unió - szűrt, függvénnyel</h4>`)
function unioSzurtFuggveny(halmaz1, halmaz2){
	let unioSzurtHalmaz=[]
	for(i=0;i<(aHalmaz.length);i++){
		let szerepelE=false
    	for(j=0;j<unioSzurtHalmaz.length;j++){
    		if(aHalmaz[i]==unioSzurtHalmaz[j]){
        	szerepelE=true
        	}
    	}
    	if(szerepelE==false){
    	unioSzurtHalmaz.push(aHalmaz[i])
    	}
	}
	for(i=0;i<(bHalmaz.length);i++){
		let szerepelE=false
    	for(j=0;j<unioSzurtHalmaz.length;j++){
    		if(bHalmaz[i]==unioSzurtHalmaz[j]){
        	szerepelE=true
        	}
    	}
   		if(szerepelE==false){
    	unioSzurtHalmaz.push(bHalmaz[i])
    	}
	}
    return unioSzurtHalmaz
}
document.write("Halmaz elemei: "+unioSzurtFuggveny(aHalmaz,bHalmaz))
document.write(`<hr>`)
document.write(`<hr>`)
document.write(`<h3 style=text-align:center>🔴🟠🟡🟢🔵 Metszet 🔵🟢🟡🟠🔴</h3>`)
document.write(`<br>🅰 halmaz elemei: `)
for(i=0;i<aHalmaz.length;i++){
	document.write(aHalmaz[i]+",")
}
document.write(`<br>🅱 halmaz elemei: `)
for(i=0;i<bHalmaz.length;i++){
	document.write(bHalmaz[i]+",")
}

document.write(`<hr>`)

document.write(`<h4>Metszet - szűretlen</h4>`)
let metszetSzuretlen=[]
for(i=0;i<aHalmaz.length;i++){
	for(j=0;j<bHalmaz.length;j++){
    	if(aHalmaz[i]==bHalmaz[j]){
            metszetSzuretlen.push(aHalmaz[i])
        }
    }
}
document.write(`Halmaz elemei: `)
document.write(metszetSzuretlen)

document.write(`<hr>`)

document.write(`<h4>Metszet - szűretlen, függvénnyel</h4>`)
function metszetSzuretlenFuggveny(halmaz1,halmaz2){
	let metszetSzuretlenHalmaz=[]
	for(i=0;i<halmaz1.length;i++){
		for(j=0;j<halmaz2.length;j++){
    		if(halmaz1[i]==halmaz2[j]){
            	metszetSzuretlenHalmaz.push(halmaz1[i])
        	}
    	}
	}
    return metszetSzuretlenHalmaz
}
document.write("Halmaz elemei: "+metszetSzuretlenFuggveny(aHalmaz,bHalmaz))

document.write(`<hr>`)

document.write(`<h4>Metszet - szűrt</h4>`)
let metszetSzurt=[]
for(i=0;i<aHalmaz.length;i++){
	for(j=0;j<bHalmaz.length;j++){
    	if(aHalmaz[i]==bHalmaz[j]){
        	let szerepelE3=false
            for(k=0;k<metszetSzurt.length;k++){
            	if(aHalmaz[i]==metszetSzurt[k]){
                	szerepelE3=true
                }
           	
            }
            if(szerepelE3==false){
            metszetSzurt.push(aHalmaz[i])
            }
        }
    }
}
document.write(`Halmaz elemei: `)  
document.write(metszetSzurt)

document.write(`<hr>`)

document.write(`<h4>Metszet - szűrt, függvénnyel</h4>`)
function metszetSzurtFuggveny(halmaz1, halmaz2){
	let metszetSzurtHalmaz=[]
	for(i=0;i<halmaz1.length;i++){
		for(j=0;j<halmaz2.length;j++){
    		if(halmaz1[i]==halmaz2[j]){
        		let szerepelE3=false
            	for(k=0;k<metszetSzurtHalmaz.length;k++){
            		if(halmaz1[i]==metszetSzurtHalmaz[k]){
                		szerepelE3=true
                	}  	
            	}
            	if(szerepelE3==false){
            		metszetSzurtHalmaz.push(halmaz1[i])
            	}
        	}
    	}
	}
    return metszetSzurtHalmaz
}	
document.write("Halmaz elemei - függvénnyel: "+metszetSzurtFuggveny(aHalmaz,bHalmaz))

document.write(`<hr>`)
document.write(`<hr>`)
document.write(`<h3 style=text-align:center>🔴🟠🟡🟢🔵 A különbség B 🔵🟢🟡🟠🔴</h3>`)

document.write(`<br>🅰 halmaz elemei: `)
for(i=0;i<aHalmaz.length;i++){
	document.write(aHalmaz[i]+",")
}
document.write(`<br>🅱 halmaz elemei: `)
for(i=0;i<bHalmaz.length;i++){
	document.write(bHalmaz[i]+",")
}

document.write(`<hr>`)

//a különbség b - szűretlen
document.write(`<h4>A különbség B - szűretlen</h4>`)
let aKozosbSzuretlen=[]
let aKulonbsegbSzuretlen=[]
for(i=0;i<aHalmaz.length;i++){
	for(j=0;j<bHalmaz.length;j++){
    	if(aHalmaz[i]==bHalmaz[j]){
            aKozosbSzuretlen.push(aHalmaz[i])
        }
    }
    let teszt=false
    for(k=0;k<aKozosbSzuretlen.length;k++){
    	if(aHalmaz[i]==aKozosbSzuretlen[k]){
        	teszt=true
        }
    }
    if(teszt==false){
        aKulonbsegbSzuretlen.push(aHalmaz[i])
    }
}
/*document.write(`Szűretlen A metszet B elemei:   `)  
document.write(aKozosbSzuretlen)*/
document.write(`Halmaz elemei: `)  
document.write(aKulonbsegbSzuretlen)

document.write(`<hr>`)

//a különbség b - szűretlen, függvénnyel
document.write(`<h4>A különbség B - szűretlen, függvénnyel</h4>`)
function aKulonbsegbFuggveny(halmaz1, halmaz2){
let aKozosbSzuretlenHalmaz=[]
let aKulonbsegbSzuretlenHalmaz=[]
for(i=0;i<halmaz1.length;i++){
	for(j=0;j<halmaz2.length;j++){
    	if(halmaz1[i]==halmaz2[j]){
            aKozosbSzuretlenHalmaz.push(halmaz1[i])
        }
    }
    let teszt=false
    for(k=0;k<aKozosbSzuretlenHalmaz.length;k++){
    	if(halmaz1[i]==aKozosbSzuretlenHalmaz[k]){
        	teszt=true
        }
    }
    if(teszt==false){
        aKulonbsegbSzuretlenHalmaz.push(halmaz1[i])
    }
}
return aKulonbsegbSzuretlenHalmaz
}
document.write("Halmaz elemei: "+aKulonbsegbFuggveny(aHalmaz,bHalmaz))  

document.write(`<hr>`)

//A különbség B halmaz, szűrt
document.write(`<h4>A különbség B - szűrt</h4>`)
let aKozosbSzurt=[]
let aKulonbsegbSzurt=[]
for(i=0;i<aHalmaz.length;i++){
	for(j=0;j<bHalmaz.length;j++){
    	if(aHalmaz[i]==bHalmaz[j]){
        	let teszt=false
            for(l=0;l<aKozosbSzurt.length;l++){
            	if(aHalmaz[i]==aKozosbSzurt[l]){
                teszt=true
                }
            }
            if(teszt==false){
            aKozosbSzurt.push(aHalmaz[i])
            }
        }
    }
    let teszt=false
    for(k=0;k<aKozosbSzurt.length;k++){
    	if(aHalmaz[i]==aKozosbSzurt[k]){
        	teszt=true
        }
    }
    if(teszt==false){
    	let teszt1=false
    	for(m=0;m<aKulonbsegbSzurt.length;m++){
        	if(aHalmaz[i]==aKulonbsegbSzurt[m]){
            	teszt1=true
            }
        }
        if(teszt1==false){
        aKulonbsegbSzurt.push(aHalmaz[i])
        }
    }
}
/*document.write(`<br>Szűrt A közös B:   `)  
document.write(aKozosbSzurt)*/
document.write(`Halmaz elemei: `)  
document.write(aKulonbsegbSzurt)

document.write(`<hr>`)

//A különbség B halmaz, szűrt, függvénnyel
document.write(`<h4>A különbség B - szűrt, függvénnyel</h4>`)
function aKulonbsegbSzurtFuggveny(halmaz1,halmaz2){
let aKozosbSzurtHalmaz=[]
let aKulonbsegbSzurtHalmaz=[]
for(i=0;i<halmaz1.length;i++){
	for(j=0;j<halmaz2.length;j++){
    	if(halmaz1[i]==halmaz2[j]){
        	let teszt=false
            for(l=0;l<aKozosbSzurtHalmaz.length;l++){
            	if(halmaz1[i]==aKozosbSzurtHalmaz[l]){
                teszt=true
                }
            }
            if(teszt==false){
            aKozosbSzurtHalmaz.push(halmaz1[i])
            }
        }
    }
    let teszt=false
    for(k=0;k<aKozosbSzurtHalmaz.length;k++){
    	if(halmaz1[i]==aKozosbSzurtHalmaz[k]){
        	teszt=true
        }
    }
    if(teszt==false){
    	let teszt1=false
    	for(m=0;m<aKulonbsegbSzurtHalmaz.length;m++){
        	if(halmaz1[i]==aKulonbsegbSzurtHalmaz[m]){
            	teszt1=true
            }
        }
        if(teszt1==false){
        aKulonbsegbSzurtHalmaz.push(halmaz1[i])
        }
    }
}
return aKulonbsegbSzurtHalmaz
}
document.write("Halmaz elemei: "+aKulonbsegbSzurtFuggveny(aHalmaz,bHalmaz))  

document.write(`<hr>`)
document.write(`<hr>`)
document.write(`<h3 style=text-align:center>🔴🟠🟡🟢🔵 B különbség A 🔵🟢🟡🟠🔴</h3>`)

document.write(`<br>🅰 halmaz elemei: `)
for(i=0;i<aHalmaz.length;i++){
	document.write(aHalmaz[i]+",")
}
document.write(`<br>🅱 halmaz elemei: `)
for(i=0;i<bHalmaz.length;i++){
	document.write(bHalmaz[i]+",")
}

//b különbség a - szűretlen
document.write(`<hr>`)
document.write(`<h4>B különbség A - szűretlen</h4>`)
let bKozosaSzuretlen=[]
let bKulonbsegaSzuretlen=[]
for(i=0;i<bHalmaz.length;i++){
	for(j=0;j<aHalmaz.length;j++){
    	if(bHalmaz[i]==aHalmaz[j]){
            bKozosaSzuretlen.push(bHalmaz[i])
        }
    }
    let teszt=false
    for(k=0;k<bKozosaSzuretlen.length;k++){
    	if(bHalmaz[i]==bKozosaSzuretlen[k]){
        	teszt=true
        }
    }
    if(teszt==false){
        bKulonbsegaSzuretlen.push(bHalmaz[i])
    }
}
/*document.write(`Szűretlen A metszet B elemei:   `)  
document.write(aKozosbSzuretlen)*/
document.write(`Halmaz elemei: `)  
document.write(bKulonbsegaSzuretlen)

document.write(`<hr>`)

//a különbség b - szűretlen, függvénnyel
document.write(`<h4>B különbség A - szűretlen, függvénnyel</h4>`)
function bKulonbsegaFuggveny(halmaz1, halmaz2){
let bKozosaSzuretlenHalmaz=[]
let bKulonbsegaSzuretlenHalmaz=[]
for(i=0;i<halmaz2.length;i++){
	for(j=0;j<halmaz1.length;j++){
    	if(halmaz2[i]==halmaz1[j]){
            bKozosaSzuretlenHalmaz.push(halmaz2[i])
        }
    }
    let teszt=false
    for(k=0;k<bKozosaSzuretlenHalmaz.length;k++){
    	if(halmaz2[i]==bKozosaSzuretlenHalmaz[k]){
        	teszt=true
        }
    }
    if(teszt==false){
        bKulonbsegaSzuretlenHalmaz.push(halmaz2[i])
    }
}
return bKulonbsegaSzuretlenHalmaz
}
document.write("Halmaz elemei: "+bKulonbsegaFuggveny(aHalmaz,bHalmaz))  

document.write(`<hr>`)

//A különbség B halmaz, szűrt
document.write(`<h4>B különbség A - szűrt</h4>`)
let bKozosaSzurt=[]
let bKulonbsegaSzurt=[]
for(i=0;i<bHalmaz.length;i++){
	for(j=0;j<aHalmaz.length;j++){
    	if(bHalmaz[i]==aHalmaz[j]){
        	let teszt=false
            for(l=0;l<bKozosaSzurt.length;l++){
            	if(bHalmaz[i]==bKozosaSzurt[l]){
                teszt=true
                }
            }
            if(teszt==false){
            bKozosaSzurt.push(bHalmaz[i])
            }
        }
    }
    let teszt=false
    for(k=0;k<bKozosaSzurt.length;k++){
    	if(bHalmaz[i]==bKozosaSzurt[k]){
        	teszt=true
        }
    }
    if(teszt==false){
    	let teszt1=false
    	for(m=0;m<bKulonbsegaSzurt.length;m++){
        	if(bHalmaz[i]==bKulonbsegaSzurt[m]){
            	teszt1=true
            }
        }
        if(teszt1==false){
        bKulonbsegaSzurt.push(bHalmaz[i])
        }
    }
}
/*document.write(`<br>Szűrt A közös B:   `)  
document.write(aKozosbSzurt)*/
document.write(`Halmaz elemei: `)  
document.write(bKulonbsegaSzurt)

document.write(`<hr>`)

//A különbség B halmaz, szűrt, függvénnyel
document.write(`<h4>B különbség A - szűrt, függvénnyel</h4>`)
function bKulonbsegaSzurtFuggveny(halmaz1,halmaz2){
let bKozosaSzurtHalmaz=[]
let bKulonbsegaSzurtHalmaz=[]
for(i=0;i<halmaz2.length;i++){
	for(j=0;j<halmaz1.length;j++){
    	if(halmaz2[i]==halmaz1[j]){
        	let teszt=false
            for(l=0;l<bKozosaSzurtHalmaz.length;l++){
            	if(halmaz2[i]==bKozosaSzurtHalmaz[l]){
                teszt=true
                }
            }
            if(teszt==false){
            bKozosaSzurtHalmaz.push(halmaz2[i])
            }
        }
    }
    let teszt=false
    for(k=0;k<bKozosaSzurtHalmaz.length;k++){
    	if(halmaz2[i]==bKozosaSzurtHalmaz[k]){
        	teszt=true
        }
    }
    if(teszt==false){
    	let teszt1=false
    	for(m=0;m<bKulonbsegaSzurtHalmaz.length;m++){
        	if(halmaz2[i]==bKulonbsegaSzurtHalmaz[m]){
            	teszt1=true
            }
        }
        if(teszt1==false){
        bKulonbsegaSzurtHalmaz.push(halmaz2[i])
        }
    }
}
return bKulonbsegaSzurtHalmaz
}
document.write("Halmaz elemei: "+bKulonbsegaSzurtFuggveny(aHalmaz,bHalmaz))  

document.write(`<hr>`)

document.write(`<h3 style=text-align:center>🔴🟠🟡🟢🔵 szerepelE függvény 🔵🟢🟡🟠🔴</h3>`)

function szerepelEBovitett(alapHalmaz,letrehozandoHalmaz){
for(i=0;i<(alapHalmaz.length);i++){
    let szerepelErtek=false
    for(z=0;z<letrehozandoHalmaz.length;z++){
    	if(alapHalmaz[i]==letrehozandoHalmaz[z]){
        szerepelErtek=true
        }
    }
    if(szerepelErtek==false){
    letrehozandoHalmaz.push(alapHalmaz[i])
    }
}
return letrehozandoHalmaz
}

function szerepelE(alapHalmaz,letrehozandoHalmaz){
    let szerepelErtek=false
    for(t=0;t<letrehozandoHalmaz.length;t++){
    	if(alapHalmaz[i]==letrehozandoHalmaz[t]){
        szerepelErtek=true
        }
    }
    if(szerepelErtek==false){
    letrehozandoHalmaz.push(alapHalmaz[i])
    }
return letrehozandoHalmaz
}

document.write(`<h4>1. próba: unió, szűrt</h4>`)
let unioSzurt2=[]
szerepelEBovitett(aHalmaz,unioSzurt2)
szerepelEBovitett(bHalmaz,unioSzurt2)
document.write(`Halmaz elemei: `)
document.write(unioSzurt2)

document.write(`<hr>`)

document.write(`<h4>2. próba: unió, szűrt</h4>`)
let unioSzurt3=[]
for(i=0;i<(aHalmaz.length);i++){
szerepelE(aHalmaz,unioSzurt3)
}
for(i=0;i<(bHalmaz.length);i++){
szerepelE(bHalmaz,unioSzurt3)
}
document.write(`Halmaz elemei: `)
document.write(unioSzurt3)

document.write(`<hr>`)

document.write(`<h4>3. próba: metszet, szűrt</h4>`)
let metszetSzurt2=[]
for(i=0;i<aHalmaz.length;i++){
	for(j=0;j<bHalmaz.length;j++){
    	if(aHalmaz[i]==bHalmaz[j]){
        	szerepelE(aHalmaz,metszetSzurt2)
        }
    }
}
document.write(`Halmaz elemei: `)  
document.write(metszetSzurt2)

document.write(`<h4>4. próba: A különbség B, szűrt</h4>`)

let aKozosbSzurt2=[]
let aKulonbsegbSzurt2=[]
for(i=0;i<aHalmaz.length;i++){
	for(j=0;j<bHalmaz.length;j++){
    	if(aHalmaz[i]==bHalmaz[j]){
        	szerepelE(aHalmaz,aKozosbSzurt2)
        }
    }
    let teszt=false
    for(k=0;k<aKozosbSzurt2.length;k++){
    	if(aHalmaz[i]==aKozosbSzurt2[k]){
        	teszt=true
        }
    }
    if(teszt==false){
    	szerepelE(aHalmaz,aKulonbsegbSzurt2)
    }
}
document.write(`Halmaz elemei: `)  
document.write(aKulonbsegbSzurt2)

</script>

