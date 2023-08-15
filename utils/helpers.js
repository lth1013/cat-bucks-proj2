const handlebars = require("handlebars");

handlebars.registerHelper(
  "isEqual",
  function (valueToCompare, targetValue, options) {
    if (valueToCompare === targetValue) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  }
);
