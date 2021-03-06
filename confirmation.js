/*FONCTION POUR RÉCUPÉRER L'ORDERID ET LE MONTANT TOTAL DU LOCAL STORAGE ET LES AFFICHER*/
const getAndDisplayConfirmation = () => {
    /* Récupération de l'orderId dans le local storage */
    const responseId = localStorage.getItem("responseId");
    /* Récupération du montant total de la commande dans le local storage */
    const total = localStorage.getItem("montantTotal");
    /* Affichage du récapitulatif html */
    document.querySelector("#recap").innerHTML = `<div class="col-md-10 col-lg-8 col-xl-6 col-xxl-5">
                                                    <div class="card">
                                                        <div class="card-header fw-bold">
                                                        Récapitulatif
                                                        </div>
                                                        <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">Identifiant : ${responseId}</li>
                                                        <li class="list-group-item">Montant total : ${total} €</li>
                                                        </ul>
                                                    </div>
                                                </div>`;
}
/*APPEL DE LA FONCTION*/
getAndDisplayConfirmation();