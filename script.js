$(document).ready(function (){

    $nomValide = false;
    $emailValide = false;

    class participant {
        constructor(nom = "", ecole="") {
            this.nom = nom;
            this.ecole = ecole;
        }
        toString() {
            return "<div class='col-xl-3 col-lg-4 col-md-4 col-sm-5 col-5 border m-4'><p>" + this.nom + "</p><p>" + this.ecole + "</p></div>"
        }
    }

    $("#nom").keyup(function (){
        $nom = $("#nom").val();

        if ($nom.length > 0)
        {
            $nomValide = true
        }
        else {
            $nomValide = false
        }
        GererBouton()
    });

    // On doit raffraichir la page pour que la validation du email marche apres quil ai valider la premiere fois, si on veux tester un autre email
    $("#email").keyup(function (){
        $email = $("#email").val().split('@')[1];
        $etablissement = $("#etablissement").val();

        if ($etablissement === "Cégep Outaouais")
        {
            if ($email === "cegepoutaouais.qc.ca") {
                $emailValide = true
            }
            else {
                $emailValide = true
            }
        }
        else if ($etablissement === "Heritage"){
            if ($email === "cegep-heritage.qc.ca"){
                $emailValide = true
            }
            else {
                $emailValide = false
            }
        }
        else {
            if ($email === "uqo.ca"){
                $emailValide = true
            }
            else {
                $emailValide = false
            }
        }
        GererBouton()
    });

    function GererBouton() {
        if($nomValide && $emailValide){
            $("#soumettre").removeAttr("disabled");
        }
        else {
            $("#soumettre").attr("disabled", "disabled");
        }
    }

    $("#soumettre").click(function (event){

        event.preventDefault()

        $nom = $("#nom").val();
        $ecole = $("#etablissement").val();
        const $nouveauParticipant = new participant($nom, $ecole);
        $("#participants").append($nouveauParticipant.toString());
    });
});