var fromHide;
var toHide;
//Inicia el calendario cogque
$(function () {
    // var dateFormat = "dd-mm-yy";

    /** jQuery Datepicker **/
    // $("#from").datepicker({
    //     dateFormat: dateFormat,
    //     // defaultDate: "+1w",
    //     changeMonth: false,
    //     numberOfMonths: 1,
    //     // hide: false
    //     onSelect: function(date) {
    //         $("#fromDate").val(date);
    //         $("#fromDateLabel").html(date);
    //     }
    // });
    //
    // $("#to").datepicker({
    //     dateFormat: dateFormat,
    //     // defaultDate: "+1w",
    //     changeMonth: false,
    //     numberOfMonths: 1,
    //     onSelect: function(date) {
    //         $("#toDate").val(date);
    //         $("#toDateLabel").html(date);
    //     }
    // });

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
    alwaysShowDatepickerTO();

    $from.on("dp.change", function (e) {
        $to.data("DateTimePicker").minDate(e.date);
    });
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
function alwaysShowDatepickerTO() {
    toHide = $to.data('datepicker').hide;
    $to.data('datepicker').hide = function () {};
    $to.datepicker('show');
}
function hideDatepickerTO() {
    $to.data('datepicker').hide = toHide;
    $to.datepicker('hide');
}