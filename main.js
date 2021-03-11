console.log("ciao ale");

//inizializzazione variabile che si riferisce all'div da aprire e chiudere
var menu = ".hamburger-menu"

//puntamento al bottone/icona del hamburger-menu
$(".fas.fa-bars").click(function () {
	//puntamento all'hamburgher-menu ed successiva apertura
	$(menu).show()
})

//puntamento al bottone/icona del chiusura dell'hamburger-menu
$(".fas.fa-times").click(function () {
	//puntamento all'hamburgher-menu ed successiva chiusura
	$(menu).hide()
})