function theBeatlesPlay(musicians, instruments) {
  let musicianFacts = []
  for(let ind in musicians) {
    let fact = `${musicians[ind]} plays ${instruments[ind]}`
    musicianFacts.push(fact)
  }
  return musicianFacts
}

function johnLennonFacts(fax) {
  let i = 0
  let enthusiasticStrings = []
  while(i < fax.length) {
    enthusiasticStrings.push(`${fax[i]}!!!`)
    i++
  }
  return enthusiasticStrings
}

function iLoveTheBeatles(num) {
  let loveList = ["I love the Beatles!"]
  while(num < 14) {
    loveList.push("I love the Beatles!")
    num++
  }
  return loveList
}
