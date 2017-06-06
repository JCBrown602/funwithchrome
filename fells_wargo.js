//alert("Fells Wargo!!!");

var acctSumTxt = document.getElementsByTagName("H1");

if (acctSumTxt[0].innerHtml = "Account Summary") {
	getUserInput();
}

function getUserInput() {
	//var acctSumTxt = document.getElementsByTagName("H1");
	var input = prompt("Enter something for the Account Summary title: ", acctSumTxt[0].innerHTML);
	if (input == null || input == "") {
		input = "Dis is yo monies.";
	}
	acctSumTxt[0].innerHTML = input;
}