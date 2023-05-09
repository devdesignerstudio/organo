import Banner from "./components/Banner"
import Form from "./components/Form"
import Team from "./components/Team"
import { useState } from "react"
import Footer from "./components/Footer"
import { v4 as uuidv4 } from "uuid"

function App() {
  const collaboratorsCards =
    localStorage.getItem("cards") !== null
      ? JSON.parse(localStorage.getItem("cards"))
      : []

  const [cards, setCards] = useState(collaboratorsCards)

  const teamsCards =
    localStorage.getItem("teams") !== null
      ? JSON.parse(localStorage.getItem("teams"))
      : []

  const [teams, setTeams] = useState(teamsCards)

  const newCard = (card) => {
    card.id = uuidv4()
    card.star = false
    // debugger
    const newCollaborators = [...cards, card]
    setCards(newCollaborators)
    localStorage.setItem("cards", JSON.stringify(newCollaborators))
  }

  function deleteCard(idCard) {
    const newCollaborators = collaboratorsCards.filter(
      (card) => card.id !== idCard
    )
    setCards(newCollaborators)
    localStorage.setItem("cards", JSON.stringify(newCollaborators))
  }

  function changeTeamColor(color, id) {
    const updatedTeam = teams.map((team) => {
      if (team.id === id) {
        team.color = color
      }
      return team
    })
    setTeams(updatedTeam)
    localStorage.setItem("teams", JSON.stringify(updatedTeam))
  }

  function createTeam(newTeam) {
    newTeam.id = uuidv4()
    const newTeams = [...teamsCards, newTeam]
    setTeams(newTeams)
    localStorage.setItem("teams", JSON.stringify(newTeams))
  }

  function handleFavorite(id) {
    const updatedFavorite = cards.map((card) => {
      if (card.id === id) card.star = !card.star
      return card
    })
    setCards(updatedFavorite)
    localStorage.setItem("cards", JSON.stringify(updatedFavorite))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        createTeam={createTeam}
        teamsName={teams.map((t) => t.name)}
        onSave={(card) => newCard(card)}
      />
      <section className="myteams">
        {cards.length > 0 && <h1>My organization</h1>}
        {teams.map((team, index) => (
          <Team
            onFavorite={handleFavorite}
            changeColor={changeTeamColor}
            key={index}
            teamId={team.id}
            name={team.name}
            // primaryColor={team.primaryColor}
            color={team.color}
            collaborators={cards.filter((c) => c.team === team.name)}
            onDelete={deleteCard}
          />
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default App
