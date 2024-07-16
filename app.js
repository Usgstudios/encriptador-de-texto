document.getElementById("encriptar").addEventListener("click", function() {
    let textArea1 = document.getElementById("text1");
    let text = textArea1.value.toLowerCase();
    textArea1.value = text;

    // Encriptar el texto
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById("text2").value = encryptedText;
});

document.getElementById("desencriptar").addEventListener("click", function() {
    let text = document.getElementById("text1").value.toLowerCase();

    // Desencriptar el texto
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");

    document.getElementById("text2").value = decryptedText;
});

document.getElementById("copiar").addEventListener("click", function() {
    let text = document.getElementById("text2").value;

    navigator.clipboard.writeText(text).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        console.error("Error al copiar el texto: ", err);
    });
});


