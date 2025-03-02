
import { toast } from "sonner";

// WARNING: Exposing API keys in frontend code is a security risk.
// In production, this should be handled by a backend service.
const OPENAI_API_KEY = "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";

export type SceneType = 'welcome' | 'vision' | 'solutions' | 'creations' | 'contact' | 'dashboard';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function sendMessageToOpenAI(
  message: string, 
  conversationHistory: ChatMessage[]
): Promise<[string, SceneType | undefined]> {
  try {
    // Create conversation history including the current message
    const messages: ChatMessage[] = [
      { 
        role: 'system', 
        content: `You are Mariana, an AI assistant for Mariana Deep Intelligence, a company specializing in AI-powered web experiences and solutions.
        
        Be helpful, conversational, engaging, and personable. Use a friendly tone and respond thoughtfully to user queries.
        
        The Mariana Deep Intelligence website has several pages that you can navigate users to:
        - 'vision' (About Us): Information about the company's mission and philosophy
        - 'solutions' (Services): AI-powered services we offer to clients
        - 'creations' (Portfolio): Examples of our previous work and projects
        - 'contact' (Contact Us): How to get in touch with our team
        - 'dashboard' (Client Dashboard): For existing clients to log in
        
        When a user expresses interest in any of these topics, suggest navigating to the appropriate page. For example:
        - If they ask about company vision/about us/who we are, suggest the 'vision' page
        - If they ask about services/solutions/what we offer, suggest the 'solutions' page
        - If they ask about work/portfolio/projects/examples, suggest the 'creations' page
        - If they want to contact/connect/get in touch, suggest the 'contact' page
        - If they want to login/dashboard/account, suggest the 'dashboard' page
        
        Don't force navigation suggestions if they're just asking general questions. Only suggest navigation when it's clearly relevant to their query.
        
        Important: When suggesting navigation, mention the page name explicitly in your response, like "Would you like to see our Solutions page?" or "I can show you our Creations page if you'd like to see examples of our work."
        
        Your role is to be the digital face of Mariana Deep Intelligence - knowledgeable, helpful, and guiding users through their journey on our website.`
      },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    // Make API request to OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const responseText = data.choices[0].message.content;

    // Determine if a scene change is suggested based on keywords in the response
    let suggestedScene: SceneType | undefined = undefined;
    
    const lowerResponse = responseText.toLowerCase();
    
    if (lowerResponse.includes('vision page') || lowerResponse.includes('about us page') || lowerResponse.includes('about page')) {
      suggestedScene = 'vision';
    } else if (lowerResponse.includes('solutions page') || lowerResponse.includes('services page')) {
      suggestedScene = 'solutions';
    } else if (lowerResponse.includes('creations page') || lowerResponse.includes('portfolio page') || lowerResponse.includes('work page') || lowerResponse.includes('projects page')) {
      suggestedScene = 'creations';
    } else if (lowerResponse.includes('contact page') || lowerResponse.includes('get in touch')) {
      suggestedScene = 'contact';
    } else if (lowerResponse.includes('dashboard page') || lowerResponse.includes('login page') || lowerResponse.includes('account page')) {
      suggestedScene = 'dashboard';
    }

    return [responseText, suggestedScene];
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    toast.error('Failed to get a response. Please try again.');
    return ['Sorry, I encountered an error connecting to my AI systems. Please try again later.', undefined];
  }
}
