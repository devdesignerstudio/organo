import Banner from "./components/Banner"
import Form from "./components/Form"
import Team from "./components/Team"
import { useState } from "react"
import Footer from "./components/Footer"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programming",
      color: "#57C278",
      // primaryColor: "rgba(0, 200, 111, 0.15)",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82CFFA",
      // primaryColor: "#E8FFFF",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
      // primaryColor: "#E9FFE3",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
      // primaryColor: "rgba(241, 97, 101, 0.15)",
    },
    {
      id: uuidv4(),
      name: "UX & Design",
      color: "#DB6EBF",
      // primaryColor: "rgba(220, 110, 190, 0.15)",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFBA05",
      // primaryColor: "rgba(255, 186, 5, 0.15)",
    },
    {
      id: uuidv4(),
      name: "Inovation & Management",
      color: "#FF8A29",
      // primaryColor: "rgba(255, 140, 42, 0.15)",
    },
  ])

  const [cards, setCards] = useState([])

  const collaboratorsCards =
    localStorage.getItem("collaborators") !== null
      ? JSON.parse(localStorage.getItem("collaborators"))
      : []

  const newCard = (card) => {
    card.id = uuidv4()
    // debugger
    const newCollaborators = [...collaboratorsCards, card]
    setCards(newCollaborators)
    localStorage.setItem("collaborators", JSON.stringify(newCollaborators))
  }

  function deleteCard(idCard) {
    const newCollaborators = collaboratorsCards.filter(
      (card) => card.id !== idCard
    )
    localStorage.setItem("collaborators", JSON.stringify(newCollaborators))
  }

  function changeTeamColor(color, id) {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color
        }
        return team
      })
    )
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teamsName={teams.map((t) => t.name)}
        onSave={(card) => newCard(card)}
      />
      <section className="myteams">
        {collaboratorsCards.length > 0 && <h1>My organization</h1>}
        {teams.map((team, index) => (
          <Team
            changeColor={changeTeamColor}
            key={index}
            teamId={team.id}
            name={team.name}
            // primaryColor={team.primaryColor}
            color={team.color}
            collaborators={collaboratorsCards.filter(
              (c) => c.team === team.name
            )}
            onDelete={deleteCard}
          />
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default App
