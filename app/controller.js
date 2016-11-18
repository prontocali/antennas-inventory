var Antenna = require('./modelo/antenna');


// Get all antenna objects from database
exports.getAntenna = function (req, res){
	Antenna.find(
		function(err, antenna) {
			if (err)
				res.send(err)
					res.json(antenna); // return all Antennas in JSON		
				}
			);
}

// Save an Antenna object in database
exports.setAntenna = function(req, res) {

		// create antenna object
		Antenna.create(
			{name : req.body.name,	ubiety: req.body.ubiety, power: req.body.power}, 
			function(err, antenna) {
				if (err)
					res.send(err);

				// Get and return all antennas after create one of them
				Antenna.find(function(err, antenna) {
				 	if (err)
				 		res.send(err)
				 	res.json(antenna);
				});
			});

	}

// Edit an antenna object from database
exports.updateAntenna = function(req, res){
	Antenna.update( {_id : req.params.antenna_id},
					{$set:{name : req.body.name,	ubiety: req.body.ubiety, power: req.body.power}}, 
					function(err, antenna) {
						if (err)
							res.send(err);

				// Get and return all antennas after edit one of them
				Antenna.find(function(err, antenna) {
				 	if (err)
				 		res.send(err)
				 	res.json(antenna);
				});
			});
	}

// Delete an antenna object from database
exports.removeAntenna = function(req, res) {
	Antenna.remove({_id : req.params.antenna_id}, function(err, antenna) {
		if (err)
			res.send(err);

			// Get and return all antennas after delete one of them
			Antenna.find(function(err, antenna) {
				if (err)
					res.send(err)
				res.json(antenna);
			});
		});
}