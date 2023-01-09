var load = 0;
console.log("here")
document.getElementById('gform').onload = function(){
    console.log("get Execuded")
    /*Execute on every reload on iFrame*/
    load++;
    if(load > 1){
        /*Second reload is a submit*/
        document.location = "https://radar-fund.com/SubmissionResponse.html";
    }
}