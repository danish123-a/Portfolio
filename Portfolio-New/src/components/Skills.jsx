import { motion } from 'framer-motion';

export default function Skills() {
    const skillCategories = [
        {
            title: 'LLMs & RAG',
            skills: [
                { name: 'Transformers / Fine-tuning (LoRA)', level: 90 },
                { name: 'LangChain / LangGraph', level: 88 },
                { name: 'RAG Pipelines / Hybrid Search', level: 90 },
                { name: 'AI Agents (ReAct, Tool-calling)', level: 85 },
            ],
        },
        {
            title: 'ML & Deep Learning',
            skills: [
                { name: 'PyTorch / TensorFlow', level: 90 },
                { name: 'CNN, RNN, LSTM, Transformers', level: 88 },
                { name: 'NLP (NER, Embeddings)', level: 85 },
                { name: 'XGBoost / SVM / PCA', level: 85 },
            ],
        },
        {
            title: 'Infrastructure & Tools',
            skills: [
                { name: 'Python / FastAPI', level: 92 },
                { name: 'Vector DBs (Chroma, FAISS)', level: 85 },
                { name: 'Docker / Kubernetes / Git', level: 85 },
                { name: 'HuggingFace', level: 88 },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        My <span className="text-primary">Skills</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: catIndex * 0.2 }}
                                className="glass p-6 rounded-2xl"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill, index) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                                <span className="text-gray-400 text-sm">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: catIndex * 0.2 + index * 0.1 }}
                                                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
