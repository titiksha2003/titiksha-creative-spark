import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Github, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Wizenko - Language Learning Platform",
      description: "Built a multilingual learning platform with AI-powered real-time speech practice and feedback. Features interactive lessons, pronunciation training, and progress tracking for language learners.",
      image: "/a.png",
      liveUrl: "https://linguagame-tutor-hub.lovable.app/",
      githubUrl: "https://github.com/titiksha2003/linguagame-tutor-hub.git",
      tags: ["React", "TypeScript", "AI Integration", "Speech Recognition", "Educational"],
      featured: true,
      highlights: [
        "AI-powered speech feedback system",
        "Multi-language support",
        "Interactive learning modules",
        "Real-time pronunciation analysis"
      ]
    },
    {
      title: "Vibematch - Audience Analytics",
      description: "AI-based platform helping influencers, NGOs, and brands discover their niche audience and validate content impact. Features audience analysis, content optimization, and engagement metrics.",
      image: "/b.png",
      liveUrl: "https://audience-whisper-lab-app.vercel.app/",
      githubUrl: "https://github.com/titiksha2003/audience-whisper-lab-app.git",
      tags: ["React", "AI/ML", "Data Analytics", "Content Strategy", "Marketing"],
      featured: true,
      highlights: [
        "Audience targeting algorithms",
        "Content impact measurement",
        "Engagement analytics dashboard",
        "Campaign optimization tools"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications showcasing technical skills and creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-elegant hover:shadow-primary transition-all duration-500 hover:scale-[1.02]"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden bg-gradient-primary/10 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[16/9] lg:aspect-[16/10] flex items-center justify-center p-6">
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border border-border/30" style={{ maxWidth: "95%" }}>
                      {/* Browser-like top bar */}
                      <div className="absolute top-0 left-0 right-0 h-6 bg-background/90 border-b border-border/30 flex items-center px-2 z-10">
                        <div className="flex space-x-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="mx-auto bg-muted/50 rounded-sm h-3.5 w-2/3 flex items-center justify-center">
                          <div className="text-[6px] text-muted-foreground truncate">{project.liveUrl}</div>
                        </div>
                      </div>
                      {/* Screenshot */}
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover mt-6"
                      />
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="default" className="bg-accent text-accent-foreground">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl mb-3">{project.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardHeader>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="gradient" 
                      size="lg" 
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Live Project
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            More exciting projects are in development. Stay tuned for updates!
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/titiksha2003', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;