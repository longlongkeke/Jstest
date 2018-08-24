window.onload = function(){
		'use strict';
		var ajax = getXMLHttpRequestObject();
		ajax.onreadystatechange = function(){
			if(ajax.readyState==4){
				if((ajax.status>=200&&ajax.status<300)||(ajax.status==304)){
					document.getElementById('output').innerHTML=ajax.responseText;
				
				}
				
				else{
					
					document.getElementById('output').innerHTML='Error'+ajax.statusText;
					
				}
				
				
			}
			
			
		};
		document.getElementById('btn').onclick = function(){
			ajax.open('GET','resources/test.txt',true);
			ajax.send(null);
			
		}
};
