function runProgram(input) {

    var arr = input.trim().split("\n")
   
    var data = [];
    for(var i=0; i<arr.length; i++){
        var item = arr[i].trim().split(" ")
      
        var n = item[0];
        var q = item[1];
        var p = item[2];
        var cart = {};
        cart.name = n;
        cart.quant = q;
        cart.price = p;
        
        data.push(cart)
    } 
      //console.log(data);


    var object = {
        datas : data,
    };
// console.log(object.datas);
    var sum = 0;
    for(var i = 0; i < object['datas'].length; i++){
     
      var product = object.datas[i].quant * object.datas[i].price;

      sum = sum + product;
    }
    console.log(sum);
    
    
    
    
  


    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`Rice 2 60
      Dal 3 50
      Salt 1 20`);
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }