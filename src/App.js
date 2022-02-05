import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"
import "./style.css"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.title}
                {...item}
                
            />
        )
    })
    return (
        <div className = "Main-div">
            <Header />
            <section className = "Card-section">
                {cards}
            </section>
        </div>
        
    )
}