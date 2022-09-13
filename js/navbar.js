$(function(){
  var hiddenMenu = $("nav")
  var menuToggle = $(".menu-toggle")
  menuToggle.click(function(){
    console.log("test")
    if(hiddenMenu.is(":visible")){
      hiddenMenu.hide()
    }else{
      hiddenMenu.show()
    }
  })

})