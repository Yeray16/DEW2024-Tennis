class Player {
  name
  ranking
  birthday
  #genre
  constructor (name, ranking = 500, genre = 'female', birthday = '1/1/2000') {
    this.name = name
    this.ranking = ranking
    if (genre === 'male') this.#genre = 'male'
    else this.#genre = 'female'
    const [day, month, year] = birthday.split('/')
    this.birthday = new Date(year, month - 1, day)
  }

  get genre () {
    return this.#genre
  }

  getBirthday () {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(this.birthday)
  }

  get age () {
    const now = new Date()
    let diff = now.getFullYear() - this.birthday.getFullYear()
    if (now.getMonth() < this.birthday.getMonth()) diff--
    return diff
  }
}

module.exports = Player
