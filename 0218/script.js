
function letrehoz(){
    let oszlopok=document.getElementById("oszlopok").value;
    let sorok=document.getElementById("sorok").value;
    let table = document.createElement("table");
    let container=document.getElementById("table");
    let vastagsag = document.getElementById("keret").value;

    for (i=0;i<sorok;i++){
        let sor =document.createElement("tr");
        for(j=0;j<oszlopok;j++){
            let item =document.createElement("td");
            let szam =Math.floor(Math.random()*9000+1000); 
            item.innerText=szam;

    let vastagsag = document.getElementById("keret").value;
    item.style.border=vastagsag+"px solid black";

            sor.appendChild(item);
        }
        table.appendChild(sor);
    };
    container.appendChild(table)
    container.appendChild(document.createElement("hr"));

    if( document.getElementById("osszezar").checked){table.style.borderCollapse="collapse"}
    
    


}
