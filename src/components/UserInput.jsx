import { useState } from "react"

export default function UserInput(){
    const [initialInvest, setInitialInvest] = useState(0)

    const handleInitialInvestChange = event => setInitialInvest(event.target.value)

    return (
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label id="user-input label" >Initial Investment</label>
                        <input type="number" id="user-input input" required  onChange={handleInitialInvestChange} value={initialInvest}/>
                    </p>
                    <p>
                        <label id="user-input label" >Annual Investment</label>
                        <input type="number" id="user-input input" required />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label  id="user-input label" >Expected Return</label>
                        <input type="number" id="user-input input" required />
                    </p>
                    <p>
                        <label  id="user-input label" >Duration</label>
                        <input type="number" id="user-input input" required />
                    </p>
                </div>
            </section>
    )
}