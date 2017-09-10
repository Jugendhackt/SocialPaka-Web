//get required npm packages
var requestify = require('requestify');
var vCard = require('vcards-js');

//for demo purposes
var name = 'demo'

//create a new vCard
vCard = vCard();

/* activate for debugging
	requestify.get('http://10.172.3.201:9253/user?name='+name)
	.then(function(response) {
		console.log(response.getCode()); // Some code between 200-299
	})
	.fail(function(response) {
		console.log(response.getCode()); // Some error code such as, for example, 404
    });*/

//get data with GET from server
requestify.get('http://10.172.3.201:9253/user?name=' + name).then(function(response) {

    // Get the response body
    var Body = response.getBody();
    
    //vCard properties
	vCard.firstName = Body.fullName.substring(0, Body.fullName.lastIndexOf(" "));
    vCard.lastName = Body.fullName.substring(Body.fullName.lastIndexOf(" ") + 1, Body.fullName.length);
	vCard.email = Body.email;
    vCard.workPhone = Body.phone;
    
	//save to vcf file
    vCard.saveToFile('./' + name + '.vcf');
    
	//get as formatted string in console log
	console.log(vCard.getFormattedString());
});