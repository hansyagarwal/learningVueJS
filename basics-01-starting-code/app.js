const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'learn Vue!',
            courseGoalB: '<h2>master vue epicly</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal: function() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');