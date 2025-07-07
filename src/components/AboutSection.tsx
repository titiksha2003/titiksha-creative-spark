import { Card, CardContent } from "@/components/ui/card";
import { Book, Briefcase, Star } from "lucide-react";

const AboutSection = () => {
  const timeline = [
    {
      year: "2020-2021",
      title: "Higher Secondary",
      subtitle: "INTERMEDIATE (PCM), VIVEKANAND SCHOOL",
      location: "ANAND VIHAR",
      description: "Completed with strong foundation in sciences and mathematics"
    },
    {
      year: "2021-2025",
      title: "B.Tech Computer Science",
      subtitle: "RAJ KUMAR GOEL INSTITUTE OF TECHNOLOGY",
      location: "GHAZIABAD",
      description: "Pursuing Computer Science with focus on web development and AI"
    },
    {
      year: "2023-2024",
      title: "Intern at BEL",
      subtitle: "BHARAT ELECTRONICS LIMITED",
      location: "GHAZIABAD",
      description: "Gained hands-on experience in electronics and system integration"
    },
    {
      year: "2024",
      title: "NGO Content Creator",
      subtitle: "Campaign Management for NGO",
      location: "Remote",
      description: "Managed YouTube channel growth to 1000+ subscribers with engaging content"
    }
  ];

  const interests = [
    { icon: "🎤", title: "Singing", description: "Passionate about bhajans and devotional music" },
    { icon: "🎨", title: "Drawing", description: "Creating visual art and digital illustrations" },
    { icon: "🎬", title: "Video Editing", description: "Photo editing and video production" },
    { icon: "🐄", title: "Gaushala Work", description: "Volunteering at local cow shelters" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a creative soul, blending technical expertise with artistic expression
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="p-6 shadow-elegant hover:shadow-primary transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As an aspiring multidisciplinary contributor, I'm eager to engage in diverse fields using foundational 
                  technical skills. Quick to learn and enthusiastic about contributing to innovative solutions while 
                  growing in a dynamic role.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A supportive team player with a balanced approach, I bring dedication and creativity to all my pursuits. 
                  From developing AI-powered applications to creating engaging content for social causes.
                </p>
              </CardContent>
            </Card>

            {/* Creative Interests */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Creative Interests</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <Card 
                    key={index} 
                    className="p-4 hover:shadow-accent transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-0 text-center">
                      <div className="text-3xl mb-2">{interest.icon}</div>
                      <h4 className="font-semibold text-foreground mb-1">{interest.title}</h4>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Education & Experience</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 last:pb-0">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-primary"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full transform -translate-x-1.5">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
                  </div>

                  <Card className="shadow-elegant hover:shadow-primary transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                      <h5 className="text-primary font-medium mb-1">{item.subtitle}</h5>
                      <p className="text-sm text-muted-foreground mb-2">{item.location}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;