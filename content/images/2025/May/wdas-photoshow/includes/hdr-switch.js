function toggleHDR() {
    if ($('.hdr_toggle').is(":checked")) {
        $(".hdr").show();
        $(".sdr").hide();
    } else {
        $(".hdr").hide();
        $(".sdr").show();
    }
}

function checkHDR() {
    if (window.matchMedia("(dynamic-range: high)").matches) {
        $(".hdr-unsupported-warning").hide();
    } else {
        $(".hdr-unsupported-warning").show();
    }
}

setInterval(function () {
    checkHDR();
}, 2000);

$(document).ready(function () {
    checkHDR();
});
