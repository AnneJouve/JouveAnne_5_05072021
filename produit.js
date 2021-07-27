/* Récupération de la chaîne de requête dans l'url */
const queryString_url_id = window.location.search;

/* Extraction de l'id */
const urlSearchParams = new URLSearchParams(queryString_url_id);
const selectedId = urlSearchParams.get("id");

/* Affichage du meuble */
    const promesse = fetch(`http://localhost:3000/api/furniture/${selectedId}`);
    promesse
        .then((response) => {
            const furnitureData = response.json(); /*j'enregistre dans une variable les données de la réponse de la promesse transformées en json. Renvoie une nouvelle promesse*/
            furnitureData.then((meuble) => { /* je récupère le tableau correspondant à mon meuble */
                const id = meuble._id;
                const description = meuble.description;
                const imageUrl = meuble.imageUrl;
                const name = meuble.name;
                const price = meuble.price / 100 + " €";
                const varnish = meuble.varnish;
                let structureVarnish = [];
                for (let i = 0; i < varnish.length; i++) {
                    structureVarnish += `<li><a class="dropdown-item" href="#">${varnish[i]}</a></li>`;
                }
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
                                                                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="option">
                                                                                            ${structureVarnish}
                                                                                            </ul>
                                                                                        </div>
                                                                                            <a href="panier.html" class="btn btn-primary"><i class="fas fa-shopping-basket"></i>&nbsp;&nbsp;Ajouter au panier</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>`;
            })
        })
        .catch((erreur) => console.log(erreur));

