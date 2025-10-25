import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";
import { PDFDocument } from 'pdf-lib';
import pdf from 'pdf-text-extract';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());
app.use(express.json());

// GET /api/pdf-text -> reads a local PDF on the server's disk
console.log("PDF parsing ready...");
app.get("/api/pdf-text", async (_req, res) => {
    try {
      const pdfPath = path.join(__dirname, "assets", "RudolphScottResume.pdf");
      
      // Check if file exists first
      try {
        await fs.access(pdfPath);
      } catch (accessError) {
        return res.status(404).json({ error: "PDF file not found at " + pdfPath });
      }
      
      // Extract text from PDF using pdf-text-extract
      const extractText = (filePath) => {
        return new Promise((resolve, reject) => {
          pdf(filePath, (err, text) => {
            if (err) {
              reject(err);
            } else {
              resolve(text);
            }
          });
        });
      };
      
      const extractedText = await extractText(pdfPath);
      
      res.json({ 
        text: extractedText,
        message: "PDF text extracted successfully",
        textLength: extractedText.length
      });
      
      console.log("PDF text extracted successfully");
    } catch (e) {
      console.error("PDF parsing error:", e.message);
      res.status(500).json({ error: e.message });
    }
  });



// Openai
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// API route handler
app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.get("/api/summary", async (_req, res) => {
  try {
    const summaryPath = path.join(__dirname, "..", "client", "src", "features", "profile", "summary.txt");
    
    try {
      await fs.access(summaryPath);
    } catch (accessError) {
      return res.status(404).json({ error: "Summary file not found at " + summaryPath });
    }
    
    const summaryText = await fs.readFile(summaryPath, 'utf-8');
    
    res.json({ 
      summary: summaryText,
      message: "Summary loaded successfully"
    });
    
    console.log("Summary loaded successfully");
  } catch (e) {
    console.error("Summary loading error:", e.message);
    res.status(500).json({ error: e.message });
  }
});

app.get("/api/readme", async (_req, res) => {
  try {
    const readmePath = path.join(__dirname, "..", "README.md");
    
    try {
      await fs.access(readmePath);
    } catch (accessError) {
      return res.status(404).json({ error: "README file not found at " + readmePath });
    }
    
    const readmeText = await fs.readFile(readmePath, 'utf-8');
    
    res.json({ 
      readme: readmeText,
      message: "README loaded successfully"
    });
    
    console.log("README loaded successfully");
  } catch (e) {
    console.error("README loading error:", e.message);
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const messages = req.body?.messages ?? [{ role: 'user', content: 'Say hello!' }];
    console.log('Messages received:', JSON.stringify(messages, null, 2));
    
    // Check if API key is present
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is missing');
      return res.status(500).json({ 
        error: 'Server configuration error', 
        message: 'OpenAI API key is not configured. Please set OPENAI_API_KEY in environment variables.' 
      });
    }
    
    const r = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages
    });
    res.json({ reply: r.choices[0].message.content });
  } catch (e) {
    console.error('OpenAI error details:', e.message);
    console.error('Error stack:', e.stack);
    
    // Handle specific error types
    if (e.status === 401) {
      res.status(401).json({ 
        error: 'Authentication failed', 
        message: 'Invalid OpenAI API key. Please check your API key configuration.',
        hint: 'Update your API key at https://platform.openai.com/account/api-keys'
      });
    } else if (e.status === 429) {
      res.status(429).json({ 
        error: 'Rate limit exceeded', 
        message: 'Too many requests. Please try again later.' 
      });
    } else {
      res.status(500).json({ 
        error: 'OpenAI request failed', 
        message: e.message || 'An unexpected error occurred' 
      });
    }
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));