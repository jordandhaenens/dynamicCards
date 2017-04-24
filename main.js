function makeCard(id){
	var value = document.getElementById("text").value;
	var placement = document.getElementById("outputArea");
	var card = `<div class="card" id="card${id}">
					<hr><p class="cardP">${value}</p><hr>
					<input type="button" onclick="deleteCard('card${id}')" value="You Can Delete Me!">
				</div>`;
	placement.innerHTML += card;
	idNumber++;
}

function deleteCard(id){
	var card = document.getElementById(id);
	card.remove();
	idNumber--;
}


var idNumber = 1;


var input = document.getElementById("submit");
input.addEventListener("click", function(){
	makeCard(idNumber);
});


