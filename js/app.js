function calcolaPrezzo() {
    // Source of truth (Valori dal form)
    const nomeCognome = document.getElementById("nomeCognome").value;
    const km = parseFloat(document.getElementById("km").value);
    const eta = document.getElementById("eta").value;

    // Calcolo il prezzo base
    const prezzoBase = km * 0.21;

    // Applico gli sconti in base all'età
    let prezzoFinale = prezzoBase;
    if (eta === "minorenne") {
        prezzoFinale *= 0.8;
    } else if (eta === "over65") {
        prezzoFinale *= 0.6;
    }

    // Genera un codice CP casuale
    const codiceCP = Math.floor(100000 + Math.random() * 900000);

    // Genero un numero carrozza casuale
    const numeroCarrozza = Math.floor(Math.random() * 10 + 1);

    // Stabilisco il tipo di biglietto 
    let tipoBiglietto = 'Biglietto Standard'
    if (eta === "minorenne") {
        tipoBiglietto = 'Ridotto'
    } else if (eta === "over65") {
        tipoBiglietto = 'Scontato'
    }

    // Rappresento il risultato nel DOM
    
    const risultato = document.getElementById("risultato");
    risultato.innerHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Nome Passeggero</th>
                    <th>Offerta</th>
                    <th>Carrozza</th>
                    <th>Codice CP</th>
                    <th>Costo biglietto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${nomeCognome}</td>
                    <td>${tipoBiglietto}</td>
                    <td>${numeroCarrozza}</td>
                    <td>${codiceCP}</td>
                    <td>€ ${prezzoFinale.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    `;
}