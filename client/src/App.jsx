import React, { useState, useEffect } from 'react'
import reactLogo from './assets/logo.png'
import './styles.css'
import Resume from "./features/profile/resume";
import API_BASE_URL from './config.js'

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0)
  const [text, setText] = useState('Ask me something')
  const [touched, setTouched] = useState(false);
  const [reply, setReply] = useState('Waiting for response')
  const [pdfText, setPdfText] = useState('')
  const [pdfLoading, setPdfLoading] = useState(false)
  const [summary, setSummary] = useState('')
  const [resume, setResume] = useState('')
  const [readmeContent, setReadmeContent] = useState('')
  const [showReadme, setShowReadme] = useState(false)

  // Load summary and resume when component mounts
  useEffect(() => {
    loadSummary()
    fetchPdfText()
  }, [])

   /* ******** System Prompt ******** */
   function buildSystemPrompt(name, summary, resume) {
    const system_prompt = `
    You are **${name}**, a Sr. Manager, Software Quality Engineering, with 25+ years of experience leading quality engineering across web, mobile, and AI-powered platforms. You are answering questions on your personal website. Your job is to represent yourself faithfully, professionally, and engagingly to recruiters, engineering leaders, and potential clients. If you don't know something, say so succinctly.

    ## Voice & Style
    - Speak in first person (e.g., "I led…", "I focus on…").
    - Be concise, confident, and technically credible.
    - ONLY use information provided in the Summary and Resume sections below.
    - Do NOT make up specific details, metrics, or experiences not mentioned in the provided context.
    - If asked about something not in the provided context, say "I don't have specific details about that in my records" and offer a general perspective instead.
    - IMPORTANT: When specific metrics, percentages, or achievements are mentioned in the Resume section, you MUST include them in your response. Do not be overly conservative - use the exact numbers and percentages provided.
    - FORMATTING: Do not use Markdown formatting (like **bold** or *italic*). Use plain text only.

    ## Summary:
    ${summary}

    ## Resume:
    ${resume}

    ## Behavioral Rules
    - Always answer as "Rudolph Scott," grounded ONLY in the context above.
    - If asked about topics outside this scope, say it's outside your direct experience and briefly describe how you would approach it.
    - If asked about confidential or proprietary info, decline politely and offer a general perspective instead.
    - When appropriate, connect answers back to measurable outcomes, risk-based testing, reliability, accessibility, and developer velocity.
    - IMPORTANT: Do not fabricate specific details, metrics, or experiences that are not explicitly mentioned in the Summary or Resume sections.
    - CRITICAL: When metrics, percentages, or specific achievements are mentioned in the Resume section, you MUST reference them with their exact values (e.g., "30% to 90%", "20% reduction", "95% compliance").

    `.trim();
      
        return system_prompt;
    }

  /* ******** PDF Parsing ******** */
  const fetchPdfText = async () => {
    try {
      setPdfLoading(true)
      setPdfText('Loading PDF...')
      const resp = await fetch(`${API_BASE_URL}/api/pdf-text`)
      
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`)
      }
      
      const text = await resp.text()
      if (!text) {
        throw new Error('Empty response from server')
      }
      
      const data = JSON.parse(text)
      
      if (data.text && data.text.length > 0) {
        // Combine all parts of the resume for complete information
        const fullResumeText = data.text.join('\n\n')
        setPdfText(fullResumeText)
        setResume(fullResumeText) // Also set the resume state
      } else {
        setPdfText('No text found in PDF')
      }
    } catch (e) {
      setPdfText(`Error: ${e.message}`)
    } finally {
      setPdfLoading(false)
    }
  }

  /* ******** Summary About Me Parsing ******** */
  const loadSummary = async () => {
    try {
    console.log('Loading summary from http://localhost:3001/api/summary')
    // Load summary from the API endpoint
    const response = await fetch(`${API_BASE_URL}/api/summary`);
      
      console.log('Response status:', response.status)
      console.log('Response URL:', response.url)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const text = await response.text()
      if (!text) {
        throw new Error('Empty response from server')
      }
      
      const data = JSON.parse(text)
      
      if (data.summary) {
        setSummary(data.summary);
      } else {
        setSummary('No summary found');
      }
    } catch (e) {
      console.error('Summary loading error:', e)
      setSummary(`Error: ${e.message}`)
    }
  }

  /* ******** README.md Loading ******** */
  const loadReadme = async () => {
    if (showReadme) {
      // If already showing, just hide it
      setShowReadme(false);
      return;
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/readme`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const text = await response.text()
      if (!text) {
        throw new Error('Empty response from server')
      }
      
      const data = JSON.parse(text)
      
      if (data.readme) {
        setReadmeContent(data.readme);
        setShowReadme(true);
      } else {
        setReadmeContent('No README found');
        setShowReadme(true);
      }
    } catch (e) {
      setReadmeContent(`Error: ${e.message}`)
      setShowReadme(true);
    }
  }
  
/* ******** CAll to OpenAI ******** */
const send = async () => {
  try {
    setReply('Loading...')
    const system_prompt = buildSystemPrompt('Rudolph Scott', summary, resume)
    
    console.log('Sending chat request to /api/chat')
    console.log('User input:', text)
    console.log('System prompt length:', system_prompt.length)
    
    const resp = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: system_prompt },
          { role: 'user', content: text }
        ]
      })
    })
    
    console.log('Response status:', resp.status)
    console.log('Response URL:', resp.url)
    console.log('Response headers:', resp.headers)
    
    if (!resp.ok) {
      const errorText = await resp.text()
      console.error('Error response:', errorText)
      throw new Error(`HTTP error! status: ${resp.status}`)
    }
    
    const responseText = await resp.text()
    if (!responseText) {
      throw new Error('Empty response from server')
    }
    
    console.log('Response text:', responseText)
    const data = JSON.parse(responseText)
    setReply(data.reply ?? JSON.stringify(data, null, 2))
  } catch (e) {
    console.error('Chat error:', e)
    setReply(`Error: ${e.message}`)
  }
}
 
    

  // Keep content inside so the button can use `send`
  const content = [
    [
      <div>
        <Resume />  {/* 👈 This "calls" the Resume function */}
      </div>,
    ],
    [
      <div className="flex-container" style={{ marginTop: 12 }}>
        <input
          style={{ flex: 1, padding: 8 }}
          value={text}
          onFocus={() => {
            if (!touched) {
              setText('');      // clear text only once
              setTouched(true); // prevent clearing again
            }
          }}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={send} className="submit-button">Send</button>
      </div>,
      <pre>{reply}</pre>,
      <div style={{ marginTop: 12 }}>
        <b>How I implemented this: </b>
        <button onClick={loadReadme} className="submit-button">
          {showReadme ? 'Hide' : 'View'}
        </button>
        {showReadme && readmeContent && (
          <div className="readme-content">
            <h3>Project README:</h3>
            <pre>{readmeContent}</pre>
          </div>
        )}
      </div>
    ],
    [
      'Placeholder', 
    ]
  ]

  return (
    <div style={{ padding: 1, fontFamily: 'system-ui, sans-serif' }}>
      <header>
        <img src={reactLogo} alt="React logo" />
        <div>
          <h1>Demo on React + Vite + Express + OpenAI</h1>
          
        </div>
      </header>

      {/* ******** Tabs ******** */}
      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? 'active' : ''}
            onClick={() => setActiveContentIndex(0)}>
            Resume
          </button>
          <button
            className={activeContentIndex === 1 ? 'active' : ''}
            onClick={() => setActiveContentIndex(1)}>
            Chat with AI Version of myself
          </button>
          <button
            className={activeContentIndex === 2 ? 'active' : ''}
            onClick={() => setActiveContentIndex(2)}>
            Upcoming Projects
          </button>
        </menu>

        <div id="tab-content">
          <div>
            {content[activeContentIndex].map((item, i) => (
              <div key={i} style={{ marginBottom: '8px' }}>
                {React.isValidElement(item) ? item : <span>{item}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>     
    </div>
  )
}