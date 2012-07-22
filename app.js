var rb = require('./rebeccablack');

console.log(rb.getDate());
try {
	var seat = rb.chooseSeat();

}
catch (e) {
	console.log (e);
}