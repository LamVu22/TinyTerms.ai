import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Sparkles, Target, ArrowRight } from 'lucide-react';
import { topics } from '@/data/terms';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-16 w-16 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tech Terms Made Simple
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Learn complex AI, ML, and Software Engineering concepts explained like you're 5 years old. 
            No jargon, just simple explanations that stick.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="tech-gradient text-white">
              <Link to="/topic/machine-learning">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="#topics">Browse Topics</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why TinyTerms.ai?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We break down complex technical concepts into bite-sized, easy-to-understand explanations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover text-center">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Simple Explanations</CardTitle>
                <CardDescription>
                  Complex concepts explained in plain language with real-world analogies
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-hover text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Interactive Learning</CardTitle>
                <CardDescription>
                  Test your understanding with fun quizzes and practical examples
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-hover text-center">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Progressive Learning</CardTitle>
                <CardDescription>
                  Start with basics and gradually build up to more complex concepts
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Topics</h2>
            <p className="text-lg text-muted-foreground">
              Choose a topic to start your learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <Card key={topic.id} className="card-hover group">
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {topic.emoji}
                  </div>
                  <CardTitle>{topic.name}</CardTitle>
                  <CardDescription className="text-base">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to={`/topic/${topic.id}`}>
                      Explore {topic.terms.length} Terms
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;