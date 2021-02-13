const express = require('express')
const database = require('./database.js')

const app = express()
app.use(express.json())

//Get
app.get('/api/notes/', (req, res) => {
  const notes = database.allNotes()
  res.send({
    notes: notes
  })
})

//Post
app.post('/api/notes', (req, res) => {
  const note = database.createNote(req.body)
  res.send(note) 
})

//Delete
app.delete('/api/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id)
  const result = database.deleteNote(noteId)
  res.send(result) 
})

//Update
app.patch('/api/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id) 
  const data = req.body 
  const result = database.updateNote(noteId, data)
  res.send(result) 
})

app.listen(8080, () => {
  console.log("The server is listening on port 8080")
})


/////BEFORE REFACTOR
/////keeping this code just for future reference


// let notes = [
//   {
//     id: 1,
//     title: "Hiking gear to buy",
//     item1: "trail shoes",
//     item2: "mask",
//     item3: "wool hat",
//     completed: false
//   },
//   {
//     id: 2,
//     title: "Places I want to go",
//     item1: "Grouse Mountain",
//     item2: "Deer Lake",
//     item3: "Joffre Lake",
//     completed: false
//   },
//   {
//     id: 3,
//     title: "Hiking essentials",
//     item1: "Water Bottle",
//     item2: "Protein Bars",
//     item3: "First Aid Kit",
//     completed: false
//   }
// ]

// app.get('/api/notes', (req, res) => {
//   res.send({
//     notes: notes
//   })
// })

// /////////POST
// // app.post('/api/notes', (req, res) => {
// //   const data = req.body
// //   console.log(data)
// //   res.send("ok")
// // })

// app.post('/api/notes', (req, res) => {
//   const note = req.body 
//   note.id = notes.length + 1 
//   notes.push(note)
//   res.send(note)
// })

// /////////DELETE
// // app.delete('/api/notes/:id', (req, res) => {
// //   const noteId = parseInt(req.params.id)
// //   console.log(noteId)
// //   res.send({id: noteId})
// // })

// app.delete('/api/notes/:id', (req, res) => {
//   const noteId = parseInt(req.params.id)
//   const noteIndex = notes.findIndex(note => note.id === noteId)
//   if (noteIndex !== -1) { 
//     notes.splice(noteIndex, 1)
//   }
//   res.send({id: noteId}) 
// })

// /////////PATCH
// // app.patch('/api/notes/:id', (req, res) => {
// //   const noteId = parseInt(req.params.id)
// //   const data = req.body
// //   console.log(noteId, data)
// //   res.send({id: noteId, ...data})
// // })

// app.patch('/api/notes/:id', (req, res) => {
//   const noteId = parseInt(req.params.id) 
//   const data = req.body 
//   if (data.completed !== undefined) { 
//     const note = notes.find(note => note.id === noteId)
//     note.completed = data.completed
//   }
//   res.send({id: noteId, ...data}) 
// })


// /////////LISTEN
// app.listen(8080, () => {
//   console.log("The server is listening on port 8080")
// })