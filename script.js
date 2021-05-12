const app = Vue.createApp({
    data(){
        return {
            materia:"Paradigmas de programación",
            semestre:"sexto factorial",
            carrera:"sistemas",
            productos: [
                {nombre: "cerveza", cantidad:100},
                {nombre: "agua", cantidad:500},
                {nombre: "jugo", cantidad:25}
            ],
            producto:""
        }
    },
    methods:{
        agregarProducto(){
            this.productos.push(
                {nombre:this.producto, cantidad:200}
            )
            this.producto=""
        }
    },
    computed:{
        voltearTexto(){
            return this.producto.split("").reverse().join("")
        },
        sumarCantidad(){
            /*let total = 0
            for(producto of this.productos){
                total = total+producto.cantidad
            }
            return total*/
            return this.productos.reduce((contador, product) => contador + product.cantidad, 0)
        }
    }
})

const vm = app.mount('#app')