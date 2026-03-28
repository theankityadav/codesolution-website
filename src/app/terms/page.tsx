import Container from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-6">
              By accessing and using the CodeSolution website, you accept and agree to be 
              bound by these Terms of Service. If you do not agree to these terms, please 
              do not use our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. Services
            </h2>
            <p className="text-gray-600 mb-6">
              CodeSolution provides digital technology services including but not limited to 
              UI/UX design, web development, backend development, and custom software solutions. 
              Specific terms for individual projects will be outlined in separate agreements.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-gray-600 mb-6">
              All content on this website, including text, graphics, logos, and images, is 
              the property of CodeSolution and is protected by intellectual property laws. 
              You may not reproduce, distribute, or create derivative works without our 
              written permission.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. User Responsibilities
            </h2>
            <p className="text-gray-600 mb-4">
              When using our website, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide accurate information in forms and communications</li>
              <li>Not engage in any unlawful or harmful activities</li>
              <li>Not attempt to interfere with the website&apos;s functionality</li>
              <li>Respect the intellectual property rights of others</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-6">
              CodeSolution shall not be liable for any indirect, incidental, special, or 
              consequential damages arising from your use of our website or services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. Changes to Terms
            </h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Changes will be 
              effective immediately upon posting to the website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. Contact
            </h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms of Service, please contact us at{" "}
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
