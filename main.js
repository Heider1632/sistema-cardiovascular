const vm = new Vue({
	el:'main',
	data: {
		introduccion: false,
		objetivos: false,
		mostrar: true
	},
	methods:{
		mostrarIntroduccion() {
			this.introduccion = true;
			this.mostrar =  false;
		},
		mostrarObjetivos(){
			this.objetivos = true;
			this.mostrar =  false;
		},
		cerrarIntro() {
			this.introduccion = false;
			this.mostrar =  true;
		},
		cerrarObj() {
			this.objetivos = false;
			this.mostrar =  true;
		}
	}
});