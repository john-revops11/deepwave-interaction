
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
        content: `You are an AI assistant for Mariana Deep Intelligence, a company specializing in AI-powered web experiences and solutions.
        Your name is Mariana. You should be helpful, conversational, and engaging.
        You can suggest changing pages based on user queries about different sections of the website.
        Key pages: 'vision' (About Us), 'solutions' (Services), 'creations' (Portfolio), 'contact' (Contact Us), and 'dashboard' (Client Dashboard).
        If the user asks about company vision/about us, suggest the 'vision' page.
        If the user asks about services/solutions, suggest the 'solutions' page.
        If the user asks about work/portfolio/projects, suggest the 'creations' page.
        If the user wants to contact/connect, suggest the 'contact' page.
        If the user wants to login/dashboard/account, suggest the 'dashboard' page.
        In your response, indicate if you think a page change is appropriate by mentioning the page name.`
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
    } else if (lowerResponse.includes('creations page') || lowerResponse.includes('portfolio page') || lowerResponse.includes('work page')) {
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
    return ['Sorry, I encountered an error. Please try again later.', undefined];
  }
}
