$(document).ready(function(){
   var _btnBackToTop = $(".back-to-top");
   $(window).scroll(function () {
     var _scrollTop = $(window).scrollTop();
     //console.log(_scrollTop);
     if (_scrollTop > 72) {
         $("#main-menu").addClass("fix-nav");
          _btnBackToTop.removeClass("hide");
         return false;
     } else {
         $("#main-menu").removeClass("fix-nav");
         _btnBackToTop.addClass("hide");
         return false;
     }
   });
   _btnBackToTop.click(function () {
      $('body,html').animate({ scrollTop: 0 }, 500);
   }); 
   $('.format-currency').on('keyup', function(e) {
      //e.prentDefault();
      var $this = $(this);
      var fomarted = formatNumber($this.val());
      $this.val(fomarted);
   });
   
   //Suggest email khi đăng ký nhận mail
   $("#sub_email").keyup(function(){	
      var key = event.keyCode || event.charCode;
      var mail = $(this).val();
      if (key != 8 && key != 46){
         var pos_gmail = mail.indexOf('@g');
         var pos_yahoo_mail = mail.indexOf('@y');
         var pos_hot_mail = mail.indexOf('@h');
         
         if((pos_gmail > 0 || pos_yahoo_mail) && ( pos_gmail == (mail.length - 2) || pos_yahoo_mail == (mail.length - 2) || pos_hot_mail == (mail.length - 2))){
            if(pos_gmail > 0){
               mail = mail.substring(0,pos_gmail) + '@gmail.com';
               $(this).val(mail); 
               return false;  
            }else if(pos_yahoo_mail > 0){
               mail = mail.substring(0,pos_yahoo_mail) + '@yahoo.com';
               $(this).val(mail);
               return false;
            }else if(pos_hot_mail > 0){
               mail = mail.substring(0,pos_hot_mail) + '@hotmail.com';
               $(this).val(mail);
               return false;
            }
         }
         
      } 
      
   });
   
    //Đăng nhập hệ thống
    $(".btn-login").click(function(){
        $this = $(this);
        $this.html('<img src="/images/spinner.gif" /> Vui lòng chờ...');
        var email = $("#user_email").val();
        var password = $("#user_pass").val();
        if(email == ''){
            $("#user_email").focus();
        }else if(password == ''){
            $("#user_pass").focus();
        }else{
            
            var data = {'email':email,'password':password};
            var success = function(data){
                console.log(data.status);
                if(data.status == 0){
                    $("#alert-login .message").html(data.message);
                    $("#alert-login").removeClass('hide');
                }else{
                    $this.html('Đăng nhập');
                    window.location.href = '/';
                }
                
            }
            handleAjax('/user/login','POST','json',data,success);
        }
    });
    
    $('.alert .close').on('click', function(e) {
        $(this).parent().addClass('hide');
        return;
    });
   /* $(".list-film img.lazyload").lazyload({
    effect: "fadeIn",
    threshold: 200,
    });
    $(".list-film img.lazyload").each(function () {
        a = $(this);
        a.attr('src', a.attr('data-src'));
    });
	*/
});

