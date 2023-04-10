function saturdayFun(activity= 'roller-skate'){
    console.log("This Saturday, I want to ...");
    return (`This Saturday, I want to ${activity}!`)
} 


function funActivity(activity = 'bathe my dog'){
    console.log("This Saturday, I want to ${activity}!");
}


function mondayWork(activity= 'go to the office'){
    console.log("This Monday, I will ...");
    return (`This Monday, I will ${activity}.`)
}


function wrapAdjective(highlight = "*"){
    return function(adjective = "special") {
        return `You are ${highlight}${adjective}${highlight}!`;
      }
}

function wrapAdjective(highlight = "||"){
    return function(adjective = "special") {
        return `You are ${highlight}${adjective}${highlight}!`;
    }
}
    wrapAdjective("||")("special")