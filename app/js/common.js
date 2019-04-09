$(function() {
	var wrapper = $(".file_upload"),
		inp = wrapper.find("input"),
		btn = wrapper.find("span");

	var file_api =
		window.File && window.FileReader && window.FileList && window.Blob
			? true
			: false;

	inp
		.change(function() {
			var file_name;
			if (file_api && inp[0].files[0]) file_name = inp[0].files[0].name;
			else file_name = inp.val().replace("C:\\fakepath\\", "");

			if (!file_name.length) return;

			if (btn.is(":visible")) {
				btn.text(file_name);
			} else btn.text(file_name);
		})
		.change();
});
