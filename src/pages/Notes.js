

/*
//* Async storage to save and store any data
chang_Mode(){
    let mode = this.state.dark
    this.setState({dark:!mode})
    //* calling the store function 

    this.storeMode(!mode)
  }

  componentDidMount(){//! anything written inside this function will be executed first 
    this.getMode
  }



  async storeMode(value){ //? this function store the data in the asyncstorage!.
    await AsyncStorage.setItem("dark" , JSON.stringify(value))   //! "dark" ==> key => unique name , dark is set false in the state 
    //! await ==> to make the compiler wait & to use it we make the function with the type "async"
    
  }

 async getMode(){ //? this function returms data >> so we have to store it in a variable.
   let mode =  await AsyncStorage.getItem("dark")
   
   if(mode == null || mode==""){
    mode = "false"
   }
   mode = JSON.parse(mode)
   this.setState({dark : mode})
  }*/