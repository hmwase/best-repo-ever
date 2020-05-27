

const getDate = function (){
    let today = new Date();
    
    var options= {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-us", options);
    return day;

}

const getDay = function(){

    let today = new Date();

    let options = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-us", options)
}

module.exports= {
    getDate, getDay
}
