import React from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { ChallanData } from '../types';
import { CompanySelect } from './CompanySelect';

interface Props {
  register: UseFormRegister<ChallanData>;
  setValue: UseFormSetValue<ChallanData>;
  prefix: 'from' | 'to';
  title: string;
}

export function CompanyDetailsForm({ register, setValue, prefix, title }: Props) {
  const handleCompanySelect = (company: ChallanData['from']) => {
    setValue(`${prefix}.name`, company.name);
    setValue(`${prefix}.address`, company.address);
    setValue(`${prefix}.gstin`, company.gstin);
    setValue(`${prefix}.contactPerson`, company.contactPerson);
    setValue(`${prefix}.contactNumber`, company.contactNumber);
    setValue(`${prefix}.email`, company.email);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <CompanySelect onSelect={handleCompanySelect} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            {...register(`${prefix}.name` as const)}
            className="mt-1 block w-full"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            {...register(`${prefix}.address` as const)}
            rows={3}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">GSTIN</label>
          <input
            {...register(`${prefix}.gstin` as const)}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Person</label>
          <input
            {...register(`${prefix}.contactPerson` as const)}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="tel"
            {...register(`${prefix}.contactNumber` as const)}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register(`${prefix}.email` as const)}
            className="mt-1 block w-full"
          />
        </div>
      </div>
    </div>
  );
}