import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

const StartProjectPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectTypes: [] as string[],
    budget: '',
    timeline: ''
  });

  const [errors, setErrors] = useState({
    firstName: false,
    email: false,
    projectTypes: false,
    budget: false,
    timeline: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const projectTypes = [
    'Software Development',
    'Website Design',
    'AI Solutions',
    'Mobile Apps',
    'E-commerce',
    'Digital Transformation',
    'Cloud Solutions',
    'Data Analytics',
    'API Development',
    'Tech Consulting',
    'Other'
  ];
  const budgetRanges = ['< Ksh100k', 'Ksh100k - Ksh150k', 'Ksh150k - Ksh250k', 'Ksh250k >'];
  const timelineOptions = ['< 3 month', '6 month', '1 year >'];

  const handleProjectTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type]
    }));
  };

  // Helper function to get browser info
  const getBrowserInfo = () => {
    return {
      browserName: navigator.userAgent.includes('Chrome') ? 'Chrome' :
                   navigator.userAgent.includes('Firefox') ? 'Firefox' :
                   navigator.userAgent.includes('Safari') ? 'Safari' : 'Unknown',
      browserVersion: 'Unknown',
      osName: navigator.platform || 'Unknown',
      deviceType: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
      screen: {
        width: screen.width,
        height: screen.height
      },
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      referrer: document.referrer || 'Direct'
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage('');

    // Validate required fields
    const newErrors = {
      firstName: !formData.firstName.trim(),
      email: !formData.email.trim(),
      projectTypes: formData.projectTypes.length === 0,
      budget: !formData.budget,
      timeline: !formData.timeline
    };

    setErrors(newErrors);

    if (newErrors.firstName || newErrors.email || newErrors.projectTypes || newErrors.budget || newErrors.timeline) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare submission data for Netlify function
      const submissionData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        projectTypes: formData.projectTypes,
        budget: formData.budget,
        timeline: formData.timeline,
        browserInfo: getBrowserInfo(),
        source: 'Start Project Page'
      };

      // Submit to Netlify function
      const response = await fetch('/.netlify/functions/start-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage('Thank you for your inquiry! We will respond within 24 hours.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          projectTypes: [],
          budget: '',
          timeline: ''
        });
      } else {
        setSubmitMessage(result.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-left mb-16">
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Get In Touch</h1>
          <p className="text-lg text-[var(--text-secondary)]">Let's discuss your next project</p>
        </div>

        {/* Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Details Section */}
            <div>
              <h3 className="text-sm font-medium text-[var(--text-primary)] mb-6">Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div>
                  <input
                    type="text"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] input-bg text-[var(--text-primary)] placeholder-[var(--text-muted)] ${
                      errors.firstName ? 'border-red-500' : 'border-[var(--text-secondary)]'
                    }`}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="w-full px-4 py-3 border border-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] input-bg text-[var(--text-primary)] placeholder-[var(--text-muted)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] input-bg text-[var(--text-primary)] placeholder-[var(--text-muted)] ${
                      errors.email ? 'border-red-500' : 'border-[var(--text-secondary)]'
                    }`}
                  />
                </div>

                {/* Company */}
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-3 border border-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] input-bg text-[var(--text-primary)] placeholder-[var(--text-muted)]"
                  />
                </div>
              </div>
            </div>

            {/* Project Types */}
            <div>
              <h3 className={`text-sm font-medium mb-6 ${errors.projectTypes ? 'text-red-500' : 'text-[var(--text-primary)]'}`}>
                Project Types *
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleProjectTypeToggle(type)}
                    className={`px-4 py-3 border transition-colors text-left ${
                      formData.projectTypes.includes(type)
                        ? 'bg-[var(--brand-primary)] border-[var(--brand-primary)] text-white'
                        : errors.projectTypes
                        ? 'selector-bg border-red-500 text-[var(--text-primary)] selector-hover'
                        : 'selector-bg border-[var(--text-secondary)] text-[var(--text-primary)] selector-hover'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {errors.projectTypes && (
                <p className="text-red-500 text-sm mt-2">Please select at least one project type</p>
              )}
            </div>

            {/* Budget */}
            <div>
              <h3 className={`text-sm font-medium mb-6 ${errors.budget ? 'text-red-500' : 'text-[var(--text-primary)]'}`}>
                Budget *
              </h3>
              <div className="flex flex-wrap gap-3">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, budget: range }))}
                    className={`px-6 py-3 border transition-colors ${
                      formData.budget === range
                        ? 'bg-[var(--brand-primary)] border-[var(--brand-primary)] text-white'
                        : errors.budget
                        ? 'selector-bg border-red-500 text-[var(--text-primary)] selector-hover'
                        : 'selector-bg border-[var(--text-secondary)] text-[var(--text-primary)] selector-hover'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
              {errors.budget && (
                <p className="text-red-500 text-sm mt-2">Please select a budget range</p>
              )}
            </div>

            {/* Timeline */}
            <div>
              <h3 className={`text-sm font-medium mb-6 ${errors.timeline ? 'text-red-500' : 'text-[var(--text-primary)]'}`}>
                Timeline *
              </h3>
              <div className="flex flex-wrap gap-3">
                {timelineOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, timeline: option }))}
                    className={`px-6 py-3 border transition-colors ${
                      formData.timeline === option
                        ? 'bg-[var(--brand-primary)] border-[var(--brand-primary)] text-white'
                        : errors.timeline
                        ? 'selector-bg border-red-500 text-[var(--text-primary)] selector-hover'
                        : 'selector-bg border-[var(--text-secondary)] text-[var(--text-primary)] selector-hover'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.timeline && (
                <p className="text-red-500 text-sm mt-2">Please select a timeline</p>
              )}
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`p-4 rounded-lg mb-6 ${
                submitMessage.includes('Thank you')
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <div className="group flex items-center space-x-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative px-4 py-3 text-white btn-custom-text transition-all duration-300 overflow-hidden ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[var(--brand-primary)] group-hover:bg-[var(--brand-tertiary)]'
                  }`}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}
                  </span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative px-3 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[var(--brand-primary)] group-hover:bg-[var(--brand-tertiary)]'
                  }`}
                >
                  <ArrowRight className="w-4 h-4 text-white transition-colors relative z-10" />
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default StartProjectPage;
