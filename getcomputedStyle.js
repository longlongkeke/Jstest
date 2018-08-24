function getStyle(obj,sattr){
	/*if(obj.currentStyle){
	return obj.currentStyle[sattr];
	}
	else{
	return getComputedStyle(obj)[sattr];
	}*/
	return	obj.currentStyle?obj.currentStyle[sattr]:getComputedStyle(obj)[sattr];
}
