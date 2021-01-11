const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullname: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }
    },
    name(value) {
      if(value === '')
      {
        this.fullname = '';
      }
      else {
        this.fullname = value + ' ' + this.lastName;
      } 
    },
    lastName(value) {
      if(value === '')
        this.fullname = '';
      else
        this.fullname = this.name + ' ' + value;
    }
  },
  computed: {
    // fullname() {
    //   if(this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'agarwal'; 
    // }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    outputFullname() {
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'agarwal';
    }
  }
});

app.mount('#events');
