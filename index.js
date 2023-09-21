function saturdayFun(act="roller-skate"){
  return `This Saturday, I want to ${act}!`;
}
console.log(saturdayFun("bathe my dog"))

const mondayWork=function(act="go to the office"){
  return (`This Monday, I will ${act}.`);
};
mondayWork();
mondayWork("work from home")

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
  };
}





