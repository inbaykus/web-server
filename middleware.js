

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private Route Hit!');
		next();
	},
	logger: function (req, res, next){
		new Date().toString()
		console.log(req.method);
		next();
	}
};


module.exports = middleware;