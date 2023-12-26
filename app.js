const app = Vue.createApp({
    data(){
        
        return{
            title:"some random title",
            someNumber: 0,
            showBooks: true
        }
    
    },
    methods:{
        performTheFunny() {
            this.someNumber = 69
            console.log("hah you clicked me")
        },
        toggleShow(){
            this.showBooks=  !this.showBooks;
        }
    }
})
app.mount("#app")