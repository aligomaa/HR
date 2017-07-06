        $('[data-toggle=tooltip]').tooltip();
        $(document).ready(function(){
          $("#demoTab").easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion           
            width: 'auto', //auto or any custom width
            fit: true,   // 100% fits in a container
            //activate: function() {} // Callback function, gets called if tab is switched
          });

          $('.hide_icon').tooltip();

          $(".menu_icon_collapse").click(function(){
            $('.glyph-icon , .fa-icon').toggle();
            $('.ca-sub').toggleClass("margin-0");
            $('.page_content').toggleClass("padding_page1");
          });
          $(".hide_tabs").click(function(){
           $('.icon-tittle').toggleClass("ds-none");
           $('.restab-icon2').toggleClass("ds-block");
           $('.resp-vtabs ul.resp-tabs-list').toggleClass("l-tab");
           $('.resp-tabs-container').toggleClass("r-tab");

         });
          $(".collaps_menu").click(function(){
            $('.navbar-nav').slideToggle(100);
            $('.navbar-header').slideToggle(100);
            $('.page_content').toggleClass("padding_page1");
            $('.page_content').toggleClass("padding_page");
          });



        });