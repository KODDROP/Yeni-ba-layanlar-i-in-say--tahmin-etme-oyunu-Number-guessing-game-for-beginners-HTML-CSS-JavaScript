var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 0;
var guessLimit = 7; // Hakkınız var

function checkGuess() {
    var guess = parseInt(document.getElementById("guessInput").value);
    var result = document.getElementById("result");
    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.innerHTML = "Lütfen 1 ile 100 arasında geçerli bir sayı girin.";
    } else {
        guessCount++;
        if (guess === randomNumber) {
            result.innerHTML = "Tebrikler! Numarayı tahmin ettin!";
            document.getElementById("correctSound").play();
            guessCount = guessLimit;
        } else if (guess < randomNumber) {
            result.innerHTML = "Çok Düşük";
        } else {
            result.innerHTML = "Çok Yüksek";
        }
        if (guessCount === guessLimit) {
            result.innerHTML += "Oyun Bitti! Numara Şuydu: " + randomNumber + "";

        } else {
            result.innerHTML += " " + (guessLimit - guessCount) + "Tahmin hakkın kaldı.";
            document.getElementById("wrongSound").play();
        }
    }
}