/*

 * Script Sheet

 * version:   	2.0.0

 * date:      	07/06/21

 * author:		Team Web-Triton

 * email:     	info@web-triton.com

 * website:   	https://web-triton.com
 
 */



function copy_pass() {

	var copyText = document.getElementById("input_pass");

	copyText.select();

	document.execCommand("copy");



	var SummDok = document.getElementById('res');

	SummSumm = 'Скопированно';

	SummDok.innerHTML = SummSumm;

}



// $('.form').validate({
// 	submitHandler: function(form) {
// 		var dataparam = $('.form').serialize();
// 		$.ajax({
// 			type: 'POST',
// 			async: true,
// 			url: 'handler/handler.php',
// 			data: dataparam,
// 			datatype: 'json',
// 			cache: true,
// 			global: false,
// 			beforeSend: function() {
// 				$('.loader').show();
// 			},
// 			success: function(data) {
// 				if(data == 'success'){
// 					$('.result_success').html(data);
// 				} else {
// 					$('.result_success').html(data);
// 				}
// 			},
// 			complete: function() {
// 				$('.form').hide();
// 				$('.result_success').show();
// 			}
// 		});
// 	}
// });
