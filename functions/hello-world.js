exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Winston Klein!"
    }

    callback(null, result);
  };
