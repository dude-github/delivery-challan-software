import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FileDown } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ChallanData } from '../types';
import { ChallanPDF } from './ChallanPDF';
import { CompanyDetailsForm } from './CompanyDetailsForm';
import { TransportDetailsForm } from './TransportDetailsForm';
import { ItemsTable } from './ItemsTable';
import { ChallanPreview } from './ChallanPreview';
import { defaultValues } from '../utils/defaultValues';

export function ChallanForm() {
  const { register, control, watch, setValue } = useForm<ChallanData>({
    defaultValues,
  });

  const itemsArray = useFieldArray({
    control,
    name: "items"
  });

  const formData = watch();

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
      <div className="space-y-6 lg:space-y-8 overflow-y-auto custom-scrollbar lg:pr-4 lg:h-[calc(100vh-8rem)]">
        <div className="flex justify-between items-center sticky top-0 bg-gray-50 z-10 py-4">
          <h1 className="text-xl sm:text-3xl font-bold text-gray-800">Delivery Challan</h1>
          <PDFDownloadLink
            document={<ChallanPDF data={formData} />}
            fileName="delivery-challan.pdf"
            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            {({ loading }) => (
              <>
                <FileDown className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">{loading ? 'Generating...' : 'Download PDF'}</span>
                <span className="sm:hidden">PDF</span>
              </>
            )}
          </PDFDownloadLink>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Challan No.</label>
            <input {...register('challanNo')} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" {...register('date')} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">PSD Order No.</label>
            <input {...register('psdOrderNumber')} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Work Order No.</label>
            <input {...register('workOrderNumber')} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Work Order Date</label>
            <input type="date" {...register('workOrderDate')} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Code</label>
            <input {...register('code')} className="mt-1 block w-full" />
          </div>
        </div>

        <CompanyDetailsForm register={register} setValue={setValue} prefix="from" title="From" />
        <CompanyDetailsForm register={register} setValue={setValue} prefix="to" title="To" />
        <ItemsTable register={register} itemsArray={itemsArray} watch={watch} />
        <TransportDetailsForm register={register} />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Delivery Terms</label>
            <textarea {...register('deliveryTerms')} rows={3} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Transit Insurance</label>
            <textarea {...register('transitInsurance')} rows={3} className="mt-1 block w-full" />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700">Authorized Signatory</label>
          <input {...register('authorizedSignatory')} className="mt-1 block w-full" />
        </div>
      </div>

      <div className="hidden lg:block sticky top-4 h-[calc(100vh-8rem)]">
        <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 p-4 border-b">Preview</h2>
          <div className="overflow-auto custom-scrollbar flex-1 p-4">
            <ChallanPreview data={formData} />
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 p-4 border-b">Preview</h2>
          <div className="p-4 overflow-x-auto">
            <ChallanPreview data={formData} />
          </div>
        </div>
      </div>
    </div>
  );
}