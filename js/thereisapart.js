(function($){

  obj1= {

    init:function(){
      this.button();
    },
    
    button:function(){
      const btn = $('#search-btn')
      let apart = ' ';

      $(btn).on({
        click:function(e){
          e.preventDefault();
          new daum.Postcode({
            oncomplete: function(data) {
              apart = data.apartment
              $('.dot').hide();
              $('.torf').show();
              $('p').text(data.address)
              if(apart == 'Y'){$('.torf').text("아파트입니다!");}
              else{$('.torf').text("아파트가 아닙니다.");}
        
            }
        }).open();
        }
      })
      
    }

  }

  obj1.init();




})(jQuery);
