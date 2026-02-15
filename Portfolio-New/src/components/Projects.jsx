import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: 'RAG-Powered Document Chatbot',
            description: 'Production-ready RAG pipeline for intelligent document Q&A. End-to-end flow: ingestion → semantic chunking → embedding → vector search → reranking → LLM generation. FastAPI-based REST API for real-time inference.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
            tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'FAISS'],
            demo: null,
            github: 'https://github.com/danish123-a/Rag_System',
        },
        {
            title: 'Fashion-MNIST CNN Classification',
            description: 'Custom PyTorch CNN achieving 92.5% accuracy. Built training loop, data augmentation, and optimization from scratch. Demonstrates strong CNN architecture design and PyTorch workflows.',
            image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop',
            tags: ['Python', 'PyTorch', 'CNN'],
            demo: null,
            github: 'https://github.com/danish123-a/Fashion-Mnist_Classification_By-Using-CNN',
        },
        {
            title: 'Question-Answer Prediction (NLP)',
            description: 'RNN/Transformer-based Q&A system with preprocessing pipeline. Deployed with Gradio for interactive demos. End-to-end NLP pipeline from preprocessing to inference.',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
            tags: ['Python', 'RNN', 'Transformers', 'Gradio'],
            demo: null,
            github: 'https://github.com/danish123-a/Question-Answer_Prediction_With-_Gradio',
        },
        {
            title: 'Real-Time Face Emotion Detector',
            description: 'CNN-based real-time emotion detection. Pipeline: face detection → preprocessing → emotion classification. Gradio interface for live demos.',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=600&fit=crop',
            tags: ['Python', 'CNN', 'Gradio'],
            demo: null,
            github: 'https://github.com/danish123-a/Face_emotion_detector01',
        },
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        Featured <span className="text-primary">Projects</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass rounded-2xl overflow-hidden group hover:bg-white/10 transition-all"
                            >
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                        )}
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
