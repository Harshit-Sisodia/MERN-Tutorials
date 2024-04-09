// console.log("hello")

function fetchApi(){
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi%2?unitGroup=us&key=WEVZPTCNKBEKFSY77276LNWZW";
    fetch(url)
    .then((res)=> res.json())
    console.log(data);
}

function renderUI(data){
    const days = data.days;
    console.log(days);

    const row = document.createElement("tr");

    let cell = document.createElement("th");
    cell.innerText='Date';
    row.appendChild(cell);

    const cell2 = document.createElement("th");
    cell2.innerText='Minimum Temperature';
    row.appendChild(cell2);

    
    const cell3 = document.createElement("th");
    cell2.innerText='Maximum Temperature';
    row.appendChild(cell3);

    root.append(row);

    const childRow = document.createElement("row");
    const c1=document.createElement('th');
    cell1.innerText='Date';
    childRow.appendChild;
    
} 
    


fetchApi()

