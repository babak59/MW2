var widthLess1024 = function() {
        $(window).width() < 1024 ? ($("#sidebar, #navbar").addClass("collapsed"), $("#navigation").find(".dropdown.open").removeClass("open"), $("#navigation").find(".dropdown-menu.animated").removeClass("animated"), $("#sidebar").hasClass("collapsed") ? $("#content").animate({
            left: "0px",
            paddingLeft: "55px"
        }, 150) : $("#content").animate({
            paddingLeft: "55px"
        }, 150)) : ($("#sidebar, #navbar").removeClass("collapsed"), $("#sidebar").hasClass("collapsed") ? $("#content").animate({
            left: "210px",
            paddingLeft: "265px"
        }, 150) : $("#content").animate({
            paddingLeft: "265px"
        }, 150));
    },
    widthLess768 = function() {
        $(window).width() < 768 ? (1 === $(".collapsed-content .search").length && $("#main-search").appendTo(".collapsed-content .search"), 0 === $(".collapsed-content li.user").length && $(".collapsed-content li.search").after($("#current-user"))) : ($("#current-user").show(), 2 === $(".collapsed-content .search").length && $(".nav.refresh").after($("#main-search")), 1 === $(".collapsed-content li.user").length && $(".quick-actions >li:last-child").before($("#current-user")));
    };
$(function() {
    function o(o) {
        $(o).block({
            message: '<div class="el-reloader"></div>',
            overlayCSS: {
                opacity: .6,
                cursor: "wait",
                backgroundColor: "#000000"
            },
            css: {
                padding: "5px",
                border: "0",
                backgroundColor: "transparent"
            }
        });
    }

    function e(o) {
        $(o).unblock();
    }
    $("#mmenu").mmenu({
        position: "right",
        zposition: "next",
        moveBackground: !1
    }), $(".quick-actions .dropdown").on("show.bs.dropdown", function() {
        $(this).find(".dropdown-menu").addClass("animated fadeInDown"), $(this).find("#user-inbox").addClass("animated bounceIn");
    }), $("#navigation .dropdown").on("show.bs.dropdown", function() {
        $(this).find(".dropdown-menu").addClass("animated fadeInLeft");
    }), $("#sales-chart").sparkline([5, 6, 7, 2, 1, 4, 6, 8, 10, 14], {
        width: "60px",
        type: "bar",
        height: "40px",
        barWidth: "6px",
        barSpacing: 1,
        barColor: "#d9544f"
    }), $("#balance-chart").sparkline([5, 6, 7, 2, 1, 4, 6, 8, 10, 14], {
        width: "60px",
        type: "bar",
        height: "40px",
        barWidth: "6px",
        barSpacing: 1,
        barColor: "#418bca"
    }), $("#sidebar .sidebar-toggle").on("click", function() {
        var o = $(this).data("toggle");
        $(o).toggleClass("collapsed");
    }), $("#sidebar").niceScroll({
        cursorcolor: "#000000",
        zindex: 999999,
        bouncescroll: !0,
        cursoropacitymax: .4,
        cursorborder: "",
        cursorborderradius: 0,
        cursorwidth: "7px",
        railalign: "left",
        railoffset: {
            top: 45,
            left: 0
        }
    });
    var n = function() {
        $("#content").niceScroll({
            cursorcolor: "#000000",
            zindex: 999999,
            bouncescroll: !0,
            cursoropacitymax: .4,
            cursorborder: "",
            cursorborderradius: 7,
            cursorwidth: "7px",
            background: "rgba(0,0,0,.1)",
            autohidemode: !1,
            railpadding: {
                top: 0,
                right: 2,
                left: 2,
                bottom: 0
            }
        });
    };
    n(), $("#mmenu").on("opened.mm", function() {
        $("#content").getNiceScroll().hide();
    }), $("#mmenu").on("closed.mm", function() {
        $("#content").getNiceScroll().show();
    }), $(".modal").on("show.bs.modal", function() {
        $("body, #content").css({
            overflow: "hidden"
        }), $("#content").getNiceScroll().remove();
    }).on("hide.bs.modal", function() {
        $("body, #content").css({
            overflow: ""
        }), n();
    }), $("#navigation .dropdown.open").data("closable", !1), $("#navigation .menu >.dropdown").on({
        "shown.bs.dropdown": function() {
            $(this).data("closable", !1), $("#sidebar").getNiceScroll().resize();
        },
        click: function(o) {
            $(this).data("closable", !0), $(this).hasClass("open") || $("li.dropdown.open").removeClass("open"), $("#sidebar").hasClass("collapsed") && o.stopPropagation(), $("#sidebar").getNiceScroll().resize();
        },
        "hide.bs.dropdown": function() {
            return $(this).data("closable");
        }
    }), $(".sidebar-collapse a").on("click", function() {
        $("#sidebar, #navbar").toggleClass("collapsed"), $("#navigation").find(".dropdown.open").removeClass("open"), $("#navigation").find(".dropdown-menu.animated").removeClass("animated"), $("#sidebar > li.collapsed").removeClass("collapsed"), $("#sidebar").hasClass("collapsed") ? $(window).width() < 1024 ? $("#content").animate({
            left: "0px"
        }, 150) : $("#content").animate({
            paddingLeft: "55px"
        }, 150) : $(window).width() < 1024 ? $("#content").animate({
            left: "210px"
        }, 150) : $("#content").animate({
            paddingLeft: "265px"
        }, 150);
    }), $("#navigation .menu li").hover(function() {
        $(this).addClass("hovered"), $("#sidebar").addClass("open");
    }, function(o) {
        $(o.target).parent().removeClass("hovered"), $(this).removeClass("hovered"), $("#sidebar").removeClass("open");
    }), widthLess1024(), widthLess768(), $(window).resize(function() {
        widthLess1024(), widthLess768();
    }), $(".animate-number").each(function() {
        var o = $(this).data("value"),
            e = $(this).data("animation-duration");
        $(this).animateNumbers(o, !0, e, "linear");
    }), $(".animate-progress-bar").each(function() {
        var o = $(this).data("percentage");
        $(this).css("width", o);
    }), $("#color-schemes li a").click(function() {
        var o = $(this).attr("class"),
            e = $("body").attr("class").split(" ").pop();
        $("body").removeClass(e).addClass(o);
    });
    var a = function() {
            $("body .videocontent").prepend('<div class="video-background video-bg-1"></div>'), $(".video-background").videobackground({
                videoSource: [
                    ["Content/videobg/1.mp4", "video/mp4"],
                    ["Content/videobg/1.webm", "video/webm"],
                    ["Content/videobg/1.ogv", "video/ogg"]
                ],
                controlPosition: "#video",
                loop: !0,
                controlText: "",
                loadedCallback: function() {
                    $(this).videobackground("mute");
                }
            });
        },
        i = function() {
            var o = $(".video-background").attr("class").split(" ").pop().split("-").pop();
            $(".video-background").videobackground({
                videoSource: [
                    ["Content/videobg/" + o + ".mp4", "video/mp4"],
                    ["Content/videobg/" + o + ".webm", "video/webm"],
                    ["Content/videobg/" + o + ".ogv", "video/ogg"]
                ],
                controlPosition: "#video",
                loop: !0,
                controlText: "",
                loadedCallback: function() {
                    $(this).videobackground("mute");
                }
            });
        };
    $("#videobackgrounds li a").click(function() {
        var o = $(this).attr("class");
        $("#video").html(""), $("body .videocontent").prepend('<div class="video-background"></div>'), $(".video-background").addClass(o), i(), $("#videobg-check").prop("checked", !0);
    }), $("#videobg-check").is(":checked") && a(), $("#videobg-check").change(function() {
        $(this).is(":checked") ? a() : ($("#video").html(""), $(this).prop("checked", !1));
    }), $(".page-refresh").click(function() {
        location.reload();
    }), $(".tile-header .controls .refresh").click(function() {
        var n = $(this).parent().parent().parent();
        return o(n), window.setTimeout(function() {
            e(n);
        }, 1e3), !1;
    }), $(".tile-header .controls .remove").click(function() {
        return $(this).parent().parent().parent().addClass("animated fadeOut"), $(this).parent().parent().parent().attr("id", "el_remove"), setTimeout(function() {
            $("#el_remove").remove();
        }, 500), !1;
    }), $(".tile-header .controls .minimize").click(function() {
        return $(this).parent().parent().parent().toggleClass("minimized"), !1;
    }), navigator.userAgent.match(/iPhone|iPad|iPod/i) && ($(".modal").on("show.bs.modal", function() {
        setTimeout(function() {
            scrollLocation = $(window).scrollTop(), $(".modal").addClass("modal-ios").height($(window).height()).css({
                "margin-top": scrollLocation + "px"
            });
        }, 0);
    }), $("input, textarea").on("blur", function() {
        setTimeout(function() {
            $(window).scrollLeft(0);
            var o = $(":focus");
            o.is("input") || $(window).scrollTop(scrollLocation);
        }, 0);
    }));
}), $(window).load(function() {
    $("#loader").delay(500).fadeOut(300), $(".mask").delay(800).fadeOut(300, function() {
        widthLess1024(), widthLess768();
    });
});