var Antenna = require('./modelo/antenna');
var Controller = require ('./controller');

module.exports = function(app) {

	// return all antennas
	app.get('/api/antenna', Controller.getAntenna);
	// Create a new Antenna
	app.post('/api/antenna', Controller.setAntenna);
	// Modify data of Antenna
	app.put('/api/antenna/:antenna_id', Controller.updateAntenna);
	// Delete an Antenna
	app.delete('/api/antenna/:antenna_id', Controller.removeAntenna);

	// application -------------------------------------------------------------
  
  app.get('/',function(req, res){//get,put,post,delete   
      res.sendFile(__dirname + './angular/index.html');
    });
  
};