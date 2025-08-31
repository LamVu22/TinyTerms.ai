import { machineLearningTopic } from './mlTerms';
import { aiTopic } from './aiTerms';
import { softwareEngineeringTopic } from './sweTerms';

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

export const topics: Topic[] = [machineLearningTopic, aiTopic, softwareEngineeringTopic];

export const getAllTerms = (): Term[] => {
  return topics.flatMap(topic => topic.terms);
};

export const getTermBySlug = (slug: string): Term | undefined => {
  return getAllTerms().find(term => term.slug === slug);
};

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find(topic => topic.id === id);
};