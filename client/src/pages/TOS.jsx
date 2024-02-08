import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-lg mb-4">
        By using the Zip~Link URL shortening service, you agree to comply with and be bound by the
        following terms and conditions. Please read these terms carefully before using our
        services.
      </p>
      <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
      <p className="text-lg mb-4">
        By accessing or using the Zip~Link service, you agree to be bound by these Terms of Service.
        If you do not agree with any part of these terms, you may not use our services.
      </p>
      <h2 className="text-2xl font-bold mb-3">2. URL Shortening</h2>
      <p className="text-lg mb-4">
        Zip~Link provides a URL shortening service for personal and non-commercial use. Users are
        solely responsible for the content they link to using our service.
      </p>
      <h2 className="text-2xl font-bold mb-3">3. Analytics and Privacy</h2>
      <p className="text-lg mb-4">
        Zip~Link may collect and analyze data related to the usage of shortened links for
        analytics purposes. We respect user privacy and do not share personally identifiable
        information with third parties.
      </p>
      <h2 className="text-2xl font-bold mb-3">4. Prohibited Activities</h2>
      <p className="text-lg mb-4">
        Users are prohibited from using the Zip~Link service for any illegal or unauthorized
        purpose. This includes but is not limited to activities such as spamming, phishing, or
        distributing malicious content.
      </p>
      <h2 className="text-2xl font-bold mb-3">5. Modifications to Terms</h2>
      <p className="text-lg mb-4">
        Zip~Link reserves the right to modify or replace these Terms of Service at any time. Users
        will be notified of significant changes, and continued use of the service constitutes
        acceptance of the modified terms.
      </p>
      <p className="text-lg mb-4">
        For any questions or concerns regarding these terms, please contact us at
        support@ziplink.com.
      </p>
    </div>
  );
};

export default TermsOfService;
