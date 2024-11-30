export interface Company {
  id: string;
  name: string;
  address: string;
  gstin: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
}

export const companies: Company[] = [
  {
    id: '1',
    name: 'Tech Solutions Ltd.',
    address: '123 Tech Park, Silicon Valley, CA 94025',
    gstin: '29ABCDE1234F1Z5',
    contactPerson: 'John Smith',
    contactNumber: '+1 (555) 123-4567',
    email: 'john.smith@techsolutions.com'
  },
  {
    id: '2',
    name: 'Global Industries Inc.',
    address: '456 Industrial Ave, Chicago, IL 60601',
    gstin: '24FGHIJ5678K2Y6',
    contactPerson: 'Sarah Johnson',
    contactNumber: '+1 (555) 987-6543',
    email: 'sarah.j@globalind.com'
  },
  {
    id: '3',
    name: 'Innovative Manufacturing Co.',
    address: '789 Innovation Drive, Boston, MA 02108',
    gstin: '27KLMNO9012P3X7',
    contactPerson: 'Michael Brown',
    contactNumber: '+1 (555) 456-7890',
    email: 'm.brown@innovative.com'
  }
];