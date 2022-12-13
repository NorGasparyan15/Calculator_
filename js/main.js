let x = document.querySelectorAll('.sharq1')

let inp = document.getElementById('input')

let plus = document.getElementById('plus')

let clear = document.getElementById('clear')

let d = document.getElementById('d')

let hav = document.getElementById('hav')






for (let i = 0; i < x.length; i++) {
	x[i].addEventListener('click', function(){


		let plus = input.value.slice(input.value.length - 1)

		if (plus === "+" && (this.value === "+" 
			|| this.value === "-" 
			|| this.value === "*" 
			||	this.value === "/" )
			|| plus === "-" && (this.value === "+" 
			|| this.value === "-" 
			|| this.value === "*" 
			||	this.value === "/" )
			|| plus === "*" && (this.value === "+" 
			|| this.value === "-" 
			|| this.value === "*" 
			||	this.value === "/" )
			||  plus === "/" && (this.value === "+" 
			|| this.value === "-" 
			|| this.value === "*" 
			||	this.value === "/"))



		{
		 input.value = input.value
		}

		else if (input.value.length === 0 && (this.value === "+" 
			|| this.value === "-" || this.value === "*" || this.value === "/")) {
			input.value = input.value
		}

		else{
			input.value += this.value
		}


		
	})
		
};


clear.addEventListener('click' , function(){

	input.value = "";


})


d.addEventListener("click" , function(){


	input.value = input.value.slice(0, input.value.length - 1);
})


hav.addEventListener("click" , function(){

	input.value = eval(input.value)
})












