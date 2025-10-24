import { useState } from 'react'
import reactLogo from './assets/logo.png'
import './styles.css'


const content = [
  [
    "React is extremely popular",
    "It has a very active and versatile ecosystem"
  ],
  [   
       // Button rendered by ActiveContent using ctx
       <button onClick={send}>Send</button>,
    "State",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "React Native (build native mobile apps with React)"
  ]
];




export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [text, setText] = useState('Write a one-sentence pep talk.')
  const [reply, setReply] = useState('')

  const send = async () => {
    setReply('Loading...')
    const resp = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: 'You are a concise assistant.' },
          { role: 'user', content: text }
        ]
      })
    })
    const data = await resp.json()
    setReply(data.reply ?? JSON.stringify(data, null, 2))
  }

  return (
    <div style={{ padding: 1, fontFamily: 'system-ui, sans-serif' }}>
      <header>
        <img src={reactLogo} alt="logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

    /******** Tabs ********/
    <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            OpenAI Communication
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>



      /******** OpenAI ********/
      {/* <div style={{ display: 'flex', gap: 8 }}>
        <input style={{ flex: 1, padding: 8 }} value={text} onChange={e => setText(e.target.value)} />
        <button onClick={send}>Send</button>
      </div>
      <pre style={{ background:'#f6f8fa', padding:12, marginTop:16 }}>{reply}</pre>  */}
    </div>
  )
}