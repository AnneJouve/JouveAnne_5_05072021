/* Récupération de la chaîne de requête dans l'url */
const queryString_url_id = window.location.search;

/* Extraction de l'id */
const urlSearchParams = new URLSearchParams(queryString_url_id);
const selectedId = urlSearchParams.get("id");

/* Définition d'un modèle pour le meuble sélectionné */
/*class SelectedFurniture {
    constructor(jsonSelectedFurniture){
        jsonSelectedFurniture && Object.assign(this, jsonSelectedFurniture);
    }
    getFormatedSelectedPrice(selectedFurniture){
        return this.price / 100;
    }
}*/

/* Affichage du meuble sélectionné */
/*fetch(`http://localhost:3000/api/furniture/${selectedId}`)
    .then( response => response.json())
    .then( selectedFurniture => {
        new SelectedFurniture(jsonSelectedFurniture);
        document.querySelector("#selected-furniture").innerHTML = `<div class="col-xxl-10 m-xxl-auto">
                                                                        <div class="card bg-light text-center mb-4">
                                                                        <img src="${selectedFurniture.imageUrl}" class="card-img-top" alt="Photo du meuble en chêne Cross Table">
                                                                            <div class="card-body">
                                                                            <h5 class="card-title">${selectedFurniture.name}</h5>
                                                                            <p class="card-text">${selectedFurniture.description}</p>
                                                                            <p class="card-text fw-bold">${furniture.getFormatedSelectedPrice()} €</p>
                                                                                <div class="dropdown mb-3 col-2">
                                                                                    <button class="btn btn-outline-primary dropdown-toggle text-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    Vernis
                                                                                    </button>
                                                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                                        <li><a class="dropdown-item" href="#">Tan</a></li>
                                                                                        <li><a class="dropdown-item" href="#">Chocolate</a></li>
                                                                                        <li><a class="dropdown-item" href="#">Black</a></li>
                                                                                        <li><a class="dropdown-item" href="#">White</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                                    <a href="panier.html" class="btn btn-primary"><i class="fas fa-shopping-basket"></i>&nbsp;&nbsp;Ajouter au panier</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>`;
    });*/

    const promesse = fetch(`http://localhost:3000/api/furniture/${selectedId}`);
    promesse
        .then((response) => {
            console.log(response);
            const furnitureData = response.json(); /*j'enregistre dans une variable les données de la réponse de la promesse transformées en json. Renvoie une nouvelle promesse*/
            console.log(furnitureData);
            furnitureData.then((meuble) => { /* je récupère le tableau correspondant à mon meuble */
                const id = meuble._id;
                const description = meuble.description;
                const imageUrl = meuble.imageUrl;
                const name = meuble.name;
                const price = meuble.price / 100 + " €";
                const varnish = meuble.varnish;
                document.querySelector("#selected-furniture").innerHTML = `<div class="col-xxl-10 m-xxl-auto">
                                                                                <div class="card bg-light text-center mb-4">
                                                                                <img src=${imageUrl} class="card-img-top" alt="Photo du meuble en chêne Cross Table">
                                                                                    <div class="card-body">
                                                                                    <h5 class="card-title">${name}</h5>
                                                                                    <p class="card-text">${description}</p>
                                                                                    <p class="card-text fw-bold">${price}</p>
                                                                                        <div class="dropdown mb-3 col-2 m-auto">
                                                                                            <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            Vernis
                                                                                            </button>
                                                                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                                                <li><a class="dropdown-item" href="#">Tan</a></li>
                                                                                                <li><a class="dropdown-item" href="#">Chocolate</a></li>
                                                                                                <li><a class="dropdown-item" href="#">Black</a></li>
                                                                                                <li><a class="dropdown-item" href="#">White</a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                            <a href="panier.html" class="btn btn-primary"><i class="fas fa-shopping-basket"></i>&nbsp;&nbsp;Ajouter au panier</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>`;
            })
        })
        .catch((erreur) => console.log(erreur));

