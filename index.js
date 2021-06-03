const markdown = require('./markdown.js')
const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const { get } = require('axios')

const getMovie = () => {
  prompt({
    type: 'input',
    name: 'title',
    message: 'Enter the Title of a Movie:'
  })
    .then(({ title }) => get('https://cors-proxy-j.herokuapp.com/movies', {
      headers: {
        'Target-URL': `https://omdbapi.com/?apikey=trilogy&t=${title}`
      }
    }))
    .then(({ data: movie }) => {
      markdown.generate(movie)

      prompt({
        type: 'confirm',
        name: 'cont',
        message: 'Continue?'
      })
        .then(({ cont }) => {
          if (cont) {
            getMovie()
          } else {
            writeFile('movies.md', markdown.get(), err => {
              if (err) { console.log(err) }
              console.log('Markdown Created!')
            })
          }
        })
    })
    .catch(err => console.log(err))
}

getMovie()
