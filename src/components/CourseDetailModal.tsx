import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, CheckCircle, Calendar, BookOpen, Target, GraduationCap } from "lucide-react";

interface CourseDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    name: string;
    duration: string;
    level: string;
    topics: string[];
    category: string;
  } | null;
}

const CourseDetailModal = ({ isOpen, onClose, course }: CourseDetailModalProps) => {
  if (!course) return null;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Advanced':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const courseDetails = {
    prerequisites: course.level === 'Beginner' 
      ? ['Basic computer skills', 'Willingness to learn']
      : course.level === 'Intermediate'
      ? ['Foundational knowledge in the subject area', 'Some hands-on experience recommended']
      : ['Strong foundational knowledge', 'Prior practical experience required', 'Familiarity with related tools'],
    outcomes: [
      `Master key concepts of ${course.name}`,
      'Apply skills in real-world scenarios',
      'Complete hands-on projects and exercises',
      'Receive certification upon completion',
    ],
    format: [
      'Live instructor-led sessions',
      'Hands-on lab exercises',
      'Real-world case studies',
      'Q&A and discussion sessions',
    ],
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getLevelColor(course.level)}`}>
              {course.level}
            </span>
            <span className="text-xs text-muted-foreground">{course.category}</span>
          </div>
          <DialogTitle className="text-2xl font-bold">{course.name}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Comprehensive training program designed to help you master {course.name.toLowerCase()}.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-muted/50 rounded-lg p-3 text-center">
              <Clock className="w-5 h-5 mx-auto text-primary mb-1" />
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="font-semibold text-sm">{course.duration}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 text-center">
              <Users className="w-5 h-5 mx-auto text-primary mb-1" />
              <p className="text-xs text-muted-foreground">Class Size</p>
              <p className="font-semibold text-sm">Max 15</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 text-center">
              <Calendar className="w-5 h-5 mx-auto text-primary mb-1" />
              <p className="text-xs text-muted-foreground">Schedule</p>
              <p className="font-semibold text-sm">Flexible</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 text-center">
              <Award className="w-5 h-5 mx-auto text-primary mb-1" />
              <p className="text-xs text-muted-foreground">Certificate</p>
              <p className="font-semibold text-sm">Included</p>
            </div>
          </div>

          {/* Course Topics */}
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-primary" />
              What You'll Learn
            </h3>
            <div className="grid gap-2">
              {course.topics.map((topic, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-primary" />
              Prerequisites
            </h3>
            <ul className="space-y-2">
              {courseDetails.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {prereq}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5 text-primary" />
              Learning Outcomes
            </h3>
            <ul className="space-y-2">
              {courseDetails.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Training Format */}
          <div className="bg-primary/5 rounded-xl p-4">
            <h3 className="font-semibold mb-3">Training Format</h3>
            <div className="grid grid-cols-2 gap-2">
              {courseDetails.format.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1" size="lg">
              Enroll Now
            </Button>
            <Button variant="outline" size="lg" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailModal;
