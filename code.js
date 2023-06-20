//Ecriture de titre
document.getElementById("titre").innerHTML="<p>Jeu des pays</p>";
//tableau des pays
tableauPays= new Array();
tableauPays[1]='Azerbaidjan';
tableauPays[2]='Turkménistan';
tableauPays[3]='Ouzbékistan';
tableauPays[4]='Afghanistan';
tableauPays[5]='Pakistan';
tableauPays[6]='Tadjikista';
tableauPays[7]='Kirghizistan';

//fonction valider
function fonctionValider(){ 
    //boucle sur les listes
    for (var i=1; i<=7; i++)
    {
        //récupération de l'index,puis de la valeur choisie
        var indexChoisi=document.forms["listes"].elements["liste"+i].selectedIndex;
        var paysChoisi=document.forms["listes"].elements["liste"+i].options[indexChoisi].value;
        //teste si la liste i affiche le bon pays 
        if (paysChoisi== tableauPays[i]){
            //changement de style de l'élément numero i
            //document.getElementById("numero"+i).style.backgroundColor='#0066CC';
            document.getElementById("numero"+i).className='OK';
        } else {
           // document.getElementById("numero"+i).style.backgroundColor='#FFFFFF'
           document.getElementById("numero"+i).className='NOK';
        }
    }
}

//fonction Reset
function fonctionReset(){
    //boucle sur les listes
    for (var i=1; i<=7; i++)
    {
        //affichage premier valeur
        document.forms["listes"].elements["liste"+i].selectedIndex=0;
        //document.getElementById("numero"+i).style.backgroundColor='#FFFFFF';
        document.getElementById("numero"+i).className='';
    }   
}
