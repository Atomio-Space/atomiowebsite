const blogPosts = [
  {
    id: 1,
    title: 'Tech Blog',
    description: 'Insights on emerging technologies and best practices in software development',
    image: '/images/placeholder-blog.jpg',
    link: '#'
  },
  {
    id: 2,
    title: 'Case Studies',
    description: 'Real-world examples of innovative solutions we\'ve delivered for our clients',
    image: '/images/placeholder-blog.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'Industry Reports',
    description: 'Data-driven analysis of trends shaping business and technology in Africa and beyond',
    image: '/images/placeholder-blog.jpg',
    link: '#'
  },
  {
    id: 4,
    title: 'Events',
    description: 'Upcoming webinars, workshops, and industry conferences where you can meet our team',
    image: '/images/placeholder-blog.jpg',
    link: '#'
  },
  {
    id: 5,
    title: 'Resource Library',
    description: 'Free guides, templates, and tools to help your business leverage technology',
    image: '/images/placeholder-blog.jpg',
    link: '#'
  },
  {
    id: 6,
    title: 'Newsletter',
    description: 'Monthly updates on tech innovations, company news, and industry insights',
    image: '/images/placeholder-blog.jpg',
    link: '#'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Insights & Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest thinking on technology, innovation, and business transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <p className="text-gray-500">Blog Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center">
                  {post.title}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </h3>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-outline">
            View All Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
