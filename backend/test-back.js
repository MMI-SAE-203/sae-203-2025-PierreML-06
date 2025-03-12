import {
    getAllFilmsSorted,
    getAllActivitiesSorted,
    getAllGuestsSorted,
    getFilmById,
    getActivityById,
    getGuestById,
    getActivitiesByGuestId,
    getActivitiesByGuestName,
    upsertItem
} from './backend.mjs';

async function testEndpoints() {
    console.log('--- Test des Endpoints ---');

    console.log('Récupération des films triés :');
    console.log(await getAllFilmsSorted());

    console.log('Récupération des activités triées :');
    console.log(await getAllActivitiesSorted());

    console.log('Récupération des invités triés :');
    console.log(await getAllGuestsSorted());

    console.log('Test récupération film par ID :');
    console.log(await getFilmById('some-film-id'));

    console.log('Test récupération activité par ID :');
    console.log(await getActivityById('some-activity-id'));

    console.log('Test récupération invité par ID :');
    console.log(await getGuestById('some-guest-id'));

    console.log('Test récupération activités d’un invité par ID :');
    console.log(await getActivitiesByGuestId('some-guest-id'));

    console.log('Test récupération activités d’un invité par nom :');
    console.log(await getActivitiesByGuestName('Some Guest Name'));

    console.log('Test ajout/modification d’un film :');
    console.log(await upsertItem('film', { titre: 'Nouveau Film', annee_de_sortie: 2025 }));
}

testEndpoints().catch(console.error);
