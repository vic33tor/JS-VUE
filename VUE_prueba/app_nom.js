const app = Vue.createApp({
    data() {
        return {
            nombre:'',
            apellido:'',
            lista: [1,2,3,4,5],
            input_nombre:'',
            input_apellido:'',
        }
    },

    methods:{
        cambiarNombre(){
            this.nombre = this.input_nombre;
            this.input_nombre='';
        },
        cambiarApellido(){
            this.apellido = this.input_apellido;
            this.input_apellido='';
        }
    }
});
app.mount('#miApp');