$(document).ready(function(){
    $("#date").append(new Date().getFullYear());
    if( $('#dateOfLaunch').length )        
    {
        $("#dateOfLaunch").datepicker({
            uiLibrary: "bootstrap4",
            format: "dd/mm/yyyy",
        });
    }
});