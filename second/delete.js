$(document).ready(function() {

	$("#tbUser").on('click','.removeBtn',function (e) {
    e.preventDefault();
    $(this).closest('tr').remove();
    alert("hello");
    console.log("madarchod");
});
	});