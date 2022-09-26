class BMI {
    //this is where data is initialised in the class
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    //this is where data is calculated
    calculateBMI() {
        let bmi = this.width / (this.height * 2);
        return bmi;
    }
}
//return BMI result
let myBMI = new BMI(2, 100);
let result = myBMI.calculateBMI();
console.log(result);