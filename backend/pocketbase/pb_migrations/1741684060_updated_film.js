/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 10,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "action",
      "aventure",
      "comédie",
      "drame",
      "fantastique",
      "science-fiction",
      "horreur",
      "thriller",
      "policier",
      "western"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 1,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "action",
      "aventure",
      "comédie",
      "drame",
      "fantastique",
      "science-fiction",
      "horreur",
      "thriller",
      "policier",
      "western"
    ]
  }))

  return app.save(collection)
})
