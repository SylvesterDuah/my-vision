import React, { useState } from 'react';
import AnimatedTitle from './AnimatedTitle';

const Whitepaper = () => {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 'extend',
            title: 'Extend',
            description: 'A project focused on possibilities of AI systems designed to solve complex real-world problems.',
            image: '/img/extend.png',
        },
        {
            id: 'ai-alignment',
            title: 'AI Alignment',
            description: 'Research and development aimed at ensuring AI systems align with human values and goals.',
            image: '/img/ai-alignment.png',
        },
        {
            id: 'ai-agentic',
            title: 'AI Agentic',
            description: 'Exploring autonomous AI agents that can operate independently in dynamic environments.',
            image: '/img/ai-agentic.png',
        },
    ];

    const handleProjectClick = (projectId) => {
        setActiveProject(projectId === activeProject ? null : projectId);
    };

    return (
        <div className="min-h-screen w-screen bg-black px-10 py-20">
            <div className="text-center">
                <AnimatedTitle
                    title="My <b>Ongoing</b> Projects"
                    className="special-font !text-5xl !font-black !leading-[.9] text-blue-50"
                />
                <p className="mt-4 text-sm text-gray-400">
                    Click on a project to learn more about it.
                </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`relative cursor-pointer overflow-hidden rounded-lg border-2 ${
                            activeProject === project.id
                                ? 'border-blue-500 shadow-[0_0_20px_rgba(0,255,255,0.8),0_0_40px_rgba(0,255,255,0.8)]'
                                : 'border-gray-700'
                        } transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.8),0_0_40px_rgba(0,255,255,0.8)]`}
                        onClick={() => handleProjectClick(project.id)}
                        style={{
                            animation: activeProject === project.id ? 'cyberpunk-glow 1.5s infinite' : 'none',
                        }}
                    >
                        <div className="relative h-64 w-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover"
                            />
                            <div
                                className={`absolute inset-0 bg-black ${
                                    activeProject === project.id ? 'opacity-50' : 'opacity-0'
                                } transition-opacity duration-500`}
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-blue-50">{project.title}</h3>
                            <p
                                className={`mt-2 text-sm text-gray-400 ${
                                    activeProject === project.id ? 'block' : 'hidden'
                                }`}
                            >
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Inline styles for cyberpunk glow animation */}
            <style jsx>{`
                @keyframes cyberpunk-glow {
                    0% {
                        box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.5);
                    }
                    50% {
                        box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.8);
                    }
                    100% {
                        box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.5);
                    }
                }
            `}</style>
        </div>
    );
};

export default Whitepaper;