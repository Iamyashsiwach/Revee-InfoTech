import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us | Revee InfoTech",
  description: "Get in touch with our team to discuss your network infrastructure needs",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-white text-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-teal"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -skew-x-12 transform origin-top-right z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="w-24 h-2 bg-teal mb-6"></div>
              <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-navy">
                Contact <span className="text-teal">Us</span>
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Get in touch with our team to discuss your network infrastructure needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-teal/10 text-teal px-3 py-1 rounded-full text-sm font-medium">Enterprise Solutions</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Network Design</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Technical Support</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-lg overflow-hidden shadow-xl border-8 border-white">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Contact and support team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <div className="w-24 h-2 bg-teal mb-4"></div>
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-navy mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="mr-3 md:mr-4 bg-teal rounded-full p-2 text-white">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-navy mb-1 md:mb-2">Visit Us</h3>
                    <p className="text-sm md:text-base text-gray-700">
                      123 Business Avenue<br />
                      Tech City, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 md:mr-4 bg-blue-500 rounded-full p-2 text-white">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-navy mb-1 md:mb-2">Call Us</h3>
                    <p className="text-sm md:text-base text-gray-700 mb-1">Phone: (555) 123-4567</p>
                    <p className="text-sm md:text-base text-gray-700">Toll-free: (800) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 md:mr-4 bg-green-500 rounded-full p-2 text-white">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-navy mb-1 md:mb-2">Email Us</h3>
                    <p className="text-sm md:text-base text-gray-700 mb-1">Info: info@Revee InfoTech.com</p>
                    <p className="text-sm md:text-base text-gray-700">Support: support@Revee InfoTech.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 md:mr-4 bg-purple-500 rounded-full p-2 text-white">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-navy mb-1 md:mb-2">Business Hours</h3>
                    <p className="text-sm md:text-base text-gray-700 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm md:text-base text-gray-700">Saturday - Sunday: Closed</p>
                    <p className="text-sm md:text-base text-gray-700 mt-2">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-10">
                <h3 className="text-xl font-poppins font-semibold text-navy mb-3 md:mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-3 md:space-x-4">
                  <a href="#" className="p-2 bg-blue-500 text-white hover:bg-blue-600 rounded-full transition-colors">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-blue-400 text-white hover:bg-blue-500 rounded-full transition-colors">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 rounded-full transition-colors">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-gray-700 text-white hover:bg-gray-800 rounded-full transition-colors">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-blue-600 text-white hover:bg-blue-700 rounded-full transition-colors">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="shadow-xl border-t-4 border-teal overflow-hidden">
                <CardContent className="p-5 md:p-8">
                  <h2 className="text-xl md:text-2xl font-poppins font-bold text-navy mb-4 md:mb-6">
                    Send Us a Message
                  </h2>
                  <form className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Name *
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="border-gray-300 focus:border-teal focus:ring focus:ring-teal/20 text-sm md:text-base"
                          required
                        />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="border-gray-300 focus:border-teal focus:ring focus:ring-teal/20 text-sm md:text-base"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          placeholder="Your phone number"
                          className="border-gray-300 focus:border-teal focus:ring focus:ring-teal/20 text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-gray-700">
                          Company
                        </label>
                        <Input
                          id="company"
                          placeholder="Your company"
                          className="border-gray-300 focus:border-teal focus:ring focus:ring-teal/20 text-sm md:text-base"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject of your message"
                        className="border-gray-300 focus:border-teal focus:ring focus:ring-teal/20 text-sm md:text-base"
                        required
                      />
                    </div>
                    
                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="border-gray-300 focus:border-teal focus:ring focus:ring-teal/20 min-h-24 md:min-h-32 text-sm md:text-base"
                        required
                      />
                    </div>
                    
                    <div>
                      <Button className="w-full bg-teal hover:bg-teal/90 text-white h-10 md:h-12 text-sm md:text-base">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <div>
              <div className="w-24 h-2 bg-teal mx-auto mb-4"></div>
              <h2 className="text-2xl md:text-4xl font-poppins font-bold text-navy mb-4 md:mb-6">
                Our Location
              </h2>
              <p className="text-sm md:text-base text-gray-700">
                Visit our office or contact us using the information below.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-xl border-4 border-gray-100">
            <div className="relative h-[250px] md:h-[400px] w-full">
              {/* Replace with your map implementation */}
              <div className="absolute inset-0 bg-blue-50 flex items-center justify-center text-gray-500">
                <div className="text-center px-4">
                  <svg className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-base md:text-lg font-medium text-navy">Map would be displayed here</p>
                  <p className="text-xs md:text-sm text-gray-600">Interactive map showing our office location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div>
                <div className="w-24 h-2 bg-teal mx-auto mb-4"></div>
                <h2 className="text-2xl md:text-4xl font-poppins font-bold text-navy mb-4 md:mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm md:text-base text-gray-700">
                  Find quick answers to common questions about our services and support.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-l-4 border-teal">
                <h3 className="text-lg md:text-xl font-semibold text-navy mb-2 md:mb-3">What areas do you service?</h3>
                <p className="text-sm md:text-base text-gray-700">
                  We provide network integration services across the entire United States, with on-site support available in major metropolitan areas and remote support nationwide.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h3 className="text-lg md:text-xl font-semibold text-navy mb-2 md:mb-3">How quickly can you respond to service requests?</h3>
                <p className="text-sm md:text-base text-gray-700">
                  For our managed service clients, we offer response times as fast as 15 minutes for critical issues. Our standard response time for service requests is within 2-4 hours during business hours.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <h3 className="text-lg md:text-xl font-semibold text-navy mb-2 md:mb-3">Do you offer 24/7 support?</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Yes, we offer 24/7 emergency support for critical network issues. Our extended support packages provide round-the-clock monitoring and assistance for businesses that require continuous operation.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <h3 className="text-lg md:text-xl font-semibold text-navy mb-2 md:mb-3">What industries do you specialize in?</h3>
                <p className="text-sm md:text-base text-gray-700">
                  We have experience across multiple industries, with particular expertise in healthcare, financial services, manufacturing, education, and professional services. Our team understands the unique regulatory and operational requirements of these sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 