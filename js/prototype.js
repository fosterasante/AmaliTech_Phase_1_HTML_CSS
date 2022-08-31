var people = function() {
    
}

people.prototype.name='no name'
people.prototype.print_name=function() {
    console.log(this.name)
}

var person_1 = new people()
//person_1.name='Asante'
person_1.print_name()