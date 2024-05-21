class react {
    constructor() {
      this.library = "react";
      this.server = "https://localhost:3000";
      document
        .querySelector("button")
        .addEventListener("click", this.handleEvent.bind(this));
      //here we use bind method to bind handleEvent with this because it is not taking the reference of ths of above items
    }
    handleEvent() {
      console.log("button clicked");
      console.log(this.server); //here it has reference of this but dont have reference of this.server because it is taking this from this 5th line
    }
  }

  const bind =new react();
  