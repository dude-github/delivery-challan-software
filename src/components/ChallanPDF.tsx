import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { ChallanData } from '../types';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  col: {
    flex: 1,
  },
  label: {
    fontSize: 10,
    color: '#666',
    marginBottom: 2,
  },
  value: {
    fontSize: 12,
  },
  table: {
    marginTop: 20,
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tableCell: {
    padding: 8,
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
    borderLeftWidth: 1,
    borderLeftColor: '#e5e7eb',
  },
  srNo: { width: '8%' },
  description: { width: '25%' },
  hsnCode: { width: '10%' },
  quantity: { width: '10%' },
  uom: { width: '8%' },
  pricePerUnit: { width: '12%' },
  total: { width: '12%' },
  remarks: { width: '15%' },
  headerText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  cellText: {
    fontSize: 10,
  },
  footer: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#999',
    paddingTop: 10,
  },
  totalRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#f3f4f6',
  },
  companyInfo: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 4,
  },
});

interface Props {
  data: ChallanData;
}

export function ChallanPDF({ data }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Delivery Challan</Text>
          
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>Challan No.</Text>
              <Text style={styles.value}>{data.challanNo}</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Date</Text>
              <Text style={styles.value}>{new Date(data.date).toLocaleDateString()}</Text>
            </View>
          </View>
        </View>

        <View style={styles.companyInfo}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>From</Text>
              <Text style={styles.value}>{data.from.name}</Text>
              <Text style={styles.value}>{data.from.address}</Text>
              <Text style={styles.value}>GSTIN: {data.from.gstin}</Text>
              <Text style={styles.value}>Contact: {data.from.contactPerson}</Text>
              <Text style={styles.value}>Phone: {data.from.contactNumber}</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>To</Text>
              <Text style={styles.value}>{data.to.name}</Text>
              <Text style={styles.value}>{data.to.address}</Text>
              <Text style={styles.value}>GSTIN: {data.to.gstin}</Text>
              <Text style={styles.value}>Contact: {data.to.contactPerson}</Text>
              <Text style={styles.value}>Phone: {data.to.contactNumber}</Text>
            </View>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={[styles.tableCell, styles.srNo]}>
              <Text style={styles.headerText}>Sr. No.</Text>
            </View>
            <View style={[styles.tableCell, styles.description]}>
              <Text style={styles.headerText}>Description</Text>
            </View>
            <View style={[styles.tableCell, styles.hsnCode]}>
              <Text style={styles.headerText}>HSN Code</Text>
            </View>
            <View style={[styles.tableCell, styles.quantity]}>
              <Text style={styles.headerText}>Quantity</Text>
            </View>
            <View style={[styles.tableCell, styles.uom]}>
              <Text style={styles.headerText}>UOM</Text>
            </View>
            <View style={[styles.tableCell, styles.pricePerUnit]}>
              <Text style={styles.headerText}>Price/Unit</Text>
            </View>
            <View style={[styles.tableCell, styles.total]}>
              <Text style={styles.headerText}>Total</Text>
            </View>
            <View style={[styles.tableCell, styles.remarks]}>
              <Text style={styles.headerText}>Remarks</Text>
            </View>
          </View>
          
          {data.items.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCell, styles.srNo]}>
                <Text style={styles.cellText}>{index + 1}</Text>
              </View>
              <View style={[styles.tableCell, styles.description]}>
                <Text style={styles.cellText}>{item.description}</Text>
              </View>
              <View style={[styles.tableCell, styles.hsnCode]}>
                <Text style={styles.cellText}>{item.hsnCode}</Text>
              </View>
              <View style={[styles.tableCell, styles.quantity]}>
                <Text style={styles.cellText}>{item.quantity}</Text>
              </View>
              <View style={[styles.tableCell, styles.uom]}>
                <Text style={styles.cellText}>{item.uom}</Text>
              </View>
              <View style={[styles.tableCell, styles.pricePerUnit]}>
                <Text style={styles.cellText}>₹ {item.pricePerUnit?.toFixed(2)}</Text>
              </View>
              <View style={[styles.tableCell, styles.total]}>
                <Text style={styles.cellText}>₹ {item.totalPrice?.toFixed(2)}</Text>
              </View>
              <View style={[styles.tableCell, styles.remarks]}>
                <Text style={styles.cellText}>{item.remarks}</Text>
              </View>
            </View>
          ))}

          <View style={styles.totalRow}>
            <View style={[styles.tableCell, { width: '73%' }]}>
              <Text style={styles.headerText}>Total Amount</Text>
            </View>
            <View style={[styles.tableCell, { width: '27%' }]}>
              <Text style={styles.headerText}>₹ {data.items.reduce((sum, item) => sum + (item.totalPrice || 0), 0).toFixed(2)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Transport Details</Text>
            <Text style={styles.value}>Name: {data.transport.name}</Text>
            <Text style={styles.value}>GSTIN: {data.transport.gstin}</Text>
            <Text style={styles.value}>Vehicle: {data.transport.vehicleType} - {data.transport.vehicleNumber}</Text>
            <Text style={styles.value}>LR No: {data.transport.lrNo}</Text>
            <Text style={styles.value}>E-Way Bill: {data.transport.eWayBillNumber}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.label}>Authorized Signatory</Text>
          <Text style={styles.value}>{data.authorizedSignatory}</Text>
          <Text style={styles.value}>For {data.from.name}</Text>
        </View>
      </Page>
    </Document>
  );
}