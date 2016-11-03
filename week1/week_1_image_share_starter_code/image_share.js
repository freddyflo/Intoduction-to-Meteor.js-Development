if (Meteor.isClient){
    var img_data = [
    {
        img_src: "laptops.jpg",
        img_alt: "some laptops"
    },
    {
        img_src: "bass.jpg",
        img_alt: "bass player",
    },
    {
        img_src: "beard.jpg",
        img_alt: "some musician with beard",
    }
    ];
    
    Template.images.helpers({images:img_data});
    Template.images.events({
        'click.js-image': function(event){
            $(event.target).css("width", "50px");
            //alert('hello!!');
        }
    })
    console.log("I am the client");
}   // end isClient


if (Meteor.isServer){
	//Meteor.startup(function(){
		// code to run on server at startup
            console.log("I am the server");
	}
