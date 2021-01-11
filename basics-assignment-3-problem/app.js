const app = Vue.createApp({
    data() {
        return {
            number: 0
        };
    },
    computed: {
        result() {
            if(this.number < 37) {
                return 'not there yet';
            }
            else if(this.number === 37) {
                return this.number;
            }
            else {
                return 'Too much!';
            }
        }
    },
    watch: {
        // number(value) {
        //     if(value > 37)
        //     {
        //         this.result = 'Too much!';
        //     }
        // },
        // result(value) {
        //     setTimeout(function(){
        //         this.result = 0;
        //     }, 5000);
        // }
        result() {
            const that = this;
            setTimeout(function() {
                that.number = 0;
            }, 5000);
        }
    },
    methods: {
        five() {
            this.number = this.number + 5;
        },
        one() {
            this.number = this.number + 1;
        }
    }
});

app.mount('#assignment');