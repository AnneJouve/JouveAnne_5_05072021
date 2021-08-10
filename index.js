/* DÉFINITION D'UNE CLASSE SERVANT DE MODÈLE POUR CHAQUE MEUBLE */
class Furniture {
	constructor(jsonFurniture) {
		jsonFurniture && Object.assign(this, jsonFurniture); /* Utilisation de la méthode Object.assign pour copier facilement les valeurs des propriétés */
	}
	/* méthode pour mettre les prix en euros */
	getFormatedPrice(furniture) {
		return this.price / 100;
	}
}
/* RÉCUPÉRATION DES DONNÉES ET AFFICHAGE DES ARTICLES */
fetch("http://localhost:3000/api/furniture") /* Envoi de la requête au service Web */
	.then(data => data.json()) /* Conversion de la réponse à la requête au format json */
	.then(jsonListFurniture => { /* Récupération de la nouvelle promesse et des données exploitables */
		for (let jsonFurniture of jsonListFurniture) { /* Boucle créant de manière dynamique un nouvel objet basé sur le modèle pour chaque article */
			let furniture = new Furniture(jsonFurniture);
			/* Sélection de l'emplacement où intégrer l'objet dans la page html et injection du code html */
			document.querySelector("#furniture").innerHTML += `<div class="col-lg-4 col-xxl-3">
                                                                    <div class="card bg-light text-center mb-4">
                                                                        <img src="${furniture.imageUrl}" alt="image" class="card-img-top" />
                                                                            <div class="card-body">
                                                                                <h5 class="card-title">${furniture.name}</h5>
                                                                                <p class="card-text lead">${furniture.description}</p>
                                                                                <p class="card-text fw-bold">${furniture.getFormatedPrice()} €</p>
                                                                                <a href="produit.html?id=${furniture._id}" class="btn btn-primary stretched-link">Détails</a>
                                                                            </div>
                                                                    </div>
                                                                </div>`;
		}
	})
	/* En cas de défaillance de l'API */
	.catch(function (erreur) {
		console.log(erreur);
	});