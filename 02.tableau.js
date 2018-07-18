var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(ville => {
    console.log(ville+"\n");
});

console.log("lettreADansTouteLesVilles = "+villes.every(ville => {
    if(ville.includes('a')) {
        return true;
    } else {
        return false;
    }
}));

console.log("auMoinsUneVilleAvecUnTiret = "+villes.some(ville => {
    if(ville.includes('-')) {
        return true;
    } else {
        return false;
    }
}));

console.log("villeSansTiretSansEspace = ["+villes.filter(ville => {
    if(!ville.includes(' ') && !ville.includes('-')) {
        return true;
    } else {
        return false;
    }
})+"]");

console.log("villesMajusculeSeTerminantParS = ["+villes.filter(ville => {
    return ville.charAt(ville.length-1) == 's';
}).map(ville => {
    return ville.toUpperCase();
})+"]");