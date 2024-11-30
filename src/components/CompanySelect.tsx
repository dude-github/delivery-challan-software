import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Company, companies } from '../data/companies';
import { CompanyDetails } from '../types';

interface Props {
  onSelect: (company: CompanyDetails) => void;
}

export function CompanySelect({ onSelect }: Props) {
  const handleSelect = (company: Company) => {
    onSelect({
      name: company.name,
      address: company.address,
      gstin: company.gstin,
      contactPerson: company.contactPerson,
      contactNumber: company.contactNumber,
      email: company.email
    });
  };

  return (
    <div className="relative inline-block text-left">
      <div className="group">
        <button
          type="button"
          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Select Company
          <ChevronDown className="w-4 h-4 ml-2" />
        </button>
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none invisible group-hover:visible">
          <div className="py-1">
            {companies.map((company) => (
              <button
                key={company.id}
                type="button"
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
                onClick={() => handleSelect(company)}
              >
                {company.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}