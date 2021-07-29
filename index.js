/* Définition d'un modèle pour un article furniture */
class Furniture {
	constructor(jsonFurniture) {
		jsonFurniture && Object.assign(this, jsonFurniture);
	}
	/* méthode pour mettre les prix en euros */
	getFormatedPrice(furniture) {
		return this.price / 100;
	}
}
/* Appel de l'API, affichage de l'ensemble des articles */
fetch("http://localhost:3000/api/furniture")
	.then(data => data.json()) /* fonction récupérant la promesse et les données, formatées en json */
	.then(jsonListFurniture => { /* récupération de la nouvelle promesse et des données exploitables */
		for (let jsonFurniture of jsonListFurniture) { /* boucle créant de manière dynamique un nouvel objet basé sur le modèle pour chaque article */
			let furniture = new Furniture(jsonFurniture);
			/* sélection de l'emplacement où intégrer l'objet dans la page html et injection du code html */
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
	/* gestion des erreurs en cas de problème avec le serveur */
	.catch(function (erreur) {
		console.log(erreur);
	});