var _loadFbSDk=null;jQuery(document).ready(function(){
jQuery('body').append('<div id="fb-root"></div>');
_loadFbSDk=function(){(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v22.0&appId=918486130133537";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));}
jQuery(window).load(function(){setTimeout("_loadFbSDk()",3000);});});
jQuery(document).ready(function() {
    var fixKeyword = function(str) {
        str = str.toLowerCase();
        str = str.replace(/(<([^>]+)>)/gi, "");
        str = str.replace(/[`~!@#$%^&*()_|\=?;:'",.<>\{\}\[\]\\\/]/gi, "");
        str = str.split(" ").join("+");
        return str;
    }
    jQuery('#form-search').submit(function() {
        var keywordObj = jQuery(this).find('input[name=keyword]')[0];
        if (typeof keywordObj != 'undefined' && keywordObj != null) {
            var keyword = jQuery(keywordObj).val();
            keyword = fixKeyword(keyword);
            keyword = jQuery.trim(keyword);
            if (keyword == '') {
                alert('Bạn chưa nhập từ khóa. (Không tính các ký tự đặc biệt vào độ dài từ khóa)');
                jQuery(keywordObj).focus();
                return false;
            }
            window.location.replace('/tim-kiem/' + keyword + '/');
        }
        return false;
    });

});
function MakeSearch() {
    var kw = $("#keyword").val();
    kw = kw.toLowerCase();
    kw = kw.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g, "+");
    kw = kw.replace(/-+-/g, "+");
    kw = kw.replace(/^\-+|\-+$/g, "");
    if (kw == '')
        alert("Vui lòng nhập từ khóa !");
    else
        location.href = MAIN_URL + "/tim-kiem/" + kw + "/"
}
