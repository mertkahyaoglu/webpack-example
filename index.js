var Ractive = require("ractive")

var ractive = new Ractive({
  el: "app",
  template: require('./template.html'), // or require('ractive!./mytemplate.html') w/o changing webpack config
  data: require("./person"),
  computed: {
    greet: '"Hi " + ${firstname} + " " + ${lastname} +"!"'
  }
});

ractive.observe( 'greet', function ( greet ) {
  console.log( 'New Greet ', greet );
}, { init: false });
