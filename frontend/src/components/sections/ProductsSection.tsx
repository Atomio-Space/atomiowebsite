import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '../../data/mockData';

interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  short_description: string;
  key_features: Array<{
    title: string;
    description: string;
  }>;
  image_url: string;
}

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getFeaturedProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="container-md">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-[var(--text-primary)] mb-4"
          >
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            Innovative solutions built with cutting-edge technology
          </motion.p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin h-12 w-12 border-4 border-[var(--brand-secondary)] border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12`}
              >
                <div className="flex-1 lg:self-center">
                  <div className={`relative rounded-3xl overflow-hidden shadow-lg ${
                    index % 2 === 0 ? 'lg:ml-0 lg:mr-auto' : 'lg:ml-auto lg:mr-0'
                  }`}>
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover aspect-video"
                    />
                  </div>
                </div>

                <div className="flex-1 lg:self-center">
                  <div className="space-y-6">
                    <h3 className="heading-md text-[var(--text-primary)]">{product.name}</h3>
                    <p className="body-lg font-medium text-[var(--brand-secondary)]">{product.tagline}</p>
                    <p className="body-md text-[var(--text-secondary)]">{product.short_description}</p>

                    <div className="space-y-4 mt-6">
                      {product.key_features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex">
                          <div className="mr-3 mt-1">
                            <div className="h-5 w-5 rounded-full bg-[var(--brand-secondary)] bg-opacity-20 flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-[var(--brand-secondary)]"></div>
                            </div>
                          </div>
                          <div>
                            <h4 className="body-md font-semibold text-[var(--text-primary)]">{feature.title}</h4>
                            <p className="body-sm text-[var(--text-secondary)]">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button
                        onClick={() => {
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            const headerHeight = 80;
                            const targetPosition = contactSection.offsetTop - headerHeight;
                            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                          }
                        }}
                        className="btn-primary inline-flex items-center"
                      >
                        Get In Touch
                        <ArrowRight className="ml-2" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
