(function($) {
    $.validator.setDefaults({
        errorElement: "span",
        errorClass: "help-block",
        highlight: function(element, errorClass, validClass) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length || element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
    $(function() {
        $('#contactForm').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 2,
                    maxlength: 50
                },
                lastname: {
                    required: true,
                    minlength: 2,
                    maxlength: 50
                },
                email: {
                    required: true,
                    email: true,
                    maxlength: 75
                },
                subject: {
                    required: true,
                    minlength: 10,
                    maxlength: 100
                },
                comment: {
                    required: true,
                    minlength: 100,
                    maxlength: 1000
                }
            }
        });
    });
})(jQuery);