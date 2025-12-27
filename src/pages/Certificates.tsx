import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Download, 
  Share2, 
  Calendar,
  Lock,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const Certificates = () => {
  const earnedCertificates = [
    {
      id: 1,
      title: "Crypto Trading Fundamentals",
      course: "Crypto Trading",
      earnedDate: "December 15, 2025",
      credentialId: "LUC-CRYPTO-2025-001",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Technical Analysis Basics",
      course: "Trading Essentials",
      earnedDate: "November 28, 2025",
      credentialId: "LUC-TA-2025-042",
      image: "/placeholder.svg"
    }
  ];

  const availableCertificates = [
    {
      id: 3,
      title: "Stock Trading Mastery",
      course: "Stock Trading",
      progress: 65,
      lessonsRemaining: 8
    },
    {
      id: 4,
      title: "Forex Trading Professional",
      course: "Forex Trading",
      progress: 20,
      lessonsRemaining: 16
    },
    {
      id: 5,
      title: "Options Trading Expert",
      course: "Options Trading",
      progress: 0,
      lessonsRemaining: 18
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Certificates</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Your Achievements
            </h1>
            <p className="text-muted-foreground">
              Showcase your trading knowledge with verified certificates
            </p>
          </div>

          {/* Earned Certificates */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Earned Certificates</h2>
            {earnedCertificates.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {earnedCertificates.map((cert) => (
                  <div 
                    key={cert.id}
                    className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl overflow-hidden"
                  >
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/30 to-accent/30 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-foreground">{cert.title}</h3>
                        <p className="text-muted-foreground">{cert.course}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        Earned on {cert.earnedDate}
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        Credential ID: {cert.credentialId}
                      </p>
                      <div className="flex gap-3">
                        <Button className="flex-1 gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Share2 className="h-4 w-4" />
                          Share
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Verify
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-12 text-center">
                <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No certificates yet</h3>
                <p className="text-muted-foreground mb-6">
                  Complete a course to earn your first certificate
                </p>
                <Button asChild>
                  <Link to="/courses">Browse Courses</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Available Certificates */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Available Certificates</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {availableCertificates.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cert.course}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground">{cert.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        style={{ width: `${cert.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    {cert.lessonsRemaining} lessons remaining
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-4">About Lucidity Certificates</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Verifiable Credentials</h3>
                <p className="text-muted-foreground">
                  Each certificate has a unique credential ID that can be verified by employers and institutions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Share on LinkedIn</h3>
                <p className="text-muted-foreground">
                  Add your certificates directly to your LinkedIn profile to showcase your skills.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Lifetime Access</h3>
                <p className="text-muted-foreground">
                  Once earned, your certificates are yours forever. Download and share anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certificates;
