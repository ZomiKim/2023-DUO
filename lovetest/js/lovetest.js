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

// 그 어 질문 넘어가기

$(document).ready(function () {
  $(".step1").siblings(".question").hide();

  $(".step1 .lovetest li").click(function () {
    var $currentStep = $(this).closest(".question");
    $currentStep.hide();
    $currentStep.next(".question").show();
  });

  $(".step2 .lovetest li").click(function () {
    var $currentStep = $(this).closest(".question");
    $currentStep.hide();
    $currentStep.next(".question").show();
  });

  $(".step3 .lovetest li").click(function () {
    var $currentStep = $(this).closest(".question");
    $currentStep.hide();
    $currentStep.next(".question").show();
  });

  $(".step4 .lovetest li").click(function () {
    var $currentStep = $(this).closest(".question");
    $currentStep.hide();
    $currentStep.next(".question").show();
  });
});
