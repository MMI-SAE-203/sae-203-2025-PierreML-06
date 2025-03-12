/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // remove field
  collection.fields.removeById("date2278357108")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number2278357108",
    "max": null,
    "min": null,
    "name": "annee_de_sortie",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2278357108",
    "max": "",
    "min": "",
    "name": "annee_de_sortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // remove field
  collection.fields.removeById("number2278357108")

  return app.save(collection)
})
