function loaduser() {
    var radio = $("input[name='sort']:checked").val();
    var text = $('#searchtext')[0].value;
    document.cookie = "radio=" + radio + "; expires=Thu, 24 Dec 2018 12:00:00 UTC; path=/";
    document.cookie = "search=" + text + "; expires=Thu, 24 Dec 2018 12:00:00 UTC; path=/";
    var name = $('#searchtext')[0].value;
    if (radio == 'name') {
        var url = "http://192.168.0.100:9253/user?name=" + name;
    } else if (radio = 'skills') {
        var url = "http://192.168.0.100:9253/user/skill/search?skill=" + name;
    };

    $.ajax({
        url: url
    })
        .done(function (data) {
            var newdiv = '<div class=\"row searchentry\">' +
                '<div class=\"col-md-1 profilpic\">' +
                '<img src=\"img/standartavatar.png\" />' +
                '</div>' +
                '<div class=\"col-md-11\">' +
                '<b style=\"color: red;\">' + data.fullName + '</b><br>' +
                '<p>Skills: ' + data.skills.toString() + '</p>' +
                '</div>' +
                '</div>';

            $(newdiv).appendTo('#add');
        });
};