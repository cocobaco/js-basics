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

let lala = new Actor('Lala', 'F', 157);

lala.printInfoFunction();

lala.printInfoArrow();

