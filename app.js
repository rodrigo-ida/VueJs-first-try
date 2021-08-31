const app = Vue.createApp({
    data(){
        return{
            myName: 'Rodrgo',
            myAge: 31,
            img: 'https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif',
            valueInput: myName
        }
    },
    methods:{
        favNumber(){
            return Math.random();
        }

    }
})

app.mount('#assignment');