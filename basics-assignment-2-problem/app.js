const app = Vue.createApp({
    data(){
        return {
            output: '',
            output1: ''
        }
    },
    methods: {
        submitB(event){
            alert('this is an alert!!');
        },
        keyD(event) {
            this.output = event.target.value
        },
        ent(event) {
            this.output1 = event.target.value
        }
    }
})

app.mount('#assignment');