'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

useEffect(() => {
  videoRefs.current.forEach((video) => {
    video?.play().catch(() => {});
  });
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-950 font-sans">
      <main className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-2xl">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            {/* Name */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
                David Byrke
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            </div>

            {/* Personal Photo */}
            <img
              src="/me.jpg"
              alt="David Byrke"
              className="w-48 h-48 rounded-full mx-auto object-cover border-2 border-zinc-300"
            />

            {/* Intro */}
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto leading-relaxed">
              CS student with hands-on experience in Java game development, embedded systems, and building real-world tools. Currently focused on networking and cloud infrastructure.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                View Projects
              </a>
              <button
                onClick={() => setShowContact(!showContact)}
                className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer"
              >
                Contact Me
              </button>
              <a
                href="/resume.pdf"
                className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                View Resume
              </a>
            </div>

            {/* Contact Info Modal */}
            {showContact && (
              <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50">
                <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl p-8 max-w-md w-full animate-in fade-in zoom-in duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-black dark:text-white">Get in Touch</h3>
                    <button
                      onClick={() => setShowContact(false)}
                      className="text-2xl text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Email */}
                    <a
                      href="mailto:davidpbyrke@gmail.com"
                      className="flex items-center gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors group"
                    >
                      <div className="text-xl">✉️</div>
                      <div className="text-left">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Email</p>
                        <p className="font-semibold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          davidpbyrke@gmail.com
                        </p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+16783274880"
                      className="flex items-center gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors group"
                    >
                      <div className="text-xl">📱</div>
                      <div className="text-left">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Phone</p>
                        <p className="font-semibold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">+1 (678) 327-4880</p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/david-byrke-b47220182"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors group"
                    >
                      <div className="text-xl">💼</div>
                      <div className="text-left">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">LinkedIn</p>
                        <p className="font-semibold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">LinkedIn Profile</p>
                      </div>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/byrkedavid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors group"
                    >
                      <div className="text-xl">🔗</div>
                      <div className="text-left">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">GitHub</p>
                        <p className="font-semibold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">GitHub Profile</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Skills Section */}
      <section className="bg-white dark:bg-zinc-900 px-6 py-16 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              'Java',
              'Python',
              'JavaScript',
              'React',
              'Linux',
              'Networking (CCNA in progress)',
              'AWS (Learning)',
              'Git',
              'Embedded Systems',
              'Arduino',
              'Raspberry Pi',
            ].map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-medium rounded-full border border-zinc-300 dark:border-zinc-700 transition-all duration-200 cursor-pointer hover:scale-110 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-white dark:bg-zinc-900 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400">
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">2D Java Game</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Followed a tutorial to create a 2D Java game implementing a custom game loop, collision detection, and entity-based interactions. Gained experience with real-time logic and structuring game systems.
              </p>

              <video
                ref={(el) => { videoRefs.current[0] = el; }}
                src="/game.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="rounded mb-4 w-full pointer-events-none"
              />

              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">Java</span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">Git</span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">Ai Entities</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400">
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Embedded Systems Projects</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Developed small hardware/software projects using Arduino and Raspberry Pi, integrating sensors and scripts to automate tasks and interact with the physical environment. Gained experience bridging software with real-world inputs and outputs.
              </p>

              <video
                ref={(el) => { videoRefs.current[1] = el; }}
                src="/arduino.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="rounded mb-4 w-full pointer-events-none"
              />

              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-medium rounded-full">Arduino (C++)</span>
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-medium rounded-full">Raspberry Pi (Linux)</span>
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-medium rounded-full">Python</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400">
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">SteelCo React Native App</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Prototyped a mobile app using React Native to explore improving internal workflows. Focused on UI structure, component-based design, and experimenting with cross-platform development.
              </p>
              <video
                ref={(el) => { videoRefs.current[2] = el; }}
                src="/react.mov"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="rounded mb-4 w-full pointer-events-none"
              />
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full">React Native</span>
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full">JavaScript</span>
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full">UI</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black dark:bg-zinc-950 text-white px-6 py-8 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-400">
          <p>&copy; {new Date().getFullYear()} David Byrke. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
