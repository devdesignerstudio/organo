import Banner from "./components/Banner"
import Form from "./components/Form"
import Team from "./components/Team"
import { useState } from "react"
import Footer from "./components/Footer"

function App() {
  const teams = [
    {
      name: "Programming",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX & Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovation & Management",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ]

  const [cards, setCards] = useState([])

  const newCard = (card) => {
    // debugger
    setCards([...cards, card])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teamsName={teams.map((t) => t.name)}
        onSave={(card) => newCard(card)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={cards.filter((c) => c.team === team.name)}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
