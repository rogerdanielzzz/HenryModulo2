$("#boton").click(function () {
    let lista = document.getElementById("lista")
    lista.innerHTML = ""
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
    console.log("delete")
    let index = $("#inputDelete").val()
    $.ajax({
        url: 'http://localhost:5000/amigos/' + index,
        type: 'DELETE',
        success: function (result) {
            // Do something with the result
            let deleteSuccess = document.getElementById("success")
            deleteSuccess.innerHTML = "Tu amigo fue borrado con exito"
        }

    });

});



var maxSequence = function (arr) {
    if (arr.length === 0) return 0

    let minIndex = 0
    let maxIndex = 0
    let maxResult = 0
    let maxIndexResult = 0
    let papa = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 1) {
            if (i == minIndex) minIndex++
            continue
        } else if ((arr[i] + arr[i + 1]) <= 0) {
            if (i == minIndex) minIndex++
            continue
        } else {

            let maximo = 0
            let sumatoria = 0
            maxIndex = 0
            for (let j = i; j < arr.length; j++) {
                console.log(j)
                sumatoria += arr[j]

                if (sumatoria > maximo) {

                    maximo = sumatoria
                    console.log("x=" + j + " entro el " + arr[j] + " el nuevo maximo es " + maximo)
                    maxIndex = j
                } else if (sumatoria <= 0) {
                    sumatoria = 0
                    maximo = 0
                    maxIndex = 0
                    minIndex++
                }
            }

            if (maxIndex > maxIndexResult) maxIndexResult = maxIndex
            if (maximo > maxResult) maxResult = maximo
        }
    }
    console.log(minIndex, maxIndexResult, maxResult)
}

