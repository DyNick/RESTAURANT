$(document).ready(function() {
    $("#Date").datepicker();
    var Dat = new Date();
    var d = Dat.getDate();
    var m = Dat.getMonth()+1;
    var y = Dat.getFullYear();

    curD = m+'/'+d+'/'+y;
    //d3 = m+'/'+(d+3)+'/'+y;

    $("#datepicker").val(curD);


});
