/* RÉCUPÉRATION DU PARAMÈTRE D'URL ET EXTRACTION DE L'ID */
const queryString_url_id = window.location.search;
const urlSearchParams = new URLSearchParams(queryString_url_id);
const selectedId = urlSearchParams.get("id");
/* RÉCUPÉRATION DES DONNÉES ET AFFICHAGE DU MEUBLE */
const badUrl = `http://localhost:3000/api/furniture/null`;
const promesse = fetch(`http://localhost:3000/api/furniture/${selectedId}`);
if(selectedId != null) {
promesse
	.then((response) => {
		const furnitureData = response.json(); /*Enregistrement dans une constante des données en json*/
		furnitureData
		.then((meuble) => { /* Récupération des données exploitables dans un objet */
			const id = meuble._id;
			const description = meuble.description;
			const imageUrl = meuble.imageUrl;
			const name = meuble.name;
			const price = meuble.price / 100;
			const varnish = meuble.varnish;
			let structureVarnish = [];
			for (let i = 0; i < varnish.length; i++) { /* Boucle affichant dynamiquement les vernis selon le meuble sélectionné */
				structureVarnish += `<li><a class="dropdown-item" href="#">${varnish[i]}</a></li>`; /* Code HTML du menu dropdown vernis */
			}
			/* Sélection de l'emplacement où intégrer l'objet dans la page html et injection du code html */
			document.querySelector("#selected-furniture").innerHTML = `<div class="col-xxl-10 m-xxl-auto">
                                                                                <div class="card bg-light text-center mb-4">
                                                                                <img src=${imageUrl} class="card-img-top" alt="Photo du meuble en chêne Cross Table">
                                                                                    <div class="card-body">
                                                                                    <h5 class="card-title">${name}</h5>
                                                                                    <p class="card-text">${description}</p>
                                                                                    <p class="card-text fw-bold">${price} €</p>
                                                                                        <div class="dropdown mb-3 col-2 m-auto">
                                                                                            <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            Vernis
                                                                                            </button>
                                                                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="option">
                                                                                            ${structureVarnish}
                                                                                            </ul>
                                                                                        </div>
                                                                                            <a href="panier.html" class="btn btn-primary" id="add-btn"><i class="fas fa-shopping-basket"></i>&nbsp;&nbsp;Ajouter au panier</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>`;
			const ajoutPanier = document.querySelector("#add-btn"); /* sélection du bouton pour ajouter au panier */
			ajoutPanier.addEventListener("click", (event) => { /* ajout d'un événement au clic */
				event.preventDefault();
				let resumeProduct = { /* création d'un objet contenant les infos à envoyer au panier */
					produit: imageUrl,
					nom: name,
					id: id,
					prix: price
				}
				let saveProduct = JSON.parse(localStorage.getItem("product")); /* Déclaration de la variable pour enregistrer dans le local storage et conversion des données au format json du local storage au format JavaScript */
				const confirmation = () => { /* Message de confirmation d'envoi au panier */
					if (window.confirm(`${name} a bien été ajouté à votre panier. Cliquez sur OK pour le consulter, sinon cliquez sur annuler pour revenir à la page d'accueil`)) {
						window.location.href = "panier.html";
					} else {
						window.location.href = "index.html";
					}
				}
				/* Fonction pour ajouter le produit au local storage */
				const ajoutProduit = () => {
					saveProduct.push(resumeProduct);
					localStorage.setItem("product", JSON.stringify(saveProduct));
				}
				if (saveProduct) { /* Au cas où il y a des produits enregistrés dans le local storage */
					ajoutProduit();
					confirmation();
				} else { /* Si il n'y a pas de produits enregistrés dans le local storage */
					saveProduct = [];
					ajoutProduit();
					confirmation();
				}
			})
		})
	})
	.catch((erreur) => console.log(erreur));
} else {
    console.log("OK");
}