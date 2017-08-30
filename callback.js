var evenDoubler = function(v,callback){
    var waitTime=Math.floor(Math.random()*1001);
    if(v%2==0){
        setTimeout(function(){
            callback(
                new Error("even number"), 5, waitTime
                );
            
        },waitTime)
    } else{
        setTimeout(function(){
            callback(null,v*2,waitTime);
        },waitTime)
    }
    

};


var resultHandler= function(err,r,t){
    if(err){
        console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiError"+ err.message + "wait time " + t);
    }else{
        console.log(r + "wait time "+ t);
    }
    
   
};
console.log("jjjjjjjjjjj");

evenDoubler(2,resultHandler);
console.log("-----------");
