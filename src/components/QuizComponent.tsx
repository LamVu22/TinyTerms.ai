import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Quiz {
  q: string;
  options: string[];
  a: string;
}

interface QuizComponentProps {
  quiz: Quiz[];
  termTitle: string;
}

export const QuizComponent = ({ quiz, termTitle }: QuizComponentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    const isCorrect = selectedAnswer === quiz[currentQuestion].a;
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < quiz.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
        setShowResult(false);
      } else {
        setIsCompleted(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowResult(false);
    setAnswers([]);
    setIsCompleted(false);
  };

  const correctCount = answers.filter(Boolean).length;
  const score = Math.round((correctCount / quiz.length) * 100);

  if (isCompleted) {
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>🎉</span>
            <span>Quiz Complete!</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{score}%</div>
            <p className="text-muted-foreground">
              You got {correctCount} out of {quiz.length} questions correct!
            </p>
          </div>
          
          <div className="space-y-2">
            {quiz.map((q, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                {answers[index] ? (
                  <CheckCircle className="h-4 w-4 text-success" />
                ) : (
                  <XCircle className="h-4 w-4 text-destructive" />
                )}
                <span className={answers[index] ? 'text-success' : 'text-destructive'}>
                  Question {index + 1}: {answers[index] ? 'Correct' : 'Incorrect'}
                </span>
              </div>
            ))}
          </div>

          <Button onClick={resetQuiz} className="w-full" variant="outline">
            <RotateCcw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>💡 Test Your Knowledge</span>
          <span className="text-sm font-normal text-muted-foreground">
            {currentQuestion + 1} of {quiz.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / quiz.length) * 100}%` }}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">{quiz[currentQuestion].q}</h3>
          
          <div className="space-y-2">
            {quiz[currentQuestion].options.map((option) => {
              let buttonVariant: "outline" | "secondary" | "default" = "outline";
              let className = "w-full justify-start text-left transition-fast";
              
              if (showResult) {
                if (option === quiz[currentQuestion].a) {
                  buttonVariant = "default";
                  className += " bg-success hover:bg-success text-success-foreground";
                } else if (option === selectedAnswer && option !== quiz[currentQuestion].a) {
                  className += " bg-destructive hover:bg-destructive text-destructive-foreground";
                }
              } else if (selectedAnswer === option) {
                buttonVariant = "secondary";
              }

              return (
                <Button
                  key={option}
                  variant={buttonVariant}
                  className={className}
                  onClick={() => !showResult && handleAnswerSelect(option)}
                  disabled={showResult}
                >
                  {option}
                </Button>
              );
            })}
          </div>

          {!showResult && (
            <Button 
              onClick={handleSubmit} 
              disabled={!selectedAnswer}
              className="w-full"
            >
              Submit Answer
            </Button>
          )}

          {showResult && (
            <div className="text-center py-2">
              {selectedAnswer === quiz[currentQuestion].a ? (
                <div className="flex items-center justify-center space-x-2 text-success">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Correct!</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2 text-destructive">
                  <XCircle className="h-5 w-5" />
                  <span className="font-medium">Try again next time!</span>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};