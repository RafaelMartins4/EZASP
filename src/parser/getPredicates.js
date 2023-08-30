const { COMMENT, EMPTY, getRuleType } = require('../parser/getRuleType');

function extractPredicatesAux(rule){
  const predicates = [];
  const predicatePattern = /([a-z][a-zA-Z0-9_]*)\s*(?:\(([^)]*)\))?/g;
  
  let matches = rule.match(predicatePattern);

  if(!matches)
    matches = [];

  for (const match of matches)
    if(rule[rule.indexOf(match)-1] == "#")
      matches.splice(matches.indexOf(match),1);

  if (matches) {
    for (const match of matches) {
      let hasArgs = false;
      if(match.includes('('))
        hasArgs = true;

      let predicateName = match.trim();
      if(hasArgs)
        predicateName = match.split('(')[0].trim();

      const objects = [];

      if(hasArgs) {
        const args = match.split('(')[1].split(')')[0];
        if(args.includes(";")){
          const temp = args.split(";");
          for(const t of temp)
            objects.push(t);
        }
        else
          objects.push(args)
      }

      if(!hasArgs)
        predicates.push({
          name: predicateName,
          arguments: []
        });

      else
        for(const object of objects)
          predicates.push({
            name: predicateName,
            arguments: object.split(',')
          });
    }
  }

  return predicates;
}

/**
 * @param {string} rule
 */
function extractPredicates(rule) {

  const headPredicates = [];
  const tailPredicates = [];

  const split = rule.split(':-');

  let head = "";
  if(split[0])
    head = split[0];

  let tail = "";
  if(split[1])
    tail = split[1];

  const headResult = extractPredicatesAux(head);
  for(const result of headResult)
    headPredicates.push(result);
  
  const tailResult = extractPredicatesAux(tail);
  for(const result of tailResult)
    tailPredicates.push(result);

  return {head: headPredicates, tail: tailPredicates}

}   

/**
 * @param {string[]} formattedText
 */
function getPredicates(formattedText){

    /*
    Creates an array without comments and empty spaces, where in each position there is an array with 2 positons:
      position 0 -> the rule's type
      position 1 -> the rule's index in the array formattedText
    */
    let nonReductantRules = [];

    for (let i = 0; i < formattedText.length; i++) {
      let ruleType = getRuleType(formattedText[i]);
      if (ruleType == COMMENT || ruleType == EMPTY) { }
      else
        nonReductantRules.push([ruleType, i]);
    }

    const predicates = [];  

    for(let i = 0; i<nonReductantRules.length; i++){
        const predicate = extractPredicates(formattedText[nonReductantRules[i][1]]);
        predicates.push(predicate);
    }

    return {predicates: predicates, nonReductantRules: nonReductantRules};
}

module.exports = {getPredicates}