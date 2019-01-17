$(document).ready(function(){
  mostrarProductos(categorias);
  for(var i = 0 ; i < categorias.length ; i++){
    $("#categorias").append("<a class='dropdown-item categoriasItem' id="+categorias[i]+" href=#>"+categorias[i]+"</a>")
  }

  //al seleccionar producto
  $(".producto").click(function(){
    if (!($(this).hasClass("seleccionado"))) {
    $(this).removeClass("producto")
    $(this).parent().addClass("eliminar");
    $(".descripcion",this).hide();
    $("#carrito").append($(this).addClass("seleccionado"));
    $(".eliminar").remove();
  }
  })

  $(".categoriasItem").click(function(){
    var arr = [$(this).attr("id")];
    mostrarProductos(arr);
  })


  var posicionUltimoScroll = 0;
  $(window).scroll(function(event){
     var scrollActual = $(this).scrollTop();
     if (scrollActual > posicionUltimoScroll){
         $("header").hide();
     } else {
        $("header").show();
     }
     posicionUltimoScroll = scrollActual;
  });
  var altoHeader = $("header").height();
  $("#fondo").css("padding-top",altoHeader);
  $("#carrito").css("height",$(window).height()-altoHeader);
});
function mostrarProductos(categorias = []){
  $("#productos").empty();
  var precio = "";
  var arrPrecio = [];
  for(var i = 0 ; i < array.length ; i++){
    if( categorias.indexOf(array[i][0]) != -1){
      arrPrecio = String(array[i][7]).split(".");
      if(arrPrecio.length > 1){
        precio = arrPrecio[0]+","+(arrPrecio[1]+"0").slice(0,2);
      }
      else {
        precio = arrPrecio[0]+",00"
      }
      $("#productos").append("<div class='col-12 col-md-4 col-lg-3' style='position=relative'>"+
                              "<div class='container producto align-items-center'>"+
                                "<div class='box'>"+
                                  "<div class='content'>"+
                                    "<img class='fotoproducto' src="+array[i][2]+">"+
                                  "</div>"+
                                "</div>"+
                                "<hr/>"+
                                "<div class='row align-items-center descripcion'>"+
                                  "<div class='col-sm-12'>"+
                                    "<p class='nombre'>"+array[i][3]+"<br>"+array[i][4]+"</p>"+
                                  "</div>"+
                                  "<div class='col-sm-7'>"+
                                    "<p class='cantidad'>"+array[i][5]+"</p>"+
                                  "</div>"+
                                  "<div class='col-sm-5'>"+
                                    "<p class='precio'>$"+precio+"</p>"+
                                  "</div>"+
                                "</div>"+
                              "</div>"+
                            "</div>");
    }
  };
}
