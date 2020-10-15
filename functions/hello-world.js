exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Winston!"
    }

    callback(null, result);
  };
