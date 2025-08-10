import { motion } from 'framer-motion';

const AboutSection = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
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
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* About Us Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 sm:mb-8"
                    >
                        <span className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                            About Us
                        </span>
                    </motion.div>

                    {/* Main Statement - Responsive */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[62px] font-normal text-[var(--text-primary)] text-left mb-8 sm:mb-12 md:mb-16 max-w-full"
                        style={{ fontWeight: 400 }}
                    >
                        Atomio partners with businesses to build technology that drives growth, efficiency, and competitive advantage
                    </motion.h2>

                    {/* Supporting Content - Responsive Layout */}
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
                    >
                        {/* Left Column - Empty spacer on desktop only */}
                        <div className="hidden lg:block"></div>

                        {/* Right Column - Content with responsive paragraphs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            <p
                                className="text-sm sm:text-base font-normal text-[var(--text-secondary)] text-left leading-relaxed"
                                style={{ fontWeight: 400 }}
                            >
                                Every business faces unique challenges that require tailored solutions. We specialize in creating custom software, intelligent websites, and AI-powered systems that solve real problems and deliver measurable results for our clients.
                            </p>
                            <p
                                className="text-sm sm:text-base font-normal text-[var(--text-secondary)] text-left leading-relaxed"
                                style={{ fontWeight: 400 }}
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