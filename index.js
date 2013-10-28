var Emitter = require('emitter');
var dom = require('dom');

module.exports = function(elOrHtml) {
    var controller = Emitter({
        dom:dom(elOrHtml||'<div></div>')
    });
    controller.trigger = controller.emit;
    return controller;
};
