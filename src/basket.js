class Basket {
    constructor(capacity) {
        this.items = [];
        this.capacity = capacity;
        this.total = 0;
        //this.list = [];
        
    }
    add(bagel) {
        for (let i = 0; i < bagel.length; i++) {
            if (this.compareToList(bagel[i])) { 
                   return `${bagel[i]} is already in the basket`
            }
            if (this.basketCapacity()) {
                return this.items
            }
            else {
                this.items.push(bagel[i]);
                this.total++;
                
            }
           
        }
        
    
        // return the array
        return this.items;
    }

    remove(bagel) {
        for (let i = 0; i < bagel.length; i++) {
            if (!this.compareToList(bagel[i])) { 
                return `${bagel[i]} cannot be removed, it is not in the basket`
            }
        }
        //find the item in the array
        const index = this.items.indexOf(bagel);
        //remove it
        this.items.splice(index, 1);
        //return the array
        return this.items;
    }

    basketCapacity() {
        if (this.total >= this.capacity){
            return true
        } 
        else { return false 
        }
    }

    compareToList(bagel) {
        if (this.items.includes(bagel)) {
            return true
        }
        else {
            return false
        }

    }

    increaseCapacity(bb) {
        
        if (this.total <= 50) {
            return this.capacity += bb
            // return "basket increased"
        } 
        else {
            return "max limit 50"
        }
    }
        
       
}
module.exports = Basket