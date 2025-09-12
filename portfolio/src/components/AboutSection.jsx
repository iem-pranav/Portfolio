import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground font-bold">
              Hey, I’m Pranav Khairnar — a developer passionate about creating
              products that are clean, intuitive, and genuinely impactful.
            </p>
            <p className="text-muted-foreground">
              I focus on crafting digital experiences that combine thoughtful
              design with reliable engineering. Collaboration and clarity shape
              the way I work, and I aim to deliver solutions that feel
              effortless to use while being strong at their core. Driven by
              curiosity and attention to detail, I’m always learning, refining,
              and pushing my craft forward to create work that stands out for
              its quality and polish.
            </p>
            <p className="text-muted-foreground">
              I like to think of myself as someone who codes fast, learns
              faster, and cares about polish — not just in the product, but in
              the entire experience of building it. If you’re looking for
              someone who’s reliable, curious, and always eager to create, let’s
              connect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="Pranav-Resume.pdf" target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duartion-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, accessible, and scalable web
                    applications using modern web technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Design & Creativity</h4>
                  <p className="text-muted-foreground">
                    Crafting clean visuals and product designs, including
                    merchandise for PICT Robotics, with attention to detail and
                    polish.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Collaboration & Mentorship
                  </h4>
                  <p className="text-muted-foreground">
                    Working effectively in teams, from academic projects to
                    mentoring peers, with a focus on clear communication and
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
