'use client';
import React from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { X } from 'lucide-react';
import { useAkili } from './context/AkiliContext';
import { motion, AnimatePresence } from 'framer-motion';
import SafariPackagesSection from "./components/package_cards";
import GreetingLine from './components/GreetingLine';
export default function Home() {
  const { isOpen, messages, input, open, close, setInput, setMessages } = useAkili();

  return (
    <main className="flex min-h-screen flex-col bg-gray-200 border-0">
      <Navbar openAkili={open} />
      <AnimatePresence >  
        {isOpen && (
          <div className="fixed bottom-6 right-6 z-50 border-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl border-0 w-80  flex flex-col overflow-hidden"
              style={{ maxHeight: '500px'}}
            >
              {/* Top Bar */}
              <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-0" style={{ backgroundColor: '#2B5D34' }}>
                <h2 className="text-white font-semibold text-lg border-0">Akili AI</h2>
                <button onClick={close} className="text-white hover:text-gray-200 border-0 " >
                  <X size={20} className="text-white" style={{ backgroundColor: '#2B5D34', color: 'white',  border: 'none',
     
    cursor: 'pointer' }}/>
                </button>
              </div>
  
              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto p-4 text-gray-800 space-y-2 border-0 max-h-[400px]" style={{ fontSize: '0.95rem' }}>
                {/* Default Greeting */}
                <div className="flex justify-start border-0 shadow-2xl">
                  <div className="  p-3 rounded-2xl rounded-tl-none max-w-[80%] text-white border-0" style={{ backgroundColor: '#cbc202' }}>
                    Hello! 👋 How can I assist you today?
                  </div>
                </div>
                
                {/* User Messages */}
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${idx % 2 === 0 ? 'justify-end' : 'justify-start'} border-0` }>
                    <div className={`p-3 rounded-2xl max-w-[80%]  shadow-2xl border-0
                      ${idx % 2 === 0 ? 'rounded-tr-none' : 'rounded-tl-none'}
                   `} style={{ backgroundColor: idx % 2 === 0 ? '#2B5D34' : '#cbc202' , color: idx % 2 === 0 ?'white' : '#2B5D34'}}>
                      {msg}
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Input Bar */}
              <div className="flex-shrink-0 p-3 border-t border-gray-200 bg-white/50 backdrop-blur-sm border-0">
                <div className="flex items-center space-x-2 border-0">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={async (e) => { 
                      if (e.key === 'Enter') {
                        const response = await fetch("/api/chat", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            messages: [
                              { 
                                role: "system", 
                                content: "You are Akili-AI, a helpful, friendly, and professional travel assistant for Great Lakes Safaris, based in Uganda, East Africa. Context: Location: Uganda (East Africa), occasionally Kenya, Rwanda, Tanzania. Business: Wildlife safaris, gorilla trekking, cultural tours, birdwatching, adventure safaris, luxury travel. Audience: International tourists (USA, Europe, Asia). Time/Season: Warm year-round; rainy seasons (March–May, September–November), dry seasons (December to February, June to August). Weather: Sunny and warm; safaris best in dry seasons. Currency: Use USD ($) for prices. Language: English mainly; Swahili and local languages too. Travel Info: Main airport Entebbe (EBB); visas needed. Safari Vehicles: 4x4 Land Cruisers with pop-up roofs. Wildlife: Lions, elephants, gorillas, chimps, giraffes, hippos, crocs, zebras, leopards. Main Parks: Bwindi, Murchison Falls, Queen Elizabeth, Kibale, Lake Mburo, Kidepo Valley. Special Experiences: Gorilla trekking, boat safaris, balloon safaris, cultural visits, hiking Mt. Elgon and Rwenzori Mountains. Health: Yellow Fever vaccination required; Malaria prophylaxis recommended. Tone: Friendly, knowledgeable, patient, adventurous. Style: Short for short questions; detailed for detailed ones; always human-like and positive. Behavior: Understand questions deeply, suggest Great Lakes Safaris services when relevant, offer travel tips, ask clarifying questions if needed. Keep answers concise for small popup display. Goal: Inspire excitement and trust in Great Lakes Safaris. Examples: 'Is it safe?' → Yes, Uganda is very safe for tourists. 'Weather in July?' → 'Dry season, perfect for safaris!'"
                              },
                              { role: "user", content: input },
                            ],
                          }),
                        });

                        const data = await response.json();
                        const reply = data.choices[0].message.content;
                        setMessages((prev: string[]) => [...prev, input, reply]);
                        setInput('');
                      }
                    }}
                    placeholder="Type a message..."
                    className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#cf5f1f] text-sm border-0"
                  />
                  <button
                    onClick={async () => {
                      try {
                        console.log('Sending request with input:', input);
                        const response = await fetch("/api/chat", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            messages: [
                              { role: "system", content: "You are a helpful assistant for Great Lakes Safaris customers." },
                              { role: "user", content: input },
                            ],
                          }),
                        });

                        console.log('Response status:', response.status);
                        const data = await response.json();
                        console.log('Full API Response:', JSON.stringify(data, null, 2));

                        if (!response.ok) {
                          throw new Error(`HTTP error! status: ${response.status}`);
                        }

                        // Check for Groq API response format
                        if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
                          console.error('Invalid response structure:', data);
                          throw new Error('Invalid response format from API');
                        }

                        const reply = data.choices[0].message?.content || "I'm sorry, I couldn't process your request.";
                        console.log('Extracted reply:', reply);
                        setMessages((prev: string[]) => [...prev, input, reply]);
                        setInput('');
                      } catch (error) {
                        console.error('Error in chat:', error);
                        setMessages((prev: string[]) => [...prev, input, "Sorry, I'm having trouble responding right now. Please try again later."]);
                        setInput('');
                      }
                    }}
                    className="px-4 py-2 rounded-md text-white font-semibold border-0"
                    style={{ backgroundColor: '#cf5f1f' }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="relative border-0"> 
      <Hero/>
      <SafariPackagesSection />
      <GreetingLine/>

        </div>
       
    </main>
  );
}
