## AnaBot - Virtual Counselor for Foreign Students

AnaBot is a virtual counselor designed to help international students at Politehnica University of Bucharest adapt to academic and social life in Romania.
It leverages Google AI Studio and the Gemini API for natural language processing, with a TypeScript-based frontend and backend.

Abstract (EN): Ana Bot is a virtual counselor created to help foreign students of Politehnica University of Bucharest adapt to academic life in Romania as well as social living there. The chatbot was created using Google AI Studio, leveraging the Gemini API for AI-powered natural language processing. The frontend design was done using TypeScript with HTML and CSS, while the backend was implemented with TypeScript for efficient data handling. Ana Bot delivers solutions on university rules, local services, and social inclusion to help international students. It may be utilized to support lost documents (visa, ID cards) and student life.

Abstract (RO): Ana Bot este un consilier virtual creat pentru a ajuta studenții străini ai Universității Politehnica din București să se adapteze la viața academică și socială din România. Chatbotul a fost dezvoltat folosind Google AI Studio, integrând Gemini API pentru procesarea bazată pe inteligența artificială a limbajului natural. Frontend-ul a fost realizat utilizând TypeScript, HTML și CSS, iar backend-ul a fost implementat în TypeScript pentru gestionarea eficientă a datelor. Ana Bot oferă soluții privind regulile universitare, serviciile locale și integrarea socială pentru studenții internaționali. Poate fi utilizat pentru asistență în caz de pierdere a documentelor (viză, acte de identitate). 

# 1. Introduction
Ana Bot is a virtual adviser developed to facilitate the integration of foreign students at Politehnica University of Bucharest into both academic and social life in Romania. The application leverages state-of-the-art AI capabilities using the Gemini API and Google AI Studio to provide AI-driven natural language processing. The frontend architecture is implemented using TypeScript, HTML, and CSS, with the backend also developed using TypeScript for efficient data processing 	and communication.
Ana Bot's primary purpose is to offer general support to international students, addressing common problems related to university procedures, campus navigation, and social integration. With the growing number of international students who attend Romanian universities, many find it challenging to adjust to the new academic and sociocultural environment due to language issues, bureaucratic administrative processes, and unfamiliar cultural norms. Ana Bot is designed specifically to break through these challenges by providing real-time assistance and easy access to critical information for foreign students at Politehnica University.

# 2. Project Structure
●	Frontend: Ana Bot's frontend is developed using TypeScript, HTML, and CSS. The interface has the highest concern for user accessibility, with a minimalistic and intuitive design for easy navigation and access to the chatbot functionality. The frontend components are well-organized to share consistent visual presentation and user interaction.
●	Backend: The backend was written entirely in TypeScript, with an emphasis on efficient data processing and robust communication between the AI modules and the user interface. This setup enables the system to process user interactions effectively, request data, and integrate seamlessly with AI functionality.
●	AI and Natural Language Processing (NLP): Google AI Studio was utilized as the primary development environment for adding AI-driven natural language processing capabilities using the Gemini API. The platform provided a good foundation to train the API to comprehend user queries and provide contextually accurate responses. By extensively training the Gemini API, Ana Bot could respond to different questions about Romania and Politehnica University of Bucharest (PUB) successfully. Personalized answers were meticulously 	crafted in such a way that Ana Bot can appropriately answer a huge number of student inquiries, making it a more credible virtual counselor.

# 3. Implementation Details
●	Frontend Design: The frontend of Ana Bot is designed using HTML, CSS, and TypeScript to deliver a responsive and user-friendly interface. The structure of the frontend includes the following key components:
o	HTML Structure:
▪	The main HTML file (index.html) provides a structured layout with sections for the chat interface, message input, and a dynamic display area for event recommendations and other content.
▪	The layout is minimalistic, with a focus on accessibility, ensuring easy navigation for users, particularly international students who may not be familiar with Romanian academic systems.
o	CSS Styling:
▪	The CSS is embedded directly within the HTML file, enabling streamlined styling without the need for external stylesheets. Key visual elements, such as buttons, input fields, and interactive icons, are styled using CSS classes defined within the <style> tag in the HTML document.
▪	Visual assets such as anabot_logo.png, icon.png, and sendicon.png are strategically placed to enhance visual appeal and brand identity.
o	TypeScript Integration:
▪	TypeScript is used to handle dynamic data rendering, manage the flow of user interactions, and implement error handling mechanisms.
▪	The frontend logic in script.ts includes event listeners to capture user inputs, validate commands, and send API requests to the backend for processing.
▪	TypeScript's strong typing system ensures data consistency and reduces potential runtime errors, facilitating better debugging and maintenance.
●	Backend Implementation: The backend of Ana Bot is constructed using TypeScript to leverage its scalability and robust data typing. The architecture includes the following components:

o	 Server Setup:
▪	The backend is structured around an Express server (backend.ts), which serves as the primary interface for client-server communication.
▪	The server is configured to handle API requests, including user queries and event-related data retrieval.
o	Data Processing:
▪	Data is processed asynchronously using TypeScript's built-in async/await capabilities, ensuring that responses are delivered promptly without blocking the main execution thread.
▪	Middleware such as body-parser and cors are integrated to handle JSON data parsing and manage cross-origin requests.
o	Error Handling:
▪	Comprehensive error handling mechanisms are implemented to catch and respond to unexpected errors, preventing server crashes and maintaining a consistent user experience.
o	 Deployment Configuration:
▪	The package.json file specifies the project dependencies, including libraries for AI integration (@google/genai, @google/generative-ai), server setup (express), and data parsing (body-parser).
▪	The TypeScript configuration (tsconfig.json) is structured to compile TypeScript into JavaScript (dist/backend.js) with ES2020 as the target module, ensuring compatibility with modern browsers.
●	AI Integration: Ana Bot's AI capabilities are powered by Google AI Studio, utilizing the Gemini API for advanced natural language processing. Key aspects of the AI integration include:
o	Natural Language Processing (NLP):
▪	For instance, if a user frequently inquires about student clubs, the AI will prioritize club-related event suggestions.
▪	The model leverages context analysis and intent recognition to provide contextually relevant responses to user queries, ranging from campus navigation to event recommendations.

o	AI-Driven Personalization:
	The AI component is designed to adapt its responses based on user interactions, offering more personalized recommendations over time.
	For instance, if a user frequently inquires about student clubs, the AI will prioritize club-related event suggestions.

o	Error Handling and Fallbacks:
	AI interactions are structured to handle ambiguous or unclear inputs by prompting the user for clarification, ensuring more accurate responses.

# 4. Key Features
●	University Protocol Assistance: Ana Bot provides detailed guidance on navigating university protocols, including enrollment procedures, course registration, and academic scheduling. It offers step-by-step instructions on how to complete administrative tasks such as applying for student ID cards, accessing online portals, and submitting required documentation. Additionally, it includes a directory of essential contacts within the university administration, allowing students to quickly connect with relevant departments for further assistance.
●	Local Services Information: Ana Bot compiles comprehensive information about essential services in Bucharest, such as healthcare facilities, public transportation, and accommodation options. It provides contact details for nearby hospitals and clinics, instructions on how to acquire transportation passes, and guidance on finding suitable housing within proximity to the university. Additionally, Ana Bot includes practical tips for adjusting to Romanian cultural norms and customs to help students feel more at ease in their new environment.
●	Social Integration Support: Ana Bot actively promotes social integration by providing general pieces of information about cultural activities or other activities which are student-oriented. 
●	Lost Document Support: In cases where students lose important documents such as visas, ID cards, or university permits, Ana Bot offers clear, actionable guidance on the necessary steps to resolve such issues. It provides contact information for relevant offices, templates for reporting lost items, and instructions on how to replace essential documents promptly. The feature is particularly beneficial for international students unfamiliar with Romanian administrative processes.
●	Campus Navigation Assistance: Ana Bot includes a specialized campus navigation module focused on the New Local Campus, where most academic faculties and lecture halls are situated. The module offers interactive maps, building descriptions, and direction indicators, allowing students to efficiently locate classrooms, administrative offices, and student service centers. This feature is especially useful for newcomers unfamiliar with the campus layout, helping them navigate effectively and reducing potential stress or confusion.
●	Campus Navigation: Ana Bot can assist international students on how to navigate to other Politehnica campuses such as Polizu or Leu. In the future, Ana Bot will be able to guide international students between the Polizu and Leu campuses to serve all foreign students regardless of faculty.

# 5.  Future updates
	In order to serve better the international students coming at Politehnica University of Bucharest, Ana Bot will be updated with the following features.

1)	Multilingual support
Ana Bot will expand its functionality by integrating support  for the French language. This functionality will help the Erasmus students and the other international students from French-speaking countries by creating a friendly and relaxed environment for them. 

2)	Dynamic Event Calendar with Personalized Recommendation
Another plan for the future is to implement a calendar which has the role to diplay all the upcoming activities and events happening at Politehnica University of Bucharest. This calendar will also provide personalized recommendations  on how students can get involve in those activities. Aditionally, we will add in this calendar some volunteering oportunities, especially the ones related to Politehnica University.

3)	Extracurricular Activity Integration
Ana Bot will be able, in the future to help students to discover and to engage extracurricular oportunities such as student clubs or contests. For example, Ana Bot can give support on how a foreign student can join a student club or contest by providing essential pieces of information about them. This feature will help more the international students to integrate into the univeristy community and enrich their overall campus experience.

# 6. Testing and Validation
The initial testing phase was conducted by the development team, drawing on the experiences and insights shared by their international colleagues. Throughout the academic year, the developers closely observed the challenges and difficulties faced by the foreign students as they navigated the university environment. By identifying common issues, such as language barriers, unfamiliar campus layouts, and access to essential information, the team was able to gain a comprehensive understanding of the specific pain points affecting international students. With these observations in mind, they proposed targeted solutions aimed at addressing these challenges, ensuring that the application is well-suited to meet the unique needs of foreign students.


# 7. Launching the Chatbot
In order to run the chatbot, the user has to make sure that all the dependencies are installed (the node modules package). If the node modules folder is missing, the user must install the required packages by running in the project root directory the command: npm install. After setting up the project, the user will write the following commands in two separate terminals:

1)	The first terminal responsible for starting the backend server:
npx -ts backend.ts
2)	The second terminal resposible for running the chatbot script
node script.ts
	These two commands will start the backend and the chatbot logic and will allow the application to function properly.

# 8. Conclusions
Ana Bot serves as a comprehensive virtual counseling system for international students at Politehnica University of Bucharest. Its implementation using Google AI Studio and TypeScript ensures both robust AI capabilities and efficient data handling, making it a valuable tool for international student support. With continued development, Ana Bot has the potential to expand its features to include multilingual support, enhanced data analytics, and personalized student guidance, further solidifying its role as a vital resource for student integration.


