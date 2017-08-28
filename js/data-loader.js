var Families = function(obj) {
	let _families = [];

	obj.loadData = () => {
		$.ajax({
			url: 'js/directory.json'
		}).done((data)=>{
			data.families.forEach(item => {
				_families.push(item);
			});
			console.log("working");
		});
	};
	obj.getData = () => {
		console.log("_families", _families);
		return _families;
	};
	obj.addFamily = (data) => {
		_families.push(data);
	};
	return obj;
}(Families || {});