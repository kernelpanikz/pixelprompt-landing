import React, { useState, useEffect } from "react";
import {
  Bot,
  Code2,
  Sparkles,
  Zap,
  ChevronDown,
  Twitter,
  Github,
  Rocket,
  Palette,
} from "lucide-react";

function App() {
  const [description, setDescription] = useState("");
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

  const rollingInfos = [
    "Portfolio showcasing graphic design work",
    "Shop for eco-friendly items",
    "Personal blog with minimalist design",
    "Business landing page with contact form",
    "Restaurant menu with online ordering",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInfoIndex((prev) => (prev + 1) % rollingInfos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  function handleSubmit(variable: any) {
    // Encode the variable to make it safe for use in a URL
    let encodedVariable = encodeURIComponent(variable);

    // Replace %20 with + to match your specific URL format needs
    encodedVariable = encodedVariable.replace(/%20/g, "+");

    // Construct the URL with the modified query parameter
    const url = `https://promptpixel.xyz/?q=${encodedVariable}`;

    // Redirect the user to the constructed URL
    window.location.href = url;
  }

  const features = [
    {
      icon: <Zap className="w-16 h-8" />,
      title: "Lightning Fast",
      description:
        "Get your website up and running in minutes, not days. Quick iterations and instant previews.",
      imgname: "ft1.png",
    },

    {
      icon: <Palette className="w-8 h-8" />,
      title: "AI-Powered Design",
      description:
        "Our AI analyzes your requirements and generates custom website designs tailored to your needs.",
      imgname: "ft2.png",
    },

    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deploy Instantly ",
      description: "Deploy instantly and share it, hassle free..",
      imgname: "ft3.png",
    },
  ];

  const faqs = [
    {
      question: "How does the AI website builder work?",
      answer:
        "Simply describe your website needs, and our AI will generate a custom design and code based on your requirements.",
    },
    {
      question: "Can I customize the generated website?",
      answer:
        "Yes, you have full control to modify and customize every aspect of your generated website.",
    },
    {
      question: "What kind of websites can I build?",
      answer:
        "From personal portfolios to business websites and e-commerce stores, our AI can handle various types of websites.",
    },
    {
      question: "How much does the beta version cost?",
      answer:
        "The beta version is free of charge! build as much as you want at no cost.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/mainlogo.png" alt="Main Logo" className="w-12" />
          <div className="hidden md:block font-bold text-xl">Pixel Prompt</div>
        </div>

        <div className="block md:hidden font-bold mx-auto text-xl">
          Pixel Prompt
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://x.com/PromptPixelSOL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-emerald-400 transition-colors"
          >
                   <img src="https://freepnglogo.com/images/all_img/1691832708new-twitter-x-logo-white.png" alt="Main Logo" className="w-5" />

          </a>
        
        </div>
      </header>

      {/* Hero Section */}
      <section className="  mx-auto px-4 py-36 text-center containerradial">
        <h3 className="text-2xl md:text-2xl font-semibold  ">
          AI Website Builder
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build your website
          <br />
          today with AI.
        </h1>
        <div className="max-w-2xl mt-16 mx-auto">
          <textarea
            className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:border-emerald-400 focus:ring-0 resize-none"
            rows={4}
            placeholder="Provide your website name and describe it in a few words..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="mt-3 w-full bg-white text-black px-8 py-2 rounded-lg font-semibold hover:bg-black-300 transition-colors"
            onClick={() => handleSubmit(description)}
          >
            Submit
          </button>{" "}
          <div className="mb-6 mt-6 h-16 relative    mx-36 overflow-hidden">
            <div className="absolute w-full animate-slide transform whitespace-nowrap">
              <div className="text-white text-sm font-semibold bg-gray-700 rounded-2xl px-4 py-1 inline-block">
                {rollingInfos[currentInfoIndex]}
              </div>
            </div>
          </div>
           
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-zinc-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Features
          </h2>
          <h2 className="text-lg w-2/4 mx-auto font-medium text-center mb-6 text-gray-600">
            Wether you want to build a quick application just for testing or
            simply trying to get inspired in order to get your project done, You
            can do all of that and more quickly, and without having to write a
            line of code.
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-950 rounded-2xl overflow-hidden transform transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-95 hover:shadow-lg hover:shadow-black/10"
              >
                <div className="flex items-center p-6 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white transition-colors duration-300 ease-in-out group-hover:text-emerald-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src={`/${feature.imgname}`}
                    alt="Feature Image"
                    className="relative rounded-lg  transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white/10 rounded-lg">
                <summary className="flex items-center justify-between p-4 cursor-pointer">
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="px-4 pb-4 text-white/60">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/5 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex    gap-2 mb-2">
                <img src="/mainlogo.png" alt="Main Logo" className="w-12" />
                <span className="font-bold my-auto mx-2 text-xl">
                  Pixel Prompt
                </span>
              </div>
              <p className="text-white/60 text-sm">
                We simplify website building & hosting through
                <br />
                automation - that's what we do.
              </p>
            </div>
            <div className="flex gap-4">
            <a
            href="https://x.com/PromptPixelSOL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-emerald-400 transition-colors"
          >
                   <img src="https://freepnglogo.com/images/all_img/1691832708new-twitter-x-logo-white.png" alt="Main Logo" className="w-5" />

          </a>
         
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
