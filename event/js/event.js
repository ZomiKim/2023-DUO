$(document).ready(function () {
  // 페이지 로딩 시 초기 상태 설정
  $(".paginations a").removeClass("active");
  $(".paginations a:eq(1)").addClass("active"); // 1번 요소에 active 클래스 추가

  // 페이지네이션 클릭 시 처리
  $(".paginations a:not(:first-child):not(:last-child)").click(function (e) {
    e.preventDefault();

    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
  });
});
