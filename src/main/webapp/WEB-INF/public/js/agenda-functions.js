var fromHide;
// var toHide;

$(function () {
    /** Bootstrap Datepicker **/
var dateFormat = 'dd-mm-yyyy';

    $from = $("#from");
    $from.datepicker({
        format: dateFormat,
        locale: 'es',
        keepOpen: true
        // changeMonth: false,
        // numberOfMonths: 1,
        // // hide: false
        // onSelect: function(date) {
        //     $("#fromDate").val(date);
        //     $("#fromDateLabel").html(date);
        // }
    });
    // fromHide = $from.data('datepicker').hide;
    // $from.data('datepicker').hide = function () {};
    // $from.datepicker('show');
    alwaysShowDatepickerFROM();

    $to = $("#to");
    $to.datepicker({
        format: dateFormat,
        locale: 'es',
        keepOpen: true
        // changeMonth: false,
        // numberOfMonths: 1,
        // onSelect: function(date) {
        //     $("#toDate").val(date);
        //     $("#toDateLabel").html(date);
        // }
    });
    // toHide = $to.data('datepicker').hide;
    // $to.data('datepicker').hide = function () {};
    // $to.datepicker('show');
    // alwaysShowDatepickerTO();

    // $from.on("dp.change", function (e) {
    //     $to.data("DateTimePicker").minDate(e.date);
    // });
    $to.on("dp.change", function (e) {
        $from.data("DateTimePicker").maxDate(e.date);
    });

});
function alwaysShowDatepickerFROM() {
    fromHide = $from.data('datepicker').hide;
    $from.data('datepicker').hide = function () {};
    $from.datepicker('show');
}
function hideDatepickerFROM() {
    $from.data('datepicker').hide = fromHide;
    $from.datepicker('hide');
}
// function alwaysShowDatepickerTO() {
//     toHide = $to.data('datepicker').hide;
//     $to.data('datepicker').hide = function () {};
//     $to.datepicker('show');
// // }
// function hideDatepickerTO() {
//     $to.data('datepicker').hide = toHide;
//     $to.datepicker('hide');
// }


//metodos para mostrar y ocultar los datos para agendar sesiones
function ocultar(){
    document.getElementById('ver').style.display = 'none';
}

function mostrar(){
    document.getElementById('oculto').style.display = 'block';
}

$( '.micheckbox' ).on( 'click', function() {
    if( $(this).is(':checked') ){
        // Hacer algo si el checkbox ha sido seleccionado
        alert("El checkbox con valor " + $(this).val() + " ha sido seleccionado");
    } else {
        // Hacer algo si el checkbox ha sido deseleccionado
        alert("El checkbox con valor " + $(this).val() + " ha sido deseleccionado");
    }
});