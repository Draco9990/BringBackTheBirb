
var myFunction = function homeButton(){
	console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
	
	//var nodes = document.getElementsByClassName("css-1dbjc4n");
	//var homeButton;
	
	//var foundLogo = false;
	//for(var i = 0; i < nodes.length; i++){
		//if(nodes[i].hasAttribute("aria-label")){
		//	if(nodes[i].getAttribute("aria-label") === "Timeline: Your Home Timeline"){
		//		homeButton = nodes[i];
		//		foundLogo = true;
		//		break;
		//	}
		//}
	//}
	
	var icons = document.querySelectorAll("svg");

	icons.forEach((svg) => {
		if(svg.getAttribute('viewBox') === '0 0 24 24'){
			var path = svg.querySelector('path');
			if(path.getAttribute('d') === 'M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0'){
				svg.setAttribute('viewBox', '328 355 335 276');
				
				path.setAttribute('d', 'M 630, 425    A 195, 195 0 0 1 331, 600    A 142, 142 0 0 0 428, 570    A  70,  70 0 0 1 370, 523    A  70,  70 0 0 0 401, 521    A  70,  70 0 0 1 344, 455    A  70,  70 0 0 0 372, 460    A  70,  70 0 0 1 354, 370    A 195, 195 0 0 0 495, 442    A  67,  67 0 0 1 611, 380    A 117, 117 0 0 0 654, 363    A  65,  65 0 0 1 623, 401    A 117, 117 0 0 0 662, 390    A  65,  65 0 0 1 630, 425    Z');	
			}

		}
	});
};

setInterval(myFunction, 10);