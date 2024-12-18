// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

for (let i = 1; i <= 100; i++) {
    // SE i è multiplo di 3 e multiplo di 5 sarà fizzbuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");

    // I multipli di 3 saranno "fizz"
    } else if (i % 3 === 0) {
        console.log("fizz");

    // I multipli di 5 saranno "buzz"   
    } else if (i % 5 === 0) {
        console.log("buzz");

    // numeri che non sono multipli di 3 e/o 5
    } else {
        console.log(i);
        
    }
}