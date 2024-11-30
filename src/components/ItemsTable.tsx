import React from 'react';
import { UseFieldArrayReturn, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';
import { ChallanData } from '../types';

interface Props {
  register: UseFormRegister<ChallanData>;
  itemsArray: UseFieldArrayReturn<ChallanData, 'items'>;
  watch: UseFormWatch<ChallanData>;
}

export function ItemsTable({ register, itemsArray, watch }: Props) {
  const { fields, append, remove } = itemsArray;
  const items = watch('items') || [];

  const calculateTotal = (quantity: number, pricePerUnit: number) => {
    return (quantity || 0) * (pricePerUnit || 0);
  };

  const calculateGrandTotal = () => {
    return items.reduce((sum, item) => {
      const total = calculateTotal(item.quantity || 0, item.pricePerUnit || 0);
      return sum + total;
    }, 0);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-gray-50 z-20 py-4">
        <h2 className="text-lg font-semibold text-gray-800">Items</h2>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <p className="text-sm text-gray-600 flex-1 sm:flex-none">Scroll horizontally to view all columns</p>
          <button
            type="button"
            onClick={() => append({
              id: crypto.randomUUID(),
              srNo: fields.length + 1,
              description: '',
              quantity: 0,
              unit: 'pcs',
              remarks: '',
              hsnCode: '',
              uom: '',
              pricePerUnit: 0,
              totalPrice: 0
            })}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
          >
            <Plus className="w-4 h-4 mr-1" /> Add Item
          </button>
        </div>
      </div>

      <div className="relative border rounded-lg shadow">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full border-collapse" style={{ minWidth: '1000px' }}>
            <thead className="bg-gray-50">
              <tr>
                <th className="sticky top-0 z-10 border-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[60px] bg-gray-50">Sr. No.</th>
                <th className="sticky top-0 z-10 border-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[250px] bg-gray-50">Description</th>
                <th className="sticky top-0 z-10 border-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[120px] bg-gray-50">HSN Code</th>
                <th className="sticky top-0 z-10 border-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px] bg-gray-50">Quantity</th>
                <th className="sticky top-0 z-10 border-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px] bg-gray-50">UOM</th>
                <th className="sticky top-0 z-10 border-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[120px] bg-gray-50">Price/Unit</th>
                <th className="sticky top-0 z-10 border-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[120px] bg-gray-50">Total</th>
                <th className="sticky top-0 z-10 border-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[200px] bg-gray-50">Remarks</th>
                <th className="sticky top-0 z-10 border-2 border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[70px] bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {fields.map((field, index) => {
                const quantity = Number(watch(`items.${index}.quantity`)) || 0;
                const pricePerUnit = Number(watch(`items.${index}.pricePerUnit`)) || 0;
                const total = calculateTotal(quantity, pricePerUnit);

                return (
                  <tr key={field.id}>
                    <td className="border-2 border-gray-200 px-4 py-2 text-sm">{index + 1}</td>
                    <td className="border-2 border-gray-200 px-4 py-2">
                      <input
                        {...register(`items.${index}.description`)}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="border-2 border-gray-200 px-4 py-2">
                      <input
                        {...register(`items.${index}.hsnCode`)}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="border-2 border-gray-200 px-4 py-2">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        {...register(`items.${index}.quantity`, {
                          valueAsNumber: true,
                          onChange: (e) => {
                            const newTotal = calculateTotal(Number(e.target.value), pricePerUnit);
                            register(`items.${index}.totalPrice`).onChange({ target: { value: newTotal } });
                          }
                        })}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="border-2 border-gray-200 px-4 py-2">
                      <input
                        {...register(`items.${index}.uom`)}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="border-2 border-gray-200 px-4 py-2">
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        {...register(`items.${index}.pricePerUnit`, {
                          valueAsNumber: true,
                          onChange: (e) => {
                            const newTotal = calculateTotal(quantity, Number(e.target.value));
                            register(`items.${index}.totalPrice`).onChange({ target: { value: newTotal } });
                          }
                        })}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="border-2 border-gray-200 px-4 py-2">
                      <input
                        type="number"
                        step="0.01"
                        {...register(`items.${index}.totalPrice`)}
                        value={total.toFixed(2)}
                        readOnly
                        className="w-full px-2 py-1 border rounded bg-gray-50"
                      />
                    </td>
                    <td className="border-2 border-gray-200 px-4 py-2">
                      <input
                        {...register(`items.${index}.remarks`)}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="border-2 border-gray-200 px-4 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td colSpan={6} className="border-2 border-gray-200 px-4 py-2 text-right font-semibold">Total Amount:</td>
                <td className="border-2 border-gray-200 px-4 py-2 font-semibold">₹ {calculateGrandTotal().toFixed(2)}</td>
                <td colSpan={2} className="border-2 border-gray-200"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}