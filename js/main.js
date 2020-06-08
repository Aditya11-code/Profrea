$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<span class="title">#title#</span>',
        labels: {
            previous : 'Previous',
            next : 'Next Step',
            finish : 'Submit',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            var fullname = $('#first_name').val() + ' ' + $('#last_name').val();
            var phone = $('#phone').val();
            var email = $('#email').val();
            var dob = $('#DOB').val();
            var nationality = $('#nationality').val();
            var temporary = $('#t-adrrs-1').val() + '  ' + $('#t-adrrs-2').val();
            var permanent = $('#p-adrrs-1').val() + '  ' + $('#p-adrrs-2').val();
            var tCityState = $('#t-city').val() + '  ' + $('#t-state').val();
            var pCityState = $('#p-city').val() + '  ' + $('#p-state').val();
            var education = $('#higher-education').val();

            $('#fullname-val').text(fullname);
            $('#pre-dob').text(dob);
            $('#phone-val').text(phone);
            $('#email-val').text(email);
            $('#t-address').text(temporary);
            $('#p-address').text(permanent);
            $('#citizen').text(nationality);
            $('#high-edu').text(education);
            $('#t-cityState').text(tCityState);
            $('#p-cityState').text(pCityState);

            return true;
        }
    });



});
