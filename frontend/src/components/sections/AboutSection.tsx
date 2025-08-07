import { motion } from 'framer-motion';

const AboutSection = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2 }
        }
    };

    return (
        <section id="about" className="section-padding bg-[var(--bg-primary)]">
            <div className="container-md">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    {/* About Us Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                            About Us
                        </span>
                    </motion.div>

                    {/* Main Statement - Full Width, Left Aligned */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[56px] leading-[62px] font-normal text-[var(--text-primary)] text-left mb-16 max-w-full"
                        style={{ fontWeight: 400 }}
                    >
                        Atomio partners with businesses to build technology that drives growth, efficiency, and competitive advantage
                    </motion.h2>

                    {/* Supporting Content - Right Half Only */}
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-8"
                    >
                        {/* Left Column - Empty spacer */}
                        <div></div>

                        {/* Right Column - Content with 2 paragraphs side by side */}
                        <div className="grid grid-cols-2 gap-8">
                            <p
                                className="text-[16px] font-normal text-[var(--text-secondary)] text-left"
                                style={{ fontWeight: 400, lineHeight: '22px' }}
                            >
                                Every business faces unique challenges that require tailored solutions. We specialize in creating custom software, intelligent websites, and AI-powered systems that solve real problems and deliver measurable results for our clients.
                            </p>
                            <p
                                className="text-[16px] font-normal text-[var(--text-secondary)] text-left"
                                style={{ fontWeight: 400, lineHeight: '22px' }}
                            >
                                Our approach combines deep technical expertise with business acumen to ensure every solution we build directly contributes to your bottom line, operational efficiency, and long-term strategic goals.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;