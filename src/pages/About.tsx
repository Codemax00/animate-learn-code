
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">About AnimateLearnCode</h1>
              
              <div className="prose dark:prose-invert max-w-none">
                <p className="lead">
                  AnimateLearnCode is an interactive learning platform focused on teaching HTML and CSS
                  through beautiful animations and hands-on practice.
                </p>
                
                <h2>Our Mission</h2>
                <p>
                  Our mission is to make web development accessible to everyone by creating a visual,
                  engaging learning experience that simplifies complex concepts and builds confidence
                  through practical application.
                </p>
                
                <h2>Our Approach</h2>
                <p>
                  We believe that seeing is understanding. That's why our platform leverages the power
                  of animation to demonstrate HTML and CSS concepts in action. By visualizing how
                  properties and values affect elements on a page, you'll develop an intuitive
                  understanding of web development fundamentals.
                </p>
                
                <h2>What Makes Us Different</h2>
                <ul>
                  <li>
                    <strong>Visual Learning:</strong> Every concept is accompanied by an animation
                    that demonstrates the principle in action.
                  </li>
                  <li>
                    <strong>Interactive Code Editor:</strong> Experiment with code in real-time and
                    see the results instantly.
                  </li>
                  <li>
                    <strong>Practice-Based:</strong> Challenges at the end of each lesson help
                    reinforce your learning.
                  </li>
                  <li>
                    <strong>Progress Tracking:</strong> We save your progress automatically so you
                    can pick up right where you left off.
                  </li>
                </ul>
                
                <h2>Who We're For</h2>
                <p>
                  Whether you're a complete beginner with no coding experience, a design student
                  looking to build your web skills, or a professional wanting to refresh your
                  knowledge, our platform is designed for you. We break down complex topics into
                  bite-sized lessons that make learning enjoyable and effective.
                </p>
                
                <h2>Start Your Journey</h2>
                <p>
                  Ready to dive in? Head over to our lessons page and begin exploring the world of
                  web development through animation. Every great website starts with HTML and CSS,
                  and your journey begins here.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
