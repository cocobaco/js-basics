// https://www.youtube.com/watch?v=h33Srr5J9nY

class Actor {
    constructor(name, sex, height) {
        this.name = name;
        this.sex = sex;
        this.height =height;
    }

    printInfoFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name + ' (' + this.sex + '), height = ' + this.height);
        }, 1000)
    }

    printInfoArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name + ' (' + this.sex + '), height = ' + this.height);
        }, 1000)
    }
}

let leah = new Actor('Leah', 'F', 157);

leah.printInfoFunction();

leah.printInfoArrow();

