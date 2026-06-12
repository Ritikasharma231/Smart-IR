import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, DocumentTextIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const AssessmentGuide = () => {
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
              <DocumentTextIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment Guide</h1>
              <p className="text-gray-600">Understanding our insulin resistance assessments</p>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Basic Assessment</h2>
                <p className="text-gray-600 mb-4">
                  The Basic Assessment provides a quick overview of your insulin resistance risk using fundamental measurements:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Age and sex information</li>
                  <li>Body measurements (weight, height, waist circumference)</li>
                  <li>Calculated BMI</li>
                  <li>Estimated risk score and level</li>
                </ul>
                <div className="mt-4">
                  <Link
                    to="/signup"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Start Basic Assessment →
                  </Link>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Intermediate Assessment</h2>
                <p className="text-gray-600 mb-4">
                  The Intermediate Assessment adds blood markers for a more comprehensive analysis:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>All Basic Assessment measurements</li>
                  <li>Fasting blood glucose levels</li>
                  <li>Triglyceride levels</li>
                  <li>Enhanced risk calculation</li>
                </ul>
                <div className="mt-4">
                  <Link
                    to="/signup"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Start Intermediate Assessment →
                  </Link>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Advanced Assessment</h2>
                <p className="text-gray-600 mb-4">
                  The Advanced Assessment provides the most detailed analysis including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>All Intermediate Assessment data</li>
                  <li>HDL cholesterol levels</li>
                  <li>Blood pressure measurements</li>
                  <li>Exercise habits and lifestyle factors</li>
                  <li>Comprehensive AI-powered recommendations</li>
                </ul>
                <div className="mt-4">
                  <Link
                    to="/signup"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Start Advanced Assessment →
                  </Link>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-start">
                  <LightBulbIcon className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tips for Accurate Results</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Use recent measurements (within the last 3 months)</li>
                      <li>• Ensure blood tests are done after fasting</li>
                      <li>• Be honest about exercise habits</li>
                      <li>• Take measurements at the same time of day</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <div className="flex items-start">
                  <ChartBarIcon className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Understanding Your Results</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Low Risk: Good insulin sensitivity, maintain healthy habits</li>
                      <li>• Moderate Risk: Some lifestyle adjustments recommended</li>
                      <li>• High Risk: Consult healthcare provider for guidance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/signup"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started with Your Assessment
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AssessmentGuide;
