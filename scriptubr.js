class UberPriceCalculator {
  constructor(baseFare, costPerKilometer, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKilometer = costPerKilometer;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distanceInKm, timeInMinutes) {
    const fareFromDistance = distanceInKm * this.costPerKilometer;
    const fareFromTime = timeInMinutes * this.costPerMinute;
    const totalFare = this.baseFare + fareFromDistance + fareFromTime;
    return totalFare;
  }
}
