var grid = document.getElementById("grid");
var sortable = new Sortable(grid, {
	forceFallback: true,
	animation: 250,
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