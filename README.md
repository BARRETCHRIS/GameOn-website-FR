# Projet GameOn 

_Projet n°4 de la formation Développeur d'application JavaScript React d'Open Classrooms_  
_Etudiant auteur Christelle Barret, Crazy Beasty_
   
--- 
## Fichier HTML :  
  
###Partie <body> :
    
1. En-tête (Header) : Il contient le logo de l'entreprise et la barre de navigation (menu).  
  
2. Section principale (Main) : C'est l'endroit où le contenu principal de la page est affiché.  
  
3. Boutons d'inscription (je m'inscris) : Ils sont situés dans la section principale et sont liés à l'ouverture du formulaire de réservation.  
  
4. Formulaire de réservation : Il est caché initialement et apparaît lorsqu'un utilisateur clique sur le bouton d'inscription. Il permet aux utilisateurs de saisir leurs informations.  
  
5.Pied de page (Footer) : Il contient le message de droits d'auteur.
Fichier CSS :  
  
---    
## Fichier CSS :  
  
1. Variables CSS : Ces variables sont utilisées pour définir des valeurs réutilisables dans tout le code CSS.  
  
2.Réinitialisation CSS : Elle supprime les marges et les remplacements de styles par défaut des navigateurs.  
  
3. Styles de base : Ces styles s'appliquent à tout élément (*). Par exemple, la police de caractères, la taille de police, etc.  
  
4. Barre de navigation : Cela gère le style de la barre de navigation, notamment les liens, la couleur de fond au survol, et la disposition en mode responsive.  
  
5. Styles de la section principale : Ce sont les styles qui s'appliquent à la partie principale de la page.  
  
6. Styles de bouton : Ces styles s'appliquent aux boutons, notamment la couleur de fond, la taille, et la marge.  
  
7. Styles du formulaire modal : Cela gère le style du formulaire de réservation lorsqu'il apparaît en surimpression.  
  
---    
## Fichier JavaScript :  
### (modal.js) :  
  
1. Fonction editNav : Cette fonction gère le comportement du menu de navigation lorsqu'il est affiché sur des écrans étroits (mode responsive).  
  
2. Fonction launchModal : Elle affiche le formulaire modal lorsque l'utilisateur clique sur le bouton d'inscription.  
  
3. Fonction closeModal : Elle ferme le formulaire modal lorsqu'on clique sur le bouton de fermeture.  
  
### (form.js) :  
  
1. Fonctions de gestion d'erreurs : Ces fonctions sont utilisées pour vérifier si les données saisies dans le formulaire sont valides. 
  
2. Fonction thanksBooking : Elle est appelée lorsque toutes les données du formulaire sont valides. Elle remplace le formulaire par un message de remerciement.  
    
### Explication générale :  
  
Le code JavaScript vérifie les données du formulaire lorsqu'il est soumis. Il utilise des expressions régulières pour valider les entrées, puis affiche des messages d'erreur appropriés s'il y a des problèmes. Si toutes les données sont valides, un message de remerciement est affiché à la place du formulaire.
