var cards = document.getElementById("cards");
var sortable = new Sortable(cards, {
	forceFallback: true,
	delay: 5,
	delayOnTouchOnly: true,
	animation: 450,
	dataIdAttr: "id",
	store: {
		get: function (sortable) {
  			var order = localStorage.getItem(sortable.options.group.name);
  			return order ? order.split("|") : [];
		},
		set: function (sortable) {
			var order = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, order.join("|"));
    	},
	}
});


// var links = document.links;
// for (var i = 0; i < links.length; i++) {
//      links[i].target = "_blank";
// }