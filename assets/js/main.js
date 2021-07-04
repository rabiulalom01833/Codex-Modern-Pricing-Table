(function ($) { 
	"use strict"; // this function is executed in strict mode	
  
	  
    
    $(document).ready(function (){ 
        var pricingTable = $('.pricing-table-js');
        pricingTableMouseLeave( pricingTable );
        pricingTable.find('.table-single').on('mouseenter', function() {
          var action        = $(this);
    
          pricingTable.find('.active').removeClass('active');
          action.addClass('active');
        });
    
        // When mouse leave this pricing table this time actime before active pricing pabel
        // If you do not use this code comment this function. Like this /* ..code.. */
        pricingTable.find('.table-single').on('mouseleave', function() {
          pricingTableMouseLeave( pricingTable );
        });
    
        function pricingTableMouseLeave( pricingTable ) {
            pricingTable.find('.active').removeClass('active');
            pricingTable.find('.open').addClass('active');
        }
    });    

    $(document).ready(function() { 

      (function ($) { 
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        
        $('.tab ul.tabs li a').click(function (g) { 
          var tab = $(this).closest('.tab'), 
            index = $(this).closest('li').index();
          
          tab.find('ul.tabs > li').removeClass('current');
          $(this).closest('li').addClass('current');
          
          tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
          tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
          
          g.preventDefault();
        } );
      })(jQuery);
    
    });
    
			
})(jQuery);	
  