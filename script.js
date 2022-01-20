class persone 
    {
    constructor(nom,prenom,age,profession)


{
this.nom = nom
this.prenom = prenom
this.age = age
this.profession = profession

}
   


    funzion()
    {
        console.log((this.nom)+" "+(this.prenom)+" "+(this.age)+ " a "+(this.profession) +"ans" );
    }

 }
let primo = new persone ("alex","terrieur",25,"developperur frontend")
let secondo = new persone ("alain","terreiur",31,"dev.fullstack")
let terzo = new persone ("marie","nade",27,"dev.backend")
let quarto = new persone ("eva","nade",22,"dev frontent")


primo.funzion();
secondo.funzion()
terzo.funzion()
quarto.funzion()
