import privacy from '../assets/images/privacy.png'

const PrivacyPolicy = () => {
  return (
    <div>
        <div className="w-full">
  <img
    src={privacy}
    alt="Privacy Policy"
    className="w-full h-64 md:h-96 lg:h-[100vh] object-cover rounded-lg"
  />
</div>
            
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-screen-xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Privacy Policy — North South Group
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Last Updated: <span className="font-semibold">[Insert Date]</span>
        </p>

        {/* Section Wrapper */}
        <div className="space-y-8 text-gray-700 leading-relaxed">

          {/* Consent */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Consent</h2>
            <p>
              By using our website, you consent to our privacy policy and agree to its terms.
            </p>
          </section>

          {/* Info We Collect */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
            <p>
              We collect personal information only when necessary. You will always know why we need it.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Address</li>
              <li>Message details or attachments you submit</li>
            </ul>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6">
              <li>Operate and maintain our website</li>
              <li>Improve and personalize user experience</li>
              <li>Analyze website usage</li>
              <li>Develop new features and services</li>
              <li>Communicate with you</li>
              <li>Send updates and emails</li>
              <li>Prevent fraud</li>
            </ul>
          </section>

          {/* Log Files */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Log Files</h2>
            <p>
              We use standard log files, which may collect information such as IP address, browser type,
              ISP, time stamps, referring pages, and click data. This data is not personally identifiable.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Cookies and Web Beacons</h2>
            <p>
              Our website uses cookies to store visitor preferences and improve user experience.
            </p>
          </section>

          {/* Third party */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Third-Party Privacy Policies</h2>
            <p>
              Our privacy policy does not apply to third-party advertisers or external websites.
              Please review their policies for more details.
            </p>
          </section>

          {/* CCPA */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">7. CCPA Privacy Rights</h2>
            <p>California consumers have rights to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Request disclosure of collected personal data</li>
              <li>Request deletion of personal data</li>
              <li>Opt-out of the sale of personal data</li>
            </ul>
          </section>

          {/* GDPR */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">8. GDPR Data Protection Rights</h2>
            <p>You have the following rights:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Right to access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restrict processing</li>
              <li>Right to object</li>
              <li>Right to data portability</li>
            </ul>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Children’s Information</h2>
            <p>
              We do not knowingly collect information from children under 13.
              If you believe your child provided such information, please contact us.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this policy occasionally and will post any changes on this page.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
            <p>If you have any questions, feel free to contact us.</p>
            <p className="mt-2">
              📧 <strong>Email:</strong> info@northsouthgroup.com  
              <br />
              🌐 <strong>Website:</strong> www.northsouthgroup.com
            </p>
          </section>

        </div>
      </div>
    </div>
                </div>
  )
}

export default PrivacyPolicy