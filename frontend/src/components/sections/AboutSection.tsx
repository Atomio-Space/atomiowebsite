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
                        We partner with businesses to transform how they connect, create, and accomplish their most important work
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
                                From custom applications to AI automation, we create technology solutions that streamline operations and eliminate complexity for modern businesses.
                            </p>
                            <p
                                className="text-[16px] font-normal text-[var(--text-secondary)] text-left"
                                style={{ fontWeight: 400, lineHeight: '22px' }}
                            >
                                Our expertise transforms manual processes into efficient digital workflows, helping teams focus on what matters most while technology handles the rest.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;