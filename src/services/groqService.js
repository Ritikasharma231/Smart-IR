// Groq AI Service for AI-powered health explanations
const GROQ_API_KEY = process.env.GROQ_API_KEY;

class GroqService {
  constructor() {
    this.apiURL = 'https://api.groq.com/openai/v1/chat/completions';
    this.model = 'llama3-70b-8192'; // Using Llama 3 70B model
  }

  async generateHealthExplanation(assessmentData) {
    try {
      const prompt = this.buildAssessmentPrompt(assessmentData);
      
      const response = await fetch(this.apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            {
              role: 'system',
              content: `You are a knowledgeable and empathetic health assistant specializing in insulin resistance and metabolic health. 
              Provide clear, accurate, and actionable health insights. Always include a disclaimer that this is not medical advice and users should consult healthcare professionals.
              Keep responses concise but comprehensive, using bullet points where appropriate.`
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 1000,
        })
      });

      if (!response.ok) {
        throw new Error(`Groq API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Groq API Error:', error);
      throw error;
    }
  }

  async getChatbotResponse(message, userContext) {
    try {
      const prompt = this.buildChatPrompt(message, userContext);
      
      const response = await fetch(this.apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            {
              role: 'system',
              content: `You are a helpful AI health assistant specializing in insulin resistance and metabolic health. 
              Provide accurate, evidence-based information in a friendly and accessible manner.
              Always include a disclaimer that you are not a doctor and users should consult healthcare professionals for medical advice.
              Keep responses concise and use formatting (bullet points, bold text) to make information easy to read.`
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 800,
        })
      });

      if (!response.ok) {
        throw new Error(`Groq API error: ${response.status}`);
      }

      const data = await response.json();
      return {
        response: data.choices[0].message.content,
        suggestions: this.generateSuggestions(message)
      };
    } catch (error) {
      console.error('Groq Chatbot Error:', error);
      throw error;
    }
  }

  buildAssessmentPrompt(assessmentData) {
    return `Please provide a personalized health explanation for the following insulin resistance assessment results:

Assessment Type: ${assessmentData.type}
Risk Level: ${assessmentData.riskLevel}
Risk Score: ${assessmentData.riskScore}%
Prediction: ${assessmentData.label}

Personal Details:
- Age: ${assessmentData.age}
- Sex: ${assessmentData.sex}
- BMI: ${assessmentData.bmi}
- Waist Circumference: ${assessmentData.waistCircumference} cm

Additional Health Metrics:
${assessmentData.fastingGlucose ? `- Fasting Glucose: ${assessmentData.fastingGlucose} mg/dL` : ''}
${assessmentData.triglycerides ? `- Triglycerides: ${assessmentData.triglycerides} mg/dL` : ''}
${assessmentData.hdl ? `- HDL Cholesterol: ${assessmentData.hdl} mg/dL` : ''}
${assessmentData.exerciseFrequency ? `- Exercise Frequency: ${assessmentData.exerciseFrequency} days/week` : ''}

Top Risk Factors:
${assessmentData.topRiskFactors ? assessmentData.topRiskFactors.join('\n') : 'Not available'}

Please provide:
1. A clear explanation of what these results mean
2. The key factors contributing to their risk level
3. Specific, actionable recommendations to improve their insulin sensitivity
4. Positive aspects of their health profile to build upon
5. When they should consider consulting a healthcare provider

Keep the tone encouraging and empowering while being medically accurate.`;
  }

  buildChatPrompt(message, userContext) {
    let contextInfo = '';
    
    if (userContext && userContext.recentAssessment) {
      contextInfo = `
User's Recent Assessment:
- Risk Level: ${userContext.recentAssessment.riskLevel}
- Risk Score: ${userContext.recentAssessment.riskScore}%
- Assessment Date: ${new Date(userContext.recentAssessment.date).toLocaleDateString()}
`;
    }

    return `${contextInfo}

User's Question: ${message}

Please provide a helpful, informative response about insulin resistance, metabolic health, or related topics as appropriate to their question.`;
  }

  generateSuggestions(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('risk') || lowerMessage.includes('assessment')) {
      return [
        'What are my main risk factors?',
        'How can I reduce my risk?',
        'When should I see a doctor?'
      ];
    }
    
    if (lowerMessage.includes('diet') || lowerMessage.includes('food')) {
      return [
        'Best foods for insulin sensitivity',
        'Foods to avoid',
        'Sample meal plan'
      ];
    }
    
    if (lowerMessage.includes('exercise') || lowerMessage.includes('workout')) {
      return [
        'Best exercises for insulin resistance',
        'How to get started',
        'Weekly exercise plan'
      ];
    }
    
    return [
      'What is insulin resistance?',
      'Assess my risk factors',
      'Diet recommendations',
      'Exercise guidelines'
    ];
  }
}

// Create singleton instance
const groqService = new GroqService();

export default groqService;
