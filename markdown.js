const markdown = {
  value: '',
  generate (movie) {
    this.value += `![${movie.title}](${movie.poster})\n`
    this.value += `# ${movie.title}\n`
    this.value += `## Directed by ${movie.director}\n`
    this.value += `### Released in ${movie.year}\n`
    this.value += `> ${movie.plot}\n`
    this.value += '---\n'
  },
  get () {
    return this.value
  }
}

module.exports = markdown
