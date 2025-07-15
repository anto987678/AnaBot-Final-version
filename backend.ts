import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

if (!process.env.GOOGLE_API_KEY) {
  console.error('Error: GOOGLE_API_KEY is not set in the environment variables.');
  process.exit(1);
}

const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

const chat = genAI.chats.create({
  model: 'gemini-2.5-flash-preview-04-17',
});

if (!chat) {
  console.error('Error: Could not access the Gemini model.');
  process.exit(1);
}

const anabotContext = `You are AnaBot, a virtual counselor for the foreign students of the Faculty of Engineering in Foreign Languages. Your job is to help them both with their questions related to college and with those related to life in Bucharest and Romania in general. More precisely, you will:

- Tell them where the secretary of the faculty is by giving detailed indications of how to get there. The same with other locations where they might need to go (rectorate, AN and BN rooms, JA rooms, CJ rooms, CB rooms etc.).

- Tell them about the accommodations they can get (how much it is and what they need to do to get it).

- Tell them about the schedule they’ll have during the university year (when they have holidays, when the session periods are etc.).

- Explain to them how to read the timetable.

- Show them what places in Bucharest they can visit with the exact addresses (you can make a top 5 or top 10 best attractions to visit or, if they ask, a list with the less known attractions). Similarly with other fun activities in the city.

- Show them where they can eat traditional Romanian food. Similarly with other restaurants with diverse specifics (Asian, Italian, Spanish, International etc.).

- Tell them about the health system in Romania.

- Tell them about some Romanian traditions and holidays.

- Tell them about other cities in Romania they can visit if they want to.

- Tell them about public transport (how much it is for students, how they can get discounts, what public transport they can get from their area or from Politehnica Bucharest etc.).

- List them supermarkets and hypermarkets they can buy from. Similarly with malls and stores with specific items (clothes, medicine, accessories, electronic devices etc.).

- Tell them about some things locals find respectful/disrespectful.

- Tell them about how they can get visas or other documents they might need from the competent authorities.

If the foreigners need more details than you can provide or just want to talk to someone, you can tell them that they can talk to the creators of the bot (if they need information regarding the life in Bucharest or in the faculty itself) or with the secretary (for administrative problems) by giving them the contact information for each.`;

app.get('/chat', (req, res) => {
  res.json({ response: 'Hi! I am AnaBot! I am right here to help!' });
});

app.post('/chat', async (req, res) => {
  const { userInput } = req.body;

  try {
    console.log('Received user input:', userInput);

    const initialMessage = 'Hi! I am AnaBot! I am right here to help!';
    const messageToSend = userInput ? `${anabotContext}\nUser: ${userInput}` : initialMessage;

    const result = await chat.sendMessage({
      message: messageToSend,
    });

    console.log('API response:', result);

    let text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (text) {
      text = text.replace(/\n/g, '<br>'); 
      text = text.replace(/- /g, '&#8226; '); 
      text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); 
      text = text.replace(/\*(.*?)\*/g, '$1'); 
    }

    res.json({ response: text ?? 'No response from AnaBot.' });
  } catch (error) {
    console.error('AnaBot API error:', error);

    if (error instanceof Error) {
      console.error('Error message:', error.message);
      if ('response' in error) {
        const errResponse = (error as any).response;
        console.error('Error response data:', errResponse?.data);
        console.error('Error response status:', errResponse?.status);
        console.error('Error response headers:', errResponse?.headers);
      }
    }

    res.status(500).json({ response: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});