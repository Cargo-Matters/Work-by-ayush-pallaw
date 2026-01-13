export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-10 py-20">
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Cargo Matters</h3>
          <p>
            Leading logistics company providing comprehensive shipping solutions.
          </p>
        </div>

        <div>
          <h4 className="text-white mb-3">Services</h4>
          <p>E-commerce • Green Logistics • Supply Chain</p>
        </div>

        <div>
          <h4 className="text-white mb-3">Company</h4>
          <p>About Us • Careers</p>
        </div>
      </div>

      <p className="text-center mt-14 text-gray-600">
        © 2025 Cargo Matters. All rights reserved.
      </p>
    </footer>
  );
}
