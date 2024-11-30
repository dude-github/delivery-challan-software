import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ChallanData } from '../types';

interface Props {
  register: UseFormRegister<ChallanData>;
}

export function TransportDetailsForm({ register }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Transport Details</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Transporter Name</label>
          <input
            {...register('transport.name')}
            className="mt-1 block w-full"
            placeholder="Enter transporter name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Transporter GSTIN</label>
          <input
            {...register('transport.gstin')}
            className="mt-1 block w-full"
            placeholder="Enter GSTIN"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
          <select
            {...register('transport.vehicleType')}
            className="mt-1 block w-full"
          >
            <option value="">Select Type</option>
            <option value="truck">Truck</option>
            <option value="tempo">Tempo</option>
            <option value="container">Container</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Vehicle Number</label>
          <input
            {...register('transport.vehicleNumber')}
            className="mt-1 block w-full"
            placeholder="Enter vehicle number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">LR No.</label>
          <input
            {...register('transport.lrNo')}
            className="mt-1 block w-full"
            placeholder="Enter LR number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">LR Date</label>
          <input
            type="date"
            {...register('transport.lrDate')}
            className="mt-1 block w-full"
          />
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700">E-Way Bill Number</label>
          <input
            {...register('transport.eWayBillNumber')}
            className="mt-1 block w-full"
            placeholder="Enter e-way bill number"
          />
        </div>
      </div>
    </div>
  );
}