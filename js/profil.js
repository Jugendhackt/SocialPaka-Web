var name = 'tobias';
var editimg = 'img/entegigant.png';
var url = "http://192.168.0.100:9253/user?name=" + name



function loadUser() {
    $.ajax({
        url: url
    })
        .done(function (data) {
            var xdate = data.bday
            var y = xdate.split('/');
            bday = y[1] + '.' + y[0] + '.' + y[2];
            var newdiv = '<h1>' + data.fullName + '</h1>' +
                '<ul id=\"add\">' +
                '<li><span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span> Email: <a href=\"mailto:' + data.email + '\">' + data.email + '</a><input type=\"email\" class=\"editfield\" /></li>' +
                '<li><span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span> Telefonnummer: <a href=\"tel:' + data.phone + '\">' + data.phone + '</a><input type=\"tel\" class=\"editfield\" /></li>' +
                '<li><span class=\"glyphicon glyphicon-gift\" aria-hidden=\"true\"></span> Geburtstag: ' + bday + '<input type=\"bday\" class=\"editfield\" /></li>' +
                '<li><img src=\"' + editimg + '\" class=\"editicon\" id=\"edit\" /><img src=\"' + editimg + '\" class=\"editicon\" id=\"exitedit\" /></li>' +
                '</ul>';
            $(newdiv).appendTo('#add');
            skills = data.skills;
            for (let i of skills) {
                $('<li>' + i + '</li>').appendTo('#addskills');
            };
        });
};

function editbutton() {
    setTimeout(function () {
        $('#edit').click(function () {
            $('.editfield').show();
            $('#edit').hide();
            $('#exitedit').show();
        });
        $('#exitedit').click(function () {
            $('.editfield').hide();
            $('#edit').show();
            $('#exitedit').hide();
        });
    }, 1000);
};