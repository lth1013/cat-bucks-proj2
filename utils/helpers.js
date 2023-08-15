// Assuming you're using Handlebars library
const Handlebars = require('handlebars');

// Define the custom helper
Handlebars.registerHelper('eq', function(a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this);
});