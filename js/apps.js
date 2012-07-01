	$("document").ready(function(){
	$("#patron").keyup(function() {
		if ($("#patron").val().length>0){
			$("#buscar_texto").text("Buscar");
		}
		else {
			$("#buscar_texto").text("Todos");
		}
	});
	$(".block-recepcion").hide();
	$(".block-terceros").hide();
	$("#recepcion").mouseover(function() {
		$(".block-recepcion").slideDown(2000);
		$(".block-recepcion").mouseover(function() {
			$(".block-recepcion").show();
		});
	});
	$("#recepcion").mouseout(function() {
		$(".block-recepcion").hide();
		$(".block-recepcion").mouseout(function() {
			$(".block-recepcion").hide();
		});
	});
	
	$("#terceros").mouseover(function() {
		$(".block-terceros").slideDown(2000);
		$(".block-terceros").mouseover(function() {
			$(".block-terceros").show();
		});
	});
	$("#terceros").mouseout(function() {
		$(".block-terceros").hide();
		$(".block-terceros").mouseout(function() {
			$(".block-terceros").hide();
		});
	});
	
	
	
	$(".center").append("<div class='aviso' style='color: #000;'><a href='#' onclick='window.open(\"buscar.php\",\"window\",\"menubar=1,resizable=1,width=550,height=450\")'><img src='images/email.png' style='width: 120px;' disabled/></a></div>");
	$(".aviso").css({
		"position":"absolute",
		width:"120px",
		height:"100px",
		top:"300px",
		left:"0px",
		cursor:"pointer",
		"-moz-border-topright":"10px",
		"-moz-border-bottomright":"10px",
		"-webkit-bottom-right-border":"10px",
		left:"0px",
		"opacity":"0.6",
	});
	
	$("#buscar_texto").click(function() {
		function objetoAjax() {
			var xmlhttp=false;
			try {
				xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				} catch (E) {
					xmlhttp=false;
				}
			}
			if (!xmlhttp && typeof XMLHttpRequest!='Undefined') {
				xmlhttp=new XMLHttpRequest();
			}
			return xmlhttp;
		}
		opcion=$("#buscar_texto").text();
		if (opcion=="Todos") {
			patron=false;
		} else {
			patron=$("#patron").val();
		}
		resultado=$("#resultado");
		ajax=objetoAjax();
		ajax.open('GET',"buscar.php?"+patron);
		ajax.onreadystatechange=function() {
			if (ajax.readyState==4) {
				$(".resultado").remove();
				resultado.append("<div class='resultado'>"+ajax.responseText+"</div>");
			}
		}
		ajax.send(null)
	});
	
	$("input[name='opcion']").change(function() {
		function objetoAjax() {
			var xmlhttp=false;
			try {
				xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				} catch (E) {
					xmlhttp=false;
				}
			}
			if (!xmlhttp && typeof XMLHttpRequest!='Undefined') {
				xmlhttp=new XMLHttpRequest();
			}
			return xmlhttp;
		}
		
		resultado=$("#resultado");
		
		if ($(this+":checked").val()=='oficina_destino'){
			patron="oficina_destino";
			ajax=objetoAjax();
			ajax.open('GET',"reportes.php?"+patron);
			ajax.onreadystatechange=function() {
				if (ajax.readyState==4) {
					$("#options_extra").remove();
					$(".resultado").remove();
					resultado.append("<div class='resultado'>"+ajax.responseText+"</div>");
				}
			}
			ajax.send(null)
		} else	if ($(this+":checked").val()=='usuario') {
			patron="usuario";
			ajax=objetoAjax();
			ajax.open('GET',"reportes.php?"+patron);
			ajax.onreadystatechange=function() {
				if (ajax.readyState==4) {
					$("#options_extra").remove();
					$(".resultado").remove();
					resultado.append("<div class='resultado'>"+ajax.responseText+"</div>");
				}
			}
			ajax.send(null)
		}
		else {
			var hoy=new Date();
			dia=hoy.getDate();
			dia1=hoy.getDate()+1;
			mes=hoy.getMonth()+1;
			anio=hoy.getYear()+1900;
			if (dia <10) dia = "0" + dia;
			if (dia1 <10) dia1 = "0" + dia1;
			if (mes <10) mes = "0" + mes;
			var fecha_actual=anio+"-"+mes+"-"+dia;
			var fecha_actual1=anio+"-"+mes+"-"+dia1;
			var fecha_minima="2010-10-24";
			var sw=true;
			$(".resultado").remove();
			$(".options_extra").append("<div id='options_extra'><hr class='dotted'><input type='radio' name='fecha' value='hoy'/><span class='text-date'>Hoy</span><br><input type='radio' name='fecha' value='fecha_especifica'/><span class='text-date'>Fecha Especifica</span><br><div class='option_date'></div><hr class='dotted'><button id='reportear'>Dar Reporte</button></div>");
			$("input[name='fecha']").change(function() {
				if ($("input[name='fecha']:checked").val()=='hoy'){
					$(".options_datetime").remove();
					patron="fecha:hoy/"+fecha_actual;
					sw=false;
				}
				else {
					$(".option_date").append("<div class='options_datetime'><hr class='dotted'><span class='text-date'>Desde </span><input id='inicio' type='date' format='dd/mm/yyyy'  min='"+fecha_minima+"' max='"+fecha_actual+"' name='inicio'/><span class='text-date'>Hasta</span><input id='fin' type='date' format='yyyy-mm-dd' date-value='"+fecha_actual+"' min='"+fecha_minima+"' max='"+fecha_actual+"' name='fin'/><br></div>");
					sw=true;
				}
			});
			$("#reportear").click(function() {
				if (sw) {
					patron="fecha:"+$("#inicio").val()+"/"+$("#fin").val();
				}
				ajax=objetoAjax();
				ajax.open('GET',"reportes.php?"+patron);
				ajax.onreadystatechange=function() {
					if (ajax.readyState==4) {
						$("#options_extra").remove();
						$(".resultado").remove();
						resultado.append("<div class='resultado'>"+ajax.responseText+"</div>");
					}
				}
				ajax.send(null)
			})
		} 
	});
	$("#doc_derivacion").click(function() {
		if($("#doc_derivacion").is(":checked")){
			$(".doc_derivacion").append("<div style='float:left; margin-top: -5px;  width: 100%;' class='option_derivacion'><input type='radio' name='documento' text='oficio' value='oficio' />Oficio<br><input type='radio' name='documento' value='memorandum'/>Memorandum<br><input type='radio' name='documento' value='nota_pedido'/>Nota de Pedido<br></div>");
			$("input[name='documento']").change(function(){
				var doc_derivacion;
				doc_derivacion=$("input[name='documento']:checked").attr("value");
			});
		}else {
			$(".option_derivacion").remove();
		}
	});
	$("input[name='derivado']").click(function() {
		
		function objetoAjax() {
			var xmlhttp=false;
			try {
				xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				} catch (E) {
					xmlhttp=false;
				}
			}
			if (!xmlhttp && typeof XMLHttpRequest!='Undefined') {
				xmlhttp=new XMLHttpRequest();
			}
			return xmlhttp;
		}
		
		valor=$(this).val();
		id=$(this).attr("foo");
		ajax=objetoAjax();
		ajax.open('GET',"modificar_check.php?"+id+"-"+valor);
		ajax.onreadystatechange=function() {
			if (ajax.readyState==4) {

			}
		}
		ajax.send(null)
		$(this).val(nuevo_val);
	});
	  //j('#bigent').css({color:"red"});  
	$("#find").click(function() {
		if ($("input[name='expediente']").val()=="") {
			patron="todos";
		} else {
			patron=$("input[name='expediente']").val();
		}
		$.ajax({
				type: "POST",
				url: "buscar_recepcion.php",
				data: "patron="+patron,
				success: function(data) {
					$(".search-ajax").html(data);
				}
		});
	});
	$(".item").click(function () {
		id=$(this).attr("id");
		$("#"+id).click(function(){
			alert("Hola!");
		});
		alert("$(#"+id+").click(function(){alert(Hola)};");
	});
});
