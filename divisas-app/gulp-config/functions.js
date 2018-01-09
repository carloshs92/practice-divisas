var Plugins   = require('./plugins');
var Functions = {};

Functions.successHandler = function(data){
  Plugins.notifier.notify({
    title   : 'Frontend Notify',
    message : 'Tarea terminada'
  });
};

module.exports = Functions;
