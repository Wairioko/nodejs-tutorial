class SuperHero{
 constructor(name, city){
    this.name = name;
    this.city = city;
 }

 get_name_city(){
    return {name: this.name, city:this.city}
 }

 set_name_city(name, city){
    this.name = name
    this.city = city;
 }

}

module.exports = new SuperHero("Batman", "Gotham")

