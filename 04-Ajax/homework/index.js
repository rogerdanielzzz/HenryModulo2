$("#boton").click(function () {
    let lista = document.getElementById("lista")
    lista.innerHTML =""
     $.get("http://localhost:5000/amigos", function (data) {
        
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement("li")
            li.innerHTML = data[i].name
            lista.append(li)
        }
    });
});

$("#search").click(function () {
    let index = $("#input").val()
    $.get("http://localhost:5000/amigos/" + index, function (data) {
        let amigoSpan = document.getElementById("amigo")
        amigoSpan.innerHTML = data.name
    });
});

$("#delete").click(function () {
 console.log ( "delete")
 let index = $("#inputDelete").val()
 $.ajax({
    url: 'http://localhost:5000/amigos/'+index,
    type: 'DELETE',
    success: function(result) {
        // Do something with the result
        let deleteSuccess = document.getElementById("success")
        deleteSuccess.innerHTML = "Tu amigo fue borrado con exito" 
     }
     
});

});

