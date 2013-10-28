dom-controller
==============
Simple controller for component views

### Prerequisites
Knowledge and understanding of the [Component Framework](http://github.com/component/component)

### Usage
    var controller = require('dom-controller');
    var view = require('./view'); //pre-compiled view

    module.exports = function() {

      var $ = controller(view({
        title:'hello world'
      ));
      
      $.load = function(data) {
        //apply more data to view
      }
      
      //handle interaction with view and emit controller event
      var goLink = $.dom.find('.go-link');
      goLink.on('click', function(e) {
        $.emit('goSelected');
        e.preventDefault();
        return false;
      });
      
      return $;
    }
