    
//Register plugin :
    $trukture.addPlugin({
     	name: "GoErr",
     	show : function(code){
     		return code.includes("err") && code.includes(":=")
     	},
     	exec : function(code){
     		 
                  var space = code.substring(0,  code.search(/\s/g) )
     		   return  code + "\n" + space + "if err != nil {\n" + space + "//err.Error() is a string. Select this block and hit tab to adjust \n" + space +"}\n";
     	}
     })


        $trukture.addPlugin({
          name: "GoBuild",
          show : function(code){
              
               return true
          },
          exec : function(code){
                
               $trukture.exec("go build", function(success,log){
                    if (!success && typeof(log) != "undefined"){
                         alert("Error with build. Log : " + log)
                    } else {
                         alert("Build passed!")
                    }
               })    
          }
     })