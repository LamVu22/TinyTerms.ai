import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { QuizComponent } from '@/components/QuizComponent';
import { getTermBySlug, getTopicById } from '@/data/terms';

const TermPage = () => {
  const { topicId, termSlug } = useParams<{ topicId: string; termSlug: string }>();
  const term = termSlug ? getTermBySlug(termSlug) : null;
  const topic = topicId ? getTopicById(topicId) : null;

  if (!term || !topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Term Not Found</h1>
          <p className="text-muted-foreground mb-6">The term you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-fast">Home</Link>
          <span>/</span>
          <Link to={`/topic/${topicId}`} className="hover:text-foreground transition-fast">
            {topic.name}
          </Link>
          <span>/</span>
          <span className="text-foreground">{term.title}</span>
        </div>

        <Button variant="ghost" asChild className="mb-6 -ml-4">
          <Link to={`/topic/${topicId}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {topic.name}
          </Link>
        </Button>

        {/* Term Header */}
        <div className="mb-8">
          <div className="flex items-start space-x-4 mb-4">
            <span className="text-5xl">{term.emoji}</span>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{term.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{term.summary}</p>
              <div className="flex flex-wrap gap-2">
                {term.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Simple Explanation */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <span>Simple Explanation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">{term.one}</p>
          </CardContent>
        </Card>

        {/* Story/Analogy */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Real-World Analogy</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-muted-foreground italic">
              "{term.story}"
            </p>
          </CardContent>
        </Card>

        {/* Examples */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Examples You Might See</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {term.examples.map((example, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-base">{example}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Technical Definition */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">For the Curious: Technical Definition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {term.grown}
            </p>
          </CardContent>
        </Card>

        {/* Quiz */}
        <QuizComponent quiz={term.quiz} termTitle={term.title} />
      </div>
    </div>
  );
};

export default TermPage;