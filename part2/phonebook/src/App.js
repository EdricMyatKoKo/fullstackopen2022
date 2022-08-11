import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {

  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')

  //const [newPerson, setNewPerson] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()
    //console.log(newName)
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }
  
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const personsToShow = showAll
  ? persons : persons
  //: persons.filter(person => person.important === true)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
       {personsToShow.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
      <form onSubmit={addPerson}>
        <div>
        <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}
/*
const addPerson = (event) => {
  event.preventDefault()
  console.log('button clicked', event.target)
}
*/
export default App