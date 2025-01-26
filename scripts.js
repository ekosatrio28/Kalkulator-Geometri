function calculate(event) {
    event.preventDefault();

    var choice = document.getElementById('choice').value;
    var n = parseInt(document.getElementById('n').value);
    var a = parseFloat(document.getElementById('a').value);
    var r = parseFloat(document.getElementById('r').value);
    var u = parseFloat(document.getElementById('u').value);
    var resultText = '';

    if (choice === 'r') {
        if (n > 1 && !isNaN(a) && !isNaN(u)) {
            var ratio = Math.pow(u / a, 1 / (n - 1));
            resultText = 'Rasio (r) adalah: ' + ratio;
        } else {
            resultText = 'Masukkan nilai n yang lebih besar dari 1, nilai a, dan nilai Un untuk menghitung rasio (r).';
        }
    } else if (choice === 'u') {
        if (!isNaN(r) && !isNaN(a)) {
            var un = a * Math.pow(r, n - 1);
            resultText = 'Suku ke-' + n + ' (Un) adalah: ' + un;
        } else {
            resultText = 'Masukkan nilai rasio (r) dan nilai a untuk menghitung suku ke-n (Un).';
        }
    } else if (choice === 'sn') {
        if (!isNaN(r) && !isNaN(a)) {
            var sn = a * (Math.pow(r, n) - 1) / (r - 1);
            resultText = 'Jumlah ' + n + ' suku (Sn) adalah: ' + sn;
        } else {
            resultText = 'Masukkan nilai rasio (r) dan nilai a untuk menghitung jumlah n suku (Sn).';
        }
    }

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>' + resultText + '</p>';
    resultDiv.style.display = 'block';
}

function updateForm() {
    var choice = document.getElementById('choice').value;
    var uInput = document.getElementById('u');
    var uLabel = document.getElementById('label_u');
    var rInput = document.getElementById('r');
    var rLabel = document.getElementById('label_r');
    
    if (choice === 'r') {
        uInput.style.display = 'block';
        uLabel.style.display = 'block';
        rInput.style.display = 'none';
        rLabel.style.display = 'none';
        rInput.value = '';
    } else if (choice === 'u') {
        uInput.style.display = 'none';
        uLabel.style.display = 'none';
        rInput.style.display = 'block';
        rLabel.style.display = 'block';
        uInput.value = '';
    } else if (choice === 'sn') {
        uInput.style.display = 'none';
        uLabel.style.display = 'none';
        rInput.style.display = 'block';
        rLabel.style.display = 'block';
        uInput.value = '';
    }
}

window.onload = function() {
    updateForm();
}