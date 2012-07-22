var Rebecca = require('../')
  , client = new Rebecca()
  ;

try {
  var seat = client.chooseSeat();
}
catch (e) {
  console.log (e);
}