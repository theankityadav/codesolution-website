import Container from "@/components/ui/Container";

export default function PrivacyPage() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you fill out 
              our contact form, request a quote, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Name and contact information</li>
              <li>Company name and details</li>
              <li>Project requirements and descriptions</li>
              <li>Budget and timeline preferences</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Send you relevant updates (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to 
              third parties. We may share information with trusted service providers who 
              assist us in operating our website and conducting our business.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@codesolution.com" className="text-blue-600 hover:underline">
                hello@codesolution.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
