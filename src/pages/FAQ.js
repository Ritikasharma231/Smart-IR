import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const faqs = [
    {
      question: "What is insulin resistance?",
      answer: "Insulin resistance is a condition where your cells don't respond properly to insulin, making it harder for your body to use glucose for energy. This can lead to higher blood sugar levels and potentially type 2 diabetes."
    },
    {
      question: "How accurate are the assessments?",
      answer: "Our assessments use AI-powered analysis based on established medical research and clinical data. While they provide valuable insights, they should be used for informational purposes only and not as a substitute for professional medical diagnosis."
    },
    {
      question: "Which assessment should I take?",
      answer: "Start with the Basic Assessment if you're new. If you have recent blood test results, try the Intermediate Assessment. For the most comprehensive analysis including lifestyle factors, choose the Advanced Assessment."
    },
    {
      question: "How often should I take assessments?",
      answer: "We recommend taking assessments every 3-6 months to track changes in your insulin sensitivity. More frequent assessments may be beneficial if you're making significant lifestyle changes."
    },
    {
      question: "What do the risk levels mean?",
      answer: "Low Risk indicates good insulin sensitivity. Moderate Risk suggests some lifestyle adjustments may be beneficial. High Risk indicates you should consult with a healthcare provider for personalized guidance."
    },
    {
      question: "Is my health data secure?",
      answer: "Yes, we take data security seriously. Your health information is encrypted and stored securely. We never share your personal health data with third parties without your explicit consent."
    },
    {
      question: "Can I use this instead of seeing a doctor?",
      answer: "No, our assessments are designed to complement, not replace, professional medical advice. Always consult with qualified healthcare providers for medical diagnosis and treatment decisions."
    },
    {
      question: "How do I improve my insulin sensitivity?",
      answer: "Common strategies include regular physical activity, maintaining a healthy weight, eating a balanced diet rich in fiber, getting adequate sleep, and managing stress. Your assessment results provide personalized recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <QuestionMarkCircleIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
              <p className="text-gray-600">Common questions about our insulin resistance assessments</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">
                If you don't find the answer you're looking for, please reach out to our support team.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/signup"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Your Assessment
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
