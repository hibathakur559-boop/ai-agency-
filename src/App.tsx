import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { 
  Bot, 
  Mic, 
  Sparkles, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  BrainCircuit, 
  X,
  Send
} from 'lucide-react';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I am Aria, NexAI’s AI agent. How can I help automate your business today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessages = [
      ...messages,
      { role: 'user', text: inputMessage },
      { role: 'assistant', text: 'Thanks for reaching out! Our team at Sysware can build custom AI chatbots and voice agents tailored to your workflow. Would you like to schedule a demo?' }
    ];

    setMessages(newMessages);
    setInputMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Analytics />

      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md fixed top-0 w-full z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-wide text-emerald-400">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            <span>NexAI</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-slate-400 font-medium">
            <a href="#services" className="hover:text-emerald-400 transition">Services</a>
            <a href="#about" className="hover:text-emerald-400 transition">About</a>
            <a href="#approach" className="hover:text-emerald-400 transition">Approach</a>
            <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition duration-200 shadow-lg shadow-emerald-500/20"
          >
            Book a Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          AI-Powered Automation Agency
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100 mb-8 max-w-4xl mx-auto leading-tight">
          Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Intelligent AI</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build custom AI agents, automate your workflows, and unlock insights from your data — so your team can focus on what matters most.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20"
          >
            Book a Demo <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto border border-slate-800 hover:bg-slate-900 text-slate-300 font-semibold px-8 py-4 rounded-xl transition duration-200"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-slate-500 text-xs uppercase font-semibold tracking-wider">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Secure & Private</span>
          <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-emerald-400" /> Fast Delivery</span>
          <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-emerald-400" /> 24/7 AI Support</span>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Core AI Solutions</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Tailored automation systems engineered to scale your agency operations effortlessly.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">AI Chatbots</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Smart customer support agents trained on your business knowledge base for 24/7 instant client retention.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">Voice Agents</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Conversational voice bots capable of qualifying leads, booking calendar appointments, and handling cold calls.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">Workflow Automations</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Custom integrations connecting CRM pipelines, GoHighLevel, email sequences, and internal databases.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 transition duration-200"
          >
            <Sparkles className="w-5 h-5" />
            Chat with Aria
          </button>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-80 sm:w-96 shadow-2xl overflow-hidden flex flex-col h-[450px]">
            <div className="p-4 bg-slate-800/80 border-b border-slate-700 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span className="font-semibold text-slate-100 text-sm">Aria — NexAI Assistant</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl ${msg.role === 'user' ? 'bg-emerald-500 text-slate-950 font-medium' : 'bg-slate-800 text-slate-200'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 flex gap-2">
              <input 
                type="text" 
                placeholder="Ask Aria anything..." 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
              />
              <button type="submit" className="bg-emerald-500 text-slate-950 p-2 rounded-lg hover:bg-emerald-400 transition">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>© 2026 NexAI Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}
