//# sourceMappingURL=video.js.map
(function(a, g) {
    function d() {
        a(this).data("target") === window.location.hash && (a(this).tab("show"), clearInterval(b))
    }

    function e(c) {
        c.preventDefault();
        a(this).tab("show")
    }

    function f() {
        b = setInterval(function() {
            var c = a("#videoTabs").find("li"),
                b = c.filter(".active").next("li");
            (b.length ? b.find("a") : c.eq(0).find("a")).tab("show")
        }, 6E3);
        a("#tabCarousel").on("click", function() {
            clearInterval(b)
        })
    }
    var b;
    a(document).ready(function() {
        f();
        a("#videoTabs").find("a").click(e).each(d)
    })
})(jQuery);