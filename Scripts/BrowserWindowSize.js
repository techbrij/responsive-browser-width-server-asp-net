//Created By: Brij Mohan
//Website: http://techbrij.com

window.onresize = function (event) {
    SetWidthHeight();
}
function SetWidthHeight() {
    var height = $(window).height();
    var width = $(window).width();
    $.ajax({
        url: "windowSize.ashx",
        data: {
            'Height': height,
            'Width': width
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function (data) {     
        if (data.isFirst) {
            window.location.reload();
        };
    }).fail(function (xhr) {
        alert("Problem to retrieve browser size.");
    });
    
}
$(function () {
    SetWidthHeight();
});