function timeout() {
  for(var i = 0; i < 3; i++){
    function close(i) {
      setTimeout(function log(){
        console.log(i)
      }, i * 1000)
    }
    close(i)
  }
}

timeout()

//Here I will be common for all setTimeout due to functional scope decleration , however timeout will be respectively 1, 1000, 2000 as it is part of web api and store its own local variable.