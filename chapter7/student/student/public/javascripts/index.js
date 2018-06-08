
(function(global,$){
    $("#save").click(function() {
        $.ajax({
            dataType: "json",
            async: true,
            data: {
                "name": $('#name').val(),
                "chinese": $('#chinese').val(),
                "english": $('#english').val(),
                "math": $('#math').val()
            },
            type: "POST",
            beforeSend: function () {
            },
            success: function (response) {
                if (response) {
                    var success = response.message;
                }
                var newDom = '<p>' + success + '</p>';
                $('.add-save').after(newDom);
                setTimeout(function () {
                    location.assign("/");
                }, 500)
            },
            error: function () {
                layer.alert("请求失败", {
                    skin: 'layui-layer-molv',
                    closeBtn: 0,
                    shift: 2
                });
            },
            complete: function () {

            }
        })
    })
}
)(window,jQuery)