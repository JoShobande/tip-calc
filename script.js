
class TipCalculator{
    bill
    service
    numOfPeople
    constructor(bill, service, numOfPeople){
        this.bill = bill
        this.service = service
        this.numOfPeople = numOfPeople 
    }
    getTip(){
        if (this.bill > 0 && this.numOfPeople > 0 && this.service > 0){
            return ((this.bill * this.service) / this.numOfPeople).toFixed(2) + (this.numOfPeople > 1 ? ` each`: "")
        }else{
            return `Please enter valid values`
        }

       
       
    } 
}

const calculate = document.getElementById("button").addEventListener("click", function(){
    bill = document.getElementById("amount").value
    service = document.getElementById("select").value
    numOfPeople = document.getElementById("people").value


    const tip = new TipCalculator(bill, service, numOfPeople)
    const result = tip.getTip()
    document.getElementById("result").textContent = result    
    
})









