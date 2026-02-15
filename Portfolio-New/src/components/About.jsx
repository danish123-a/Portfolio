import { motion } from 'framer-motion';
import { Cpu, Database, Sparkles, Layers } from 'lucide-react';

export default function About() {
    const techStack = [
        { icon: Sparkles, name: 'LLMs & RAG', color: 'text-blue-400' },
        { icon: Cpu, name: 'Deep Learning', color: 'text-green-400' },
        { icon: Layers, name: 'NLP', color: 'text-pink-400' },
        { icon: Database, name: 'Vector DBs', color: 'text-yellow-400' },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="glass p-8 rounded-2xl mb-12">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            AI & Machine Learning Engineer with hands-on expertise in Large Language Models, RAG systems, NLP, and Deep Learning. I build intelligent applications end-to-end — document chatbots, vector search systems, and real-time LLM APIs — using PyTorch, TensorFlow, and HuggingFace.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I specialize in production-grade AI pipelines: retrieval-augmented generation, agentic workflows, fine-tuning (LoRA/QLoRA), and deployment with FastAPI, Docker, and Kubernetes. I focus on turning research into reliable, scalable systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all cursor-pointer group"
                            >
                                <tech.icon className={`w-12 h-12 mx-auto mb-3 ${tech.color} group-hover:scale-110 transition-transform`} />
                                <p className="font-semibold text-gray-200">{tech.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
