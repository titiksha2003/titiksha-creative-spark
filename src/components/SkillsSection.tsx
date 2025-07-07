import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, Star, TrendingUp } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Database Management", level: 70 },
        { name: "Data Structures", level: 75 }
      ]
    },
    {
      title: "Creative Tools",
      icon: Star,
      color: "accent",
      skills: [
        { name: "Canva", level: 95 },
        { name: "Adobe Photoshop", level: 80 },
        { name: "Video Editing", level: 85 },
        { name: "UI/UX Design", level: 70 },
        { name: "Adobe Premiere Pro", level: 75 },
        { name: "Adobe Audition", level: 65 }
      ]
    },
    {
      title: "Professional Skills",
      icon: Briefcase,
      color: "secondary",
      skills: [
        { name: "Content Creation", level: 90 },
        { name: "Campaign Management", level: 85 },
        { name: "Social Media Marketing", level: 80 },
        { name: "Project Management", level: 75 },
        { name: "Team Collaboration", level: 85 },
        { name: "Public Speaking", level: 70 }
      ]
    }
  ];

  const certifications = [
    "Introduction to Microsoft Excel (Coursera)",
    "Introduction to TensorFlow for AI (Coursera)",
    "Google Digital Marketing Certificate",
    "Social Media Management (Coursera)",
    "Machine Learning Foundations (Coursera)",
    "Web Development Bootcamp Certificate"
  ];

  const getSkillBarColor = (category: string) => {
    switch (category) {
      case "primary": return "bg-gradient-primary";
      case "accent": return "bg-gradient-accent";
      default: return "bg-gradient-primary";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of technical proficiency and creative expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-primary transition-all duration-500 hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-${category.color} flex items-center justify-center shadow-${category.color}`}>
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full ${getSkillBarColor(category.color)} transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:shadow-accent transition-all duration-300 hover:scale-105"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;