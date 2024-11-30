import React from 'react';
import { ChallanData } from '../types';

interface Props {
  data: ChallanData;
}

export function ChallanPreview({ data }: Props) {
  const totalAmount = data.items.reduce((sum, item) => sum + (item.totalPrice || 0), 0);

  return (
    <div className="bg-white p-4 sm:p-6 text-sm">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">DELIVERY CHALLAN</h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <div className="space-y-1">
          <p><strong>Challan No:</strong> {data.challanNo}</p>
          <p><strong>Date:</strong> {data.date}</p>
          <p><strong>PSD Order No:</strong> {data.psdOrderNumber}</p>
        </div>
        <div className="space-y-1">
          <p><strong>Work Order No:</strong> {data.workOrderNumber}</p>
          <p><strong>Work Order Date:</strong> {data.workOrderDate}</p>
          <p><strong>Code:</strong> {data.code}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <div className="border p-3 rounded space-y-1">
          <h3 className="font-bold mb-2">From:</h3>
          <p>{data.from.name}</p>
          <p className="whitespace-pre-wrap">{data.from.address}</p>
          <p>GSTIN: {data.from.gstin}</p>
          <p>Contact: {data.from.contactPerson}</p>
          <p>Phone: {data.from.contactNumber}</p>
          <p>Email: {data.from.email}</p>
        </div>
        <div className="border p-3 rounded space-y-1">
          <h3 className="font-bold mb-2">To:</h3>
          <p>{data.to.name}</p>
          <p className="whitespace-pre-wrap">{data.to.address}</p>
          <p>GSTIN: {data.to.gstin}</p>
          <p>Contact: {data.to.contactPerson}</p>
          <p>Phone: {data.to.contactNumber}</p>
          <p>Email: {data.to.email}</p>
        </div>
      </div>

      <div className="overflow-x-auto mb-6 -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr. No.</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HSN</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UOM</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price/Unit</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.items.map((item, index) => (
                <tr key={item.id}>
                  <td className="px-3 py-2 whitespace-nowrap">{index + 1}</td>
                  <td className="px-3 py-2">{item.description}</td>
                  <td className="px-3 py-2">{item.hsnCode}</td>
                  <td className="px-3 py-2">{item.quantity}</td>
                  <td className="px-3 py-2">{item.uom}</td>
                  <td className="px-3 py-2">₹ {item.pricePerUnit?.toFixed(2)}</td>
                  <td className="px-3 py-2">₹ {item.totalPrice?.toFixed(2)}</td>
                  <td className="px-3 py-2">{item.remarks}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 font-semibold">
                <td colSpan={6} className="px-3 py-2 text-right">Total Amount:</td>
                <td className="px-3 py-2">₹ {totalAmount.toFixed(2)}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <div className="space-y-1">
          <h3 className="font-bold mb-2">Transport Details:</h3>
          <p>Transporter: {data.transport.name}</p>
          <p>GSTIN: {data.transport.gstin}</p>
          <p>Vehicle: {data.transport.vehicleType} - {data.transport.vehicleNumber}</p>
          <p>LR No: {data.transport.lrNo} (Date: {data.transport.lrDate})</p>
          <p>E-Way Bill: {data.transport.eWayBillNumber}</p>
        </div>
        <div className="space-y-1">
          <h3 className="font-bold mb-2">Additional Details:</h3>
          <p className="whitespace-pre-wrap">Delivery Terms: {data.deliveryTerms}</p>
          <p className="whitespace-pre-wrap">Transit Insurance: {data.transitInsurance}</p>
        </div>
      </div>

      <div className="text-right mt-8">
        <p className="font-bold">For {data.from.name}</p>
        <p className="mt-12">{data.authorizedSignatory}</p>
        <p className="text-sm text-gray-600">Authorized Signatory</p>
      </div>
    </div>
  );
}