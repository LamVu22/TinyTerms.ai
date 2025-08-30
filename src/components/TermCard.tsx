import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Term } from '@/data/terms';

interface TermCardProps {
  term: Term;
  topicId: string;
}

export const TermCard = ({ term, topicId }: TermCardProps) => {
  return (
    <Link to={`/topic/${topicId}/term/${term.slug}`}>
      <Card className="card-hover h-full cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{term.emoji}</span>
              <div>
                <h3 className="font-semibold text-lg">{term.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{term.summary}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-1">
            {term.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};