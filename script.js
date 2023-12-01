$(document).ready(function() {
    let correctas = [3, 1, 2, 2, 3];
    let opcion_elegida = [];
    let cantidad_correctas = 0;

    
    for (let i = 0; i < 5; i++) {
        let savedOption = localStorage.getItem(`opcion_pregunta_${i}`);
        if (savedOption !== null) {
            opcion_elegida[i] = savedOption;
            $(`input[name="p${i}"][value="${savedOption}"]`).prop('checked', true);
        }
    }

    $('input[type="radio"]').on('click', function() {
        let num_pregunta = $(this).closest('section').index();
        opcion_elegida[num_pregunta] = $(this).val();

        let id = "p" + num_pregunta;
        let labels = $("#" + id + " label");

        labels.css("background-color", "white");
        $(this).parent().css("background-color", "#cec0fc");

        
        localStorage.setItem(`opcion_pregunta_${num_pregunta}`, opcion_elegida[num_pregunta]);
    });

    $('button.corregir-button').on('click', function() {
        corregir();
    });

    function corregir() {
        cantidad_correctas = 0;
        for (let i = 0; i < correctas.length; i++) {
            if (correctas[i] == opcion_elegida[i]) {
                cantidad_correctas++;
            }
        }
        $("#resultado").text(cantidad_correctas);

        if (cantidad_correctas === correctas.length) {
            mostrarMensaje("Felicidades, todas son correctas");
        }
    }

    function mostrarMensaje(mensaje) {
        alert(mensaje);
    }

    $("#menu-icon").on("click", function() {
        $("#menu").slideToggle();
    });

    $("#menu").on("click", "p", function() {
        $("#menu").slideUp();
    });
    

    

    
});


