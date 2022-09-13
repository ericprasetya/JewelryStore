$(function(){
  var curr = $(".slides li").first()
  var images = $(".slides li")
  images.hide()
  curr.show()
  
  var countImg = $(".slides li").length
  var count = 0
  var prev = null
  
  function startSLider(){
    setInterval(function(){
      // console.log(countImg)
      // curr.fadeToggle(2000)
      curr.fadeOut(1000)
      prev = curr
      curr = curr.next()
      count++
      if(count == countImg){
        count = 0
        curr = $(".slides li").first()
      }
      curr.fadeIn(1000)
      console.log(count)
    },3000)
  }
  startSLider()


});