const app = Vue.createApp({
    data() {
        return {
            name: "Aryan",
            age: 21,
            imgLink: 'https://image.shutterstock.com/image-photo/many-plates-vegetable-salad-commercial-600w-502874815.jpg'
        };
    },
    methods: {
        outputNum: function() {
            const randomNumber = Math.random(0,1);
            return randomNumber;
        }
    }

});

app.mount('#assignment');