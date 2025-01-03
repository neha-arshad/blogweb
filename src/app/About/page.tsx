import React from "react";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto p-8 bg-white shadow-xl rounded-xl">
      {/* About Our Tech Section */}
      <div className="text-center mb-12">
        <h1 className="text-purple-300 font-serif font-bold text-xl">
          Welcome to my blog!{" "}
        </h1>
        <h1 className="mt-5 text-5xl font-extrabold font-poppins text-gray-900 mb-6 tracking-tight">
          About Our Tech
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          At Tech Innovators we are dedicated to pushing the boundaries of
          technology and delivering innovative solutions that empower businesses
          and individuals alike. Our mission is to harness the power of
          technology to create a better future for everyone.
        </p>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Core Values Section - Left Side */}
        <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold font-roboto  underline text-gray-800 mb-6 text-center">
            Our Core Values
          </h2>
          <ul className="list-inside space-y-6 text-lg text-gray-700">
            <li>
              <strong className="text-gray-800">Innovation:</strong> We believe
              in continuous improvement and embracing new ideas to stay ahead in
              the tech landscape.
            </li>
            <li>
              <strong className="text-gray-800">Integrity:</strong> We uphold
              the highest standards of integrity in all our actions and
              relationships.
            </li>
            <li>
              <strong className="text-gray-800">Collaboration:</strong> We work
              together with our clients and partners to achieve common goals and
              drive success.
            </li>
            <li>
              <strong className="text-gray-800">Excellence:</strong> We strive
              for excellence in everything we do, from our products to our
              customer service.
            </li>
          </ul>
        </div>

        {/* Technologies We Work With Section - Right Side */}
        <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold font-roboto underline text-gray-800 mb-6 text-center">
            Technologies We Work With
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Our team is proficient in a wide range of technologies, including:
          </p>
          <ul className="list-inside space-y-4 text-lg text-gray-700">
            <li>
              <strong className="text-gray-800">Web Development:</strong> React,
              Next.js, Angular, Vue.js
            </li>
            <li>
              <strong className="text-gray-800">Backend Development:</strong>{" "}
              Node.js, TypeScript, Python, Ruby on Rails
            </li>
            <li>
              <strong className="text-gray-800">Mobile Development:</strong>{" "}
              React Native, Flutter
            </li>
            <li>
              <strong className="text-gray-800">Cloud Services:</strong> AWS,
              Azure, Google Cloud
            </li>
            <li>
              <strong className="text-gray-800">Data Science:</strong> Machine
              Learning, AI, Data Analytics
            </li>
          </ul>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold font-poppins text-gray-800 mb-6">
          Join Us on Our Journey
        </h2>
        <p className=" text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are always looking for passionate individuals to join our team. If
          you share our vision and values, we would love to hear from you!
          Connect with us to start a meaningful journey.
        </p>
      </div>
    </section>
  );
};

export default About;
