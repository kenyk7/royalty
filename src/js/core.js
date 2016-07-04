// ==== MAIN ==== //

// A simple wrapper for all your custom jQuery; everything in this file will be run on every page
;(function($){
  $(function(){

    /**
     * Initialize plugins
    */

    // Bootstrap
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

  	/**
  	 * Initialize vars
  	 * @type {int,string,boolean}
  	*/


    /**
     * Initialize functions
    */


    /**
     * Dom events run
    */
    console.log('Hello world');

  });
}(jQuery));
