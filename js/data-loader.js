var Families = function(obj) {
	let _families = [];

	obj.loadData = () => {
		$.ajax({
			url: 'js/directory.json'
		}).done((data)=>{
			data.families.forEach(item => {
				_families.push(item);
			});
		});
	};
	obj.getData = () => {
		return _families;
	};
	obj.addFamily = (data) => {
		_families.push(data);
	};
	return obj;
}(Families || {});

Families.loadData();