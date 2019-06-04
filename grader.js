const average = (scores) => {

    let total = 0
    scores.forEach(score => {
        total =+ score
    })

    let avg = total/scores.length
    return Math.round(avg)

}

let scores = [100, 23, 59, 90, 20, 76];
console.log(average(scores))
