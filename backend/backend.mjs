import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

// Récupère tous les films triés par date de projection
export async function getAllFilmsSorted() {
    let films = await pb.collection('film').getFullList({ sort: 'annee_de_sortie' });
    films = films.map((film) => {
        film.imgUrl = pb.files.getURL(film, film.affiche);
        return film;
    });
    return films
}

// Récupère toutes les activités triées par date
export async function getAllActivitiesSorted() {
    return await pb.collection('activites').getFullList({ sort: 'date_activites' });
}

// Récupère tous les invités triés par ordre alphabétique
export async function getAllGuestsSorted() {
    return await pb.collection('invite').getFullList({ sort: 'nom' });
}

// Récupère les infos d'un film par ID
export async function getFilmById(id) {
    return await pb.collection('film').getOne(id);
}

// Récupère les infos d'une activité par ID
export async function getActivityById(id) {
    return await pb.collection('activites').getOne(id);
}

// Récupère les infos d'un invité par ID
export async function getGuestById(id) {
    return await pb.collection('invite').getOne(id, { expand: 'anime' });
}

// Récupère toutes les activités d'un animateur donné par son ID
export async function getActivitiesByGuestId(guestId) {
    return await pb.collection('activites').getFullList({ filter: `invite_id = "${guestId}"`, expand: 'sera_present' });
}

// Récupère toutes les activités d'un animateur donné par son nom
export async function getActivitiesByGuestName(guestName) {
    const guest = await pb.collection('invite').getFirstListItem(`nom = "${guestName}"`);
    return getActivitiesByGuestId(guest.id);
}

// Ajoute ou modifie un film, une activité ou un invité
export async function upsertItem(collectionName, data, id = null) {
    if (id) {
        return await pb.collection(collectionName).update(id, data);
    } else {
        return await pb.collection(collectionName).create(data);
    }
}
