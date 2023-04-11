function Formulaire(nom ="", prenom="", email="", telephone="", ville="",
                        province="", motdepasse="", nomAnimal="", ageAnimal=0,
                        sexeAnimal="", especeAnimal="", raceAnimal="", imageAnimal="",
                        commentaire=""){
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.telephone = telephone;
    this.ville = ville;
    this.province = province;
    this.motdepasse = motdepasse;
    this.nomAnimal = nomAnimal;
    this.ageAnimal = ageAnimal;
    this.sexeAnimal = sexeAnimal;
    this.especeAnimal = especeAnimal;
    this.raceAnimal = raceAnimal;
    this.imageAnimal = imageAnimal;
    this.commentaire = commentaire;
}

$("form").submit(function (){
    if ($("#motdepasse").val() === $("#confirmmdp").val()){

        // Aller chercher valeur des champs
        const nom = $('#nom').val();
        const prenom = $('#prenom').val();
        const email = $('#email').val();
        const telephone = $('#telephone').val();
        const ville = $('#ville').val();
        const province = $('#province').val();
        const motdepasse = $('#motdepasse').val();
        const nomAnimal = $('#nomAnimal').val();
        const ageAnimal = $('#ageAnimal').val();
        const sexeAnimal = $('#sexeAnimal').val();
        const especeAnimal = $('#especeAnimal').val();
        const raceAnimal = $('#raceAnimal').val();
        const imageAnimal = $('#imageAnimal').val();
        const commentaire = $('#commentaire').val();

        // Creer un objet
        const formulaire = new Formulaire(nom, prenom, email, telephone, ville, province, motdepasse, nomAnimal, ageAnimal, sexeAnimal, especeAnimal, raceAnimal, imageAnimal, commentaire);

        // Envoyer des données au serveur JSON
        $.ajax('https://641b49fa9b82ded29d4f0c5b.mockapi.io/users', {
            // on envoie le nouvel objet json à ajouter au serveur
            data : JSON.stringify(formulaire),
            contentType : 'application/json',
            type : 'POST'
        });

        // Stocker l'objet dans le stockage local
        localStorage.setItem('formulaire', JSON.stringify(formulaire));
        return true;
    }
    else{

    }
});