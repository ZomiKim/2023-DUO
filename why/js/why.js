$(document).ready(function () {
  // sterp1 버튼OR
  $(".button_or").mouseenter(function () {
    $(this).find("span").css("color", "#fff");
    $(this).css({
      color: "#fff",
      border: "1px solid #fff",
      background: "#be3455",
    });
    $(this).find("img").attr("src", "imges/icon_plus_wh.png");
  });

  $(".button_or").mouseleave(function () {
    $(this).find("span").css("color", "#be3455");
    $(this).css({
      color: "#be3455",
      border: "1px solid #be3455",
      background: "#fff",
    });
    $(this).find("img").attr("src", "imges/icon_plus_or.png");
  });
});
