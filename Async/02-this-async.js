var contactES3 = {
  firstName: 'Romain',
  helloSync: function() {
    console.log('ES3 Hello ' + this.firstName);
  },
  helloAsync: function() {
    var that = this;
    setTimeout(function() {
      console.log('ES3 Hello ' + that.firstName);
    }, 10);
  }
};

contactES3.helloSync();
contactES3.helloAsync();

var contactES5 = {
  firstName: 'Romain',
  helloSync: function() {
    console.log('ES5 Hello ' + this.firstName);
  },
  helloAsync: function() {
    setTimeout(function() {
      console.log('ES5 Hello ' + this.firstName);
    }.bind(this), 10);
  },
  helloMethodEnCbAsync: function() {
    setTimeout(this.helloSync.bind(this), 10);
  },
};

contactES5.helloSync();
contactES5.helloAsync();
contactES5.helloMethodEnCbAsync();

const contactES6 = {
  firstName: 'Romain',
  helloSync() {
    console.log('ES5 Hello ' + this.firstName);
  },
  helloAsync() {
    setTimeout(() => {
      console.log('ES5 Hello ' + this.firstName);
    }, 10);
  },
  helloMethodEnCbAsync: function() {
    setTimeout(this.helloSync.bind(this), 10);
  },
};

contactES6.helloSync();
contactES6.helloAsync();
contactES6.helloMethodEnCbAsync();

/*
btn.addEventListener('click', (event) => {
  // si vous utilisiez this ici à remplacer par :
  event.target.innerText++;
});
*/
