import React from 'react';
import { Truck } from 'lucide-react';
import { ChallanForm } from './components/ChallanForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Delivery Challan Generator</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-4 sm:py-8 sm:px-6 lg:px-8">
        <ChallanForm />
      </main>

      <footer className="bg-white border-t mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Delivery Challan Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;