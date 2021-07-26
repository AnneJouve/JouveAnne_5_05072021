/* Format d'un article furniture */
class Furniture {
    constructor(jsonFurniture){
        jsonFurniture && Object.assign(this, jsonFurniture);
    }
    getFormatedPrice(furniture){ /* méthode pour mettre les prix en euros */
        return this.price / 100;
    }
}



/* Appel de l'API, affichage de l'ensemble des articles */
fetch("http://localhost:3000/api/furniture") 
    .then( data => data.json()) /* récupération des données brutes que l'on transforme en json */
    .then( jsonListFurniture => {
        for(let jsonFurniture of jsonListFurniture) {
            let furniture = new Furniture(jsonFurniture);
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
    }); 