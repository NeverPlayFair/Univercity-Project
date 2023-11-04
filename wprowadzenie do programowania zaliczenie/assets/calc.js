// Bartosz Borek

// Wybieramy element z klasą display poprzez  document.querySelector
const display = document.querySelector(".display");

// Wybieramy wszystkie przycisku poprzez  document.querySelectorAll
const buttons = document.querySelectorAll("button");

// Tworzymy tablicę ze znakami niezbędnymi w kalkulatorze
const specialChars = ["%", "*", "/", "-", "+", "="];

// Tworzymy pusty ciąg 
let output = "";

// Sprawdzamy, czy wartość przycisku to "=", a "output" nie jest pusty
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
        // Jeśl ciąg nie jest pusty, to obliczamy wyrażenie zawarte w "output" i zastępujemy "%" przez "/100"
    }
    // Sprawdzamy, czy wartość przycisku to "AC" jesli btnValue === "AC" to czyścimy rozwiązanie
    else if (btnValue === "AC") {
        output = "";
    } 
    // Sprawdzamy, czy wartość przycisku to "AC" jesli btnValue === "DEL" usuwamy ostatni znak z "output"
    else if (btnValue === "DEL") {
        output = output.slice(0, -1);
    } 
    //Jesli "output" jest pusty i wartość przycisku jest specjalnym znakiem, zwracamy się z funkcji
    else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    // Przypisujemy wartość "output" do właściwości "value" elementu "display"
    display.value = output;
};

// Dodajemy nasłuchiwanie na kliknięcie przycisku i wywołujemy funkcję "calculate" z wartością przycisku jako argumentem

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});