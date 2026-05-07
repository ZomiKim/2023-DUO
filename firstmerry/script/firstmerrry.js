// 480 이하 br 제거
$(document).ready(function () {
  toggleBrTag();
});

$(window).resize(function () {
  toggleBrTag();
});

function toggleBrTag() {
  if ($(window).width() <= 480) {
    $(".readText br").hide();
  } else {
    $(".readText br").show();
  }

  // sterp1 버튼OR
  $(".button_or").mouseenter(function () {
    $(this).find("span").css("color", "#fff");
    $(this).css({
      color: "#fff",
      border: "1px solid #fff",
      background: "#be3455",
    });
    $(this).find("img").attr("src", "imges/icno_arrow_wh.png");
  });

  $(".button_or").mouseleave(function () {
    $(this).find("span").css("color", "#be3455");
    $(this).css({
      color: "#be3455",
      border: "1px solid #be3455",
      background: "transparent",
    });
    $(this).find("img").attr("src", "imges/icno_arrow_or.png");
  });

  // sterp5버튼
  $(".button").mouseenter(function () {
    $(this).find("span").css("color", "#be3455");
    $(this).css({
      color: "#be3455",
      border: "1px solid #be3455",
      background: "#FFF",
    });
    $(this).find("img").attr("src", "imges/icno_arrow_or.png");
  });

  $(".button").mouseleave(function () {
    $(this).find("span").css("color", "#fff");
    $(this).css({
      color: "#fff",
      border: "1px solid #fff",
      background: "transparent",
    });
    $(this).find("img").attr("src", "imges/icno_arrow_wh.png");
  });
}
