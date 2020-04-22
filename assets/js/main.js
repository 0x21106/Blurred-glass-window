let prevX, prevY;

$(".control-panel").on({
  mousedown: function(e) {
    $(this).addClass("holding");
    prevX = e.clientX;
    prevY = e.clientY;
  },
  mouseup: function() {
    $(this).removeClass("holding");
  },
  mouseleave: function() {
    $(this).removeClass("holding");
  },
  mousemove: function(e) {
    if ($(this).hasClass("control-panel")) {
      if ($(this).hasClass("holding")) {
        $($(this).parent(".window")).offset({
          left:
            $($(this).parent(".window")).offset().left - (prevX - e.clientX),
          top: $($(this).parent(".window")).offset().top - (prevY - e.clientY)
        });
        prevX = e.clientX;
        prevY = e.clientY;
      }
    }
  }
});
