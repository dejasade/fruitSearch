const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.onkeyup = function (){ //eventlistener
	let results = []; 
	let search = input.value; //user input
		if(search.length){ //if user types anything
			results = fruit.filter((str) => { //filters through fruit array
			return	str.toLowerCase().includes(search.toLowerCase()); //return string if it's included in the search (case sensitive)
			});
			console.log(results)
		}
		showSuggestions(results);
	}


function showSuggestions(results) {
	//take results create a map, loop through the arr and add li element
	const content = results.map((inputVal) =>{
		return "<li onclick=useSuggestion(this)>" + inputVal + "</li>";
	});
	// display content on webpage in ul
	suggestions.innerHTML = "<ul>" + content.join('') + "</ul>"
}


function useSuggestion(inputVal) {
	input.value = inputVal.innerHTML;
	suggestions.innerHTML = '';
}
