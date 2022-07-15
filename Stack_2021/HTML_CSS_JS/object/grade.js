var obj = [
    {
        grade: "V",
        students: [
            {name: "Nrupul", marks: [10, 20, 30]},
            {name: "Prateek", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VI",
        students: [
            {name: "Aman", marks: [10, 20, 30]},
            {name: "Albert", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VII",
        students: [
            {name: "Yogesh", marks: [10, 20, 30]},
            {name: "Sandhya", marks: [20, 30, 40]}
        ]
    }
  ]

  
  
  var compare = [];
  for(var i = 0; i<obj.length; i++){
    
   
      var S = obj[i].students[0];
      var M = obj[i].students[0].marks;

      for(var j = 0; j < S.length; j++ ){
        var total = M[0]+M[1]+M[2];
       
        // for(var k = 0; k < M.length; k++){
        //     total = total + M[k];
           
        // }
        console.log(total);
    }
  
  }

// var M = obj[0].students[0].marks;
// console.log(obj.length);