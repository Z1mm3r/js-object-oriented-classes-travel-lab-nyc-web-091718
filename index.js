let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Driver{
  constructor(name,startDate){
    this.name = name
    this.startDate = fakeToRealDate(startDate);
  }

  startDate(){
    return startDate
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear()
  }

}

class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let distance = 0
    let startAve = eastWest.indexOf(this.beginningLocation["horizontal"])
    let endAve = eastWest.indexOf(this.endingLocation["horizontal"])

    distance += Math.abs(startAve - endAve);
    distance += Math.abs(parseInt(this.beginningLocation["vertical"]) - parseInt(this.endingLocation["vertical"]))
    return distance
  }

  estimatedTime(isPeak){
    if(isPeak)
      return this.blocksTravelled() / 2
    return this.blocksTravelled() / 3
  }

}

function fakeToRealDate(fakeDate)
{
  return new Date(`${fakeDate} 00:00:00`);
}
