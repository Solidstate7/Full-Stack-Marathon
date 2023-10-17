// Superclass
class CoffeeTemplate {
    // This is the "template method"
    prepareCoffee() {
        this.boilWater();
        this.brewCoffee();
        this.pourInCup();
        this.addCondiments();
    }

    boilWater() {
        console.log("Boiling water");
    }

    brewCoffee() {
        console.log("Brewing coffee");
    }

    pourInCup() {
        console.log("Pouring coffee into cup");
    }

    // This method is meant to be overridden by subclasses
    addCondiments() {
        // intentionally left blank
    }
}

// Subclass 1
class CoffeeWithSugar extends CoffeeTemplate {
    // Overriding the "addCondiments" method
    addCondiments() {
        console.log("Adding sugar");
    }
}

// Subclass 2
class CoffeeWithMilk extends CoffeeTemplate {
    // Overriding the "addCondiments" method
    addCondiments() {
        console.log("Adding milk");
    }
}

// Using the classes
const simpleCoffee = new CoffeeTemplate();
simpleCoffee.prepareCoffee();
// Output:
// Boiling water
// Brewing coffee
// Pouring coffee into cup

const sugarCoffee = new CoffeeWithSugar();
sugarCoffee.prepareCoffee();
// Output:
// Boiling water
// Brewing coffee
// Pouring coffee into cup
// Adding sugar

const milkCoffee = new CoffeeWithMilk();
milkCoffee.prepareCoffee();
// Output:
// Boiling water
// Brewing coffee
// Pouring coffee into cup
// Adding milk
