export interface Term {
  slug: string;
  title: string;
  emoji: string;
  summary: string;
  tags: string[];
  one: string;
  story: string;
  examples: string[];
  grown: string;
  quiz: {
    q: string;
    options: string[];
    a: string;
  }[];
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  emoji: string;
  terms: Term[];
}

export const topics: Topic[] = [
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    description: 'How computers learn patterns from data',
    emoji: '🤖',
    terms: [
      {
        slug: 'overfitting',
        title: 'Overfitting',
        emoji: '🧠',
        summary: 'Memorizing homework, not the lesson.',
        tags: ['evaluation', 'model-quality'],
        one: 'Overfitting is when you memorize the homework, not the lesson.',
        story: "You practice ten spelling words and ace those exact words. But on test day, new words appear and you freeze. You memorized, not the patterns.",
        examples: [
          'Model 99% on training, fails on new data',
          "Quiz app only knows yesterday's questions",
        ],
        grown: 'Model capacity capturing noise; validation error rises while training error falls.',
        quiz: [
          { q: 'Big gap between train and test means risk?', options: ['Yes', 'No'], a: 'Yes' },
          { q: 'Seeing new data is important?', options: ['Yes', 'No'], a: 'Yes' },
          { q: 'Is memorizing always good?', options: ['Yes', 'No'], a: 'No' },
        ],
      },
      {
        slug: 'neural-network',
        title: 'Neural Network',
        emoji: '🕸️',
        summary: 'Like a brain made of tiny decision-makers.',
        tags: ['architecture', 'deep-learning'],
        one: 'A neural network is like a brain made of simple decision-makers connected together.',
        story: "Imagine a team of people passing notes. Each person reads notes, thinks about them, and passes new notes forward. Together, they solve complex puzzles no single person could handle.",
        examples: [
          'Image recognition: \"Is this a cat?\"',
          'Voice assistants understanding speech',
        ],
        grown: 'Interconnected layers of artificial neurons processing weighted inputs through activation functions.',
        quiz: [
          { q: 'Do neurons work together?', options: ['Yes', 'No'], a: 'Yes' },
          { q: 'Can one neuron solve everything?', options: ['Yes', 'No'], a: 'No' },
          { q: 'Do layers pass information forward?', options: ['Yes', 'No'], a: 'Yes' },
        ],
      },
    ],
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    description: 'Making computers think and act smart',
    emoji: '🤖',
    terms: [
      {
        slug: 'algorithm',
        title: 'Algorithm',
        emoji: '📝',
        summary: 'A recipe for solving problems step by step.',
        tags: ['fundamentals', 'logic'],
        one: 'An algorithm is like a recipe that tells computers exactly what steps to follow.',
        story: "Making a peanut butter sandwich: 1. Get bread 2. Open jar 3. Spread peanut butter 4. Close sandwich. Computers need this level of detail for everything!",
        examples: [
          'GPS finding the fastest route home',
          'Search engines ranking web pages',
        ],
        grown: 'A finite sequence of well-defined instructions for computational problem-solving.',
        quiz: [
          { q: 'Do algorithms need clear steps?', options: ['Yes', 'No'], a: 'Yes' },
          { q: 'Can algorithms solve any problem?', options: ['Yes', 'No'], a: 'No' },
          { q: 'Are algorithms like recipes?', options: ['Yes', 'No'], a: 'Yes' },
        ],
      },
      {
        slug: 'machine-learning',
        title: 'Machine Learning',
        emoji: '📚',
        summary: 'Teaching computers to learn from examples.',
        tags: ['learning', 'data'],
        one: 'Machine learning is teaching computers to get better at tasks by showing them lots of examples.',
        story: "Like teaching a child to recognize dogs by showing thousands of dog photos. Eventually, they spot dogs in new pictures without being told what to look for.",
        examples: [
          'Email spam detection',
          'Recommendation systems on Netflix',
        ],
        grown: 'Algorithms that improve performance on tasks through experience without explicit programming.',
        quiz: [
          { q: 'Do machines learn from examples?', options: ['Yes', 'No'], a: 'Yes' },
          { q: 'Do they need explicit programming for each case?', options: ['Yes', 'No'], a: 'No' },
          { q: 'Can they improve over time?', options: ['Yes', 'No'], a: 'Yes' },
        ],
      },
    ],
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    description: 'Building software the right way',
    emoji: '⚙️',
    terms: [
      {
        slug: 'api',
        title: 'API',
        emoji: '🔌',
        summary: 'A waiter between your app and the kitchen.',
        tags: ['integration', 'communication'],
        one: 'An API is like a waiter that takes your order and brings food from the kitchen.',
        story: "You don't go into a restaurant kitchen to cook. You tell the waiter what you want, they talk to the chef, and bring back your food. APIs work the same way between apps.",
        examples: [
          'Weather app getting temperature data',
          'Login with Google button',
        ],
        grown: 'Application Programming Interface: defined methods for software components to communicate.',
        quiz: [
          { q: 'Do APIs help apps talk to each other?', options: ['Yes', 'No'], a: 'Yes' },
          { q: 'Do you need to know how the other app works?', options: ['Yes', 'No'], a: 'No' },
          { q: 'Are APIs like waiters?', options: ['Yes', 'No'], a: 'Yes' },
        ],
      },
      {
        slug: 'debugging',
        title: 'Debugging',
        emoji: '🐛',
        summary: 'Finding and fixing broken code like a detective.',
        tags: ['problem-solving', 'development'],
        one: 'Debugging is being a detective to find what\'s making your code act weird.',
        story: "Your car won't start. Is it the battery? Gas? Keys? You check each clue until you find the real problem. Debugging code works exactly the same way.",
        examples: [
          'App crashes when clicking a button',
          'Website loads slowly on mobile phones',
        ],
        grown: 'Systematic process of identifying, isolating, and resolving defects in software.',
        quiz: [
          { q: 'Is debugging like detective work?', options: ['Yes', 'No'], a: 'Yes' },
          { q: 'Should you guess randomly?', options: ['Yes', 'No'], a: 'No' },
          { q: 'Do you check clues systematically?', options: ['Yes', 'No'], a: 'Yes' },
        ],
      },
    ],
  },
];

export const getAllTerms = (): Term[] => {
  return topics.flatMap(topic => topic.terms);
};

export const getTermBySlug = (slug: string): Term | undefined => {
  return getAllTerms().find(term => term.slug === slug);
};

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find(topic => topic.id === id);
};