import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TermCard } from '@/components/TermCard';
import { getTopicById } from '@/data/terms';

const TopicPage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topicId ? getTopicById(topicId) : null;

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Topic Not Found</h1>
          <p className="text-muted-foreground mb-6">The topic you're looking for doesn't exist.</p>
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
      <div className="container max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <Button variant="ghost" asChild className="mb-6 -ml-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Topic Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-5xl">{topic.emoji}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{topic.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">{topic.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>{topic.terms.length} terms</span>
            </div>
            <Badge variant="secondary">
              Learning Level: Beginner Friendly
            </Badge>
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topic.terms.map((term) => (
            <TermCard key={term.slug} term={term} topicId={topic.id} />
          ))}
        </div>

        {/* Empty State */}
        {topic.terms.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No terms yet</h3>
            <p className="text-muted-foreground">
              We're working on adding more terms to this topic. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicPage;