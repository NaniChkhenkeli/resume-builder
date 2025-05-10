
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { 
  FilePenLine, 
  Download, 
  Sparkles, 
  Layers, 
  CheckCircle,
  Clock,
  Palette,
  ArrowRight
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Create stunning resumes in <span className="text-resume-primary">minutes</span>, not hours
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Our intuitive resume builder helps you craft beautiful, professional resumes that stand out to employers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/builder">
                    <Button size="lg" className="w-full sm:w-auto group">
                      <FilePenLine className="mr-2 h-5 w-5" /> 
                      Create Your Resume
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-10">
                <div className="relative">
                  <div className="bg-card shadow-xl rounded-lg p-2 transform -rotate-3 absolute -left-4 top-4 z-10 w-full border border-border">
                    <div className="h-64 bg-muted rounded flex items-center justify-center">
                      <div className="w-5/6 mx-auto">
                        <div className="h-8 bg-muted-foreground/20 w-2/3 mb-4 rounded"></div>
                        <div className="h-4 bg-muted-foreground/20 w-5/6 mb-2 rounded"></div>
                        <div className="h-4 bg-muted-foreground/20 w-full mb-2 rounded"></div>
                        <div className="h-4 bg-muted-foreground/20 w-4/6 mb-6 rounded"></div>
                        <div className="h-6 bg-muted-foreground/20 w-1/3 mb-3 rounded"></div>
                        <div className="h-4 bg-muted-foreground/20 w-5/6 mb-2 rounded"></div>
                        <div className="h-4 bg-muted-foreground/20 w-full mb-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card shadow-xl rounded-lg p-2 transform rotate-2 relative z-20 w-full border border-border">
                    <div className="h-64 bg-background rounded flex items-center justify-center">
                      <div className="w-5/6 mx-auto">
                        <div className="h-10 bg-resume-primary w-full mb-4 rounded"></div>
                        <div className="h-6 bg-muted w-1/3 mb-3 rounded"></div>
                        <div className="h-4 bg-muted w-5/6 mb-2 rounded"></div>
                        <div className="h-4 bg-muted w-full mb-2 rounded"></div>
                        <div className="h-6 bg-muted w-1/3 mb-3 rounded"></div>
                        <div className="h-4 bg-muted w-5/6 mb-2 rounded"></div>
                        <div className="h-4 bg-muted w-full mb-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Why Choose Our Resume Builder?</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Stand out from the crowd with professionally designed resumes that highlight your strengths.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                <p className="text-muted-foreground">Create a professional resume in minutes with our easy-to-use builder.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Templates</h3>
                <p className="text-muted-foreground">Choose from professionally designed templates to match your style.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customization</h3>
                <p className="text-muted-foreground">Personalize every aspect of your resume with our intuitive editor.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ATS-Friendly</h3>
                <p className="text-muted-foreground">Ensure your resume passes Applicant Tracking Systems with our optimized layouts.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Export</h3>
                <p className="text-muted-foreground">Download your resume as a polished PDF file ready to be sent to employers.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Approved</h3>
                <p className="text-muted-foreground">Templates designed with input from HR professionals and recruiters.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Templates Preview */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Professional Resume Templates</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Choose from our collection of professionally designed templates
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="aspect-[210/297] bg-white p-4">
                  <div className="bg-resume-primary h-12 mb-3"></div>
                  <div className="space-y-2 mb-4">
                    <div className="bg-gray-200 h-6 w-1/2"></div>
                    <div className="bg-gray-100 h-3 w-full"></div>
                    <div className="bg-gray-100 h-3 w-3/4"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-4 w-1/3"></div>
                    <div className="bg-gray-100 h-2 w-full"></div>
                    <div className="bg-gray-100 h-2 w-full"></div>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-medium">Professional</h3>
                  <p className="text-sm text-muted-foreground">Clean and traditional design</p>
                </div>
              </div>
              
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="aspect-[210/297] bg-white p-4">
                  <div className="space-y-2 mb-4">
                    <div className="bg-resume-secondary h-6 w-1/2"></div>
                    <div className="border-b-2 border-resume-secondary pb-2"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-4 w-1/3"></div>
                    <div className="bg-gray-100 h-2 w-full"></div>
                    <div className="bg-gray-100 h-2 w-3/4"></div>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-medium">Minimalist</h3>
                  <p className="text-sm text-muted-foreground">Simple and elegant layout</p>
                </div>
              </div>
              
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="aspect-[210/297] bg-white p-4">
                  <div className="flex">
                    <div className="w-1/3 bg-resume-accent p-2">
                      <div className="bg-white/20 h-12 w-12 rounded-full mb-4"></div>
                      <div className="bg-white/20 h-3 w-5/6 mb-2"></div>
                      <div className="bg-white/20 h-3 w-4/6 mb-4"></div>
                      <div className="bg-white/20 h-4 w-5/6 mb-2"></div>
                      <div className="bg-white/20 h-3 w-4/6"></div>
                    </div>
                    <div className="w-2/3 p-2">
                      <div className="bg-gray-200 h-4 w-2/3 mb-4"></div>
                      <div className="bg-gray-100 h-3 w-full mb-2"></div>
                      <div className="bg-gray-100 h-3 w-full mb-4"></div>
                      <div className="bg-gray-200 h-4 w-1/2 mb-2"></div>
                      <div className="bg-gray-100 h-3 w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-medium">Modern</h3>
                  <p className="text-sm text-muted-foreground">Contemporary two-column layout</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/builder">
                <Button size="lg">
                  Start Building Your Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to create your professional resume?</h2>
            <Link to="/builder">
              <Button size="lg" variant="secondary" className="font-medium">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <footer className="bg-card text-card-foreground py-10 border-t border-border">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="text-xl font-bold flex items-center">
                <FilePenLine className="mr-2 h-6 w-6" />
                ResumeBuilder
              </Link>
              <p className="mt-2 text-muted-foreground text-sm">Build beautiful resumes in minutes.</p>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ResumeBuilder. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
