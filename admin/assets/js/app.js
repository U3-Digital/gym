function buscaJS(name) {
    if(name != ""){
        fetchSearchData(name);
    }
}


function fetchSearchData(name){
    fetch('views/liveSearch.php', { // ubicacion del archivo que hace la consulta segun el nombre
        method: "POST",            // que le enviamos por metodo POST
        body: new URLSearchParams('name=' + name)
    })
    .then(res => res.json())
    .then(res => viewSearchResult(res))
    .catch(e => console.error('Error: ' + e))
}



function viewSearchResult(data){
    const lista = Object.entries(data).length;
    const contenido = document.getElementById("resultados");

    contenido.innerHTML="";

    var a = 1, b = 2;

    for (let i = 0; i < lista; i++){
        var div = document.createElement("div");
        div.class = "row";
        div.innerHTML = `
            <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-12">
                    <div class="card">
                        <div class="card-body" id="resultados">
                            <h3>Id: ${data[i]["idCliente"]} </h3>
                            <h3>Nombre: ${data[i]["nombres"] +" "+data[i]["apellidos"]}  </h3>
                            <h3>Fecha: ${data[i]["fechaRegistro"]} </h3>
                        </div>
                    </div>
                </div>
            </div>
        `;

        contenido.appendChild(div);

    }


    
    // var div = document.createElement('div');
    // div.setAttribute('class', 'post block bc2');
    // div.innerHTML = `
    //     <div class="parent">
    //         <div class="child">${a}</div>
    //         <div class="child">+</div>
    //         <div class="child">${b}</div>
    //         <div class="child">=</div>
    //         <div class="child">${a + b}</div>
    //     </div>
    // `;
    // document.getElementById('posts').appendChild(div);


//     var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

// document.getElementById("main").appendChild(div);
// OR
// document.body.appendChild(div);

//     <div class="row">
//         <div class="col-xl-8 col-lg-8 col-md-12">
//             <div class="card">
//                 <div class="card-header">
//                     <h3 class="card-title">Last Year Overview</h3>
//                 </div>
//                 <div class="card-body" id="resultados">
//                     <h3>Id: <span id="id"></span> </h3>
//                     <h3>Nombre: <span id="nombre"></span> </h3>
//                     <h4>Fecha: <span id="fecha"></span> </h4>
//                 </div>
//             </div>
//         </div>
//     </div>


    // if (Object.entries(data).length > 0){    // Object.entries(data).length   Valida si el objeto esta vacio o no 
    //     document.getElementById("id").innerHTML = data[0]["idCliente"];
    //     document.getElementById("nombre").innerHTML = data[0]["nombres"];
    //     document.getElementById("fecha").innerHTML = data[0]["fechaRegistro"];
    // }else{
    //     document.getElementById("id").innerHTML = "No encontrado";
    //     document.getElementById("nombre").innerHTML = ""
    //     document.getElementById("fecha").innerHTML = "";
    // }


}