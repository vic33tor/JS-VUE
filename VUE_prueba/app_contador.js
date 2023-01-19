const app = Vue.createApp({
    data() {
        return {
            contador:0,
            mensaje_error:'Es negativo',
            mensaje_positivo:'Es positivo',
            lista:[],
        }
    },

    methods:{
        sumar_uno(){
            this.contador++;
            if(this.contador%3==0 && !this.lista.includes(this.contador)){
                this.lista.push(this.contador);
            }
        },
        restar_uno(){
            this.contador--;
            if(this.contador%3==0 && this.contador!=0){
                this.lista.push(this.contador);
            }
        },
        
    }
});
app.mount('#miApp');