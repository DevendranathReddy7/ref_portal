import { useState } from "react";

export default function Player() {
    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        setSubmitted(true)
    }
    return (
        <section id="player">
            <h2>Welcome {submitted ? name : 'unknown entity'}</h2>
            <p>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <button onClick={handleSubmit}>Set Name</button>
            </p>
        </section>
    );
}
