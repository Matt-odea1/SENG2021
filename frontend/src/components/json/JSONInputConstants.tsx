import { UBLInvoice } from "../../../../interface/interfaceTypes";
import template from "../../../../interface/jsonTemplate.json";

/**
 * Default invoice format for JSON input
 */
// @ts-ignore -- this is a valid UBLInvoice
export const DEFAULT_INVOICE_FORMAT = template as UBLInvoice;
/*
{
  ublExtensions: {
    extensionContent: "ExampleExtensionContent",
  },
  ublVersionID: "2.1",
  customizationID: "Customization123",
  profileID: "Profile123",
  profileExecutionID: "Execution123",
  id: "INV-12345",
  copyIndicator: true,
  uuid: "123e4567-e89b-12d3-a456-426614174000",
  issueDate: "2024-03-07",
  issueTime: "14:48:00",
  dueDate: "2024-04-06",
  invoiceTypeCode: "380",
  note: ["Note1", "Note2"],
  taxPointDate: "2024-03-08",
  documentCurrencyCode: "USD",
  taxCurrencyCode: "USD",
  pricingCurrencyCode: "USD",
  paymentCurrencyCode: "USD",
  paymentAlternativeCurrencyCode: "EUR",
  accountingCostCode: "AC123",
  accountingCost: "Project ABC",
  lineCountNumeric: "2",
  buyerReference: "BR123",
  invoicePeriod: [
    {
      startDate: "2024-03-01",
      endDate: "2024-03-31",
    },
  ],
  orderReference: {
    id: "Order-123",
  },
  billingReference: [
    {
      invoiceDocumentReference: {
        id: "BillingRef-1",
        issueDate: "2024-03-01",
      },
    },
  ],
  despatchDocumentReference: [
    {
      id: "DespatchRef-1",
      issueDate: "2024-03-02",
    },
  ],
  receiptDocumentReference: [
    {
      id: "ReceiptRef-1",
      issueDate: "2024-03-03",
    },
  ],
  statementDocumentReference: [
    {
      id: "StatementRef-1",
      issueDate: "2024-03-04",
    },
  ],
  originatorDocumentReference: [
    {
      id: "OriginatorRef-1",
      issueDate: "2024-03-05",
    },
  ],
  contractDocumentReference: [
    {
      id: "ContractRef-1",
      issueDate: "2024-03-06",
    },
  ],
  additionalDocumentReference: [
    {
      id: "AdditionalRef-1",
      issueDate: "2024-03-07",
    },
  ],
  projectReference: [
    {
      id: "Project-123",
    },
  ],
  signature: [
    {
      id: "Signature123",
      signatoryParty: {
        partyIdentification: [
          {
            id: "PartyID123",
          },
        ],
        partyName: {
          name: "Signatory Party Name",
        },
      },
      digitalSignatureAttachment: {
        externalReference: {
          uri: "SignatureURI",
        },
      },
    },
  ],
  accountingSupplierParty: {
    party: {
      partyName: {
        name: "Supplier Inc.",
      },
      postalAddress: {
        streetName: "Supplier Street",
        cityName: "Supplier City",
        postalZone: "1000",
        country: {
          identificationCode: "US",
        },
      },
      partyTaxScheme: {
        registrationName: "Supplier Tax Registration",
        companyID: "Supplier123",
        taxScheme: {
          id: "VAT",
        },
      },
      partyLegalEntity: {
        registrationName: "Supplier Inc.",
        companyID: "Supplier123",
      },
      contact: {
        telephone: "123456789",
        electronicMail: "supplier@example.com",
      },
    },
  },
  accountingCustomerParty: {
    party: {
      partyName: {
        name: "Customer LLC",
      },
      postalAddress: {
        streetName: "Customer Street",
        cityName: "Customer City",
        postalZone: "2000",
        country: {
          identificationCode: "US",
        },
      },
      partyTaxScheme: {
        registrationName: "Customer Tax Registration",
        companyID: "Customer456",
        taxScheme: {
          id: "VAT",
        },
      },
      partyLegalEntity: {
        registrationName: "Customer LLC",
        companyID: "Customer456",
      },
      contact: {
        telephone: "987654321",
        electronicMail: "customer@example.com",
      },
    },
  },
  payeeParty: {
    partyName: {
      name: "Payee Party",
    },
  },
  buyerCustomerParty: {
    partyName: {
      name: "Buyer Party",
    },
  },
  sellerSupplierParty: {
    partyName: {
      name: "Seller Party",
    },
  },
  taxRepresentativeParty: {
    partyName: {
      name: "Tax Representative Party",
    },
  },
  delivery: [
    {
      actualDeliveryDate: "2024-03-10",
      actualDeliveryTime: "14:00:00",
      deliveryAddress: {
        cityName: "Delivery City",
        country: {
          identificationCode: "US",
        },
      },
    },
  ],
  deliveryTerms: {
    id: "DAP",
    specialTerms: "Delivered at Place",
  },
  paymentMeans: [
    {
      paymentMeansCode: "30",
      paymentDueDate: "2024-04-06",
      paymentChannelCode: "Electronic Transfer",
      instructionNote: "Please pay by the due date",
    },
  ],
  paymentTerms: [
    {
      note: "30 days from invoice date",
    },
  ],
  prepaidPayment: [
    {
      paidAmount: "100.00",
      receivedDate: "2024-02-01",
    },
  ],
  allowanceCharge: [
    {
      chargeIndicator: false,
      allowanceChargeReason: "Bulk discount",
      amount: "50.00",
    },
  ],
  taxExchangeRate: {
    sourceCurrencyCode: "USD",
    targetCurrencyCode: "EUR",
    calculationRate: "0.88",
    date: "2024-03-07",
  },
  pricingExchangeRate: {
    sourceCurrencyCode: "USD",
    targetCurrencyCode: "EUR",
    calculationRate: "0.88",
    date: "2024-03-07",
  },
  paymentExchangeRate: {
    sourceCurrencyCode: "USD",
    targetCurrencyCode: "EUR",
    calculationRate: "0.88",
    date: "2024-03-07",
  },
  paymentAlternativeExchangeRate: {
    sourceCurrencyCode: "USD",
    targetCurrencyCode: "GBP",
    calculationRate: "0.75",
    date: "2024-03-07",
  },
  taxTotal: [
    {
      taxAmount: "75.00",
      taxSubtotal: [
        {
          taxableAmount: "500.00",
          taxAmount: "75.00",
          percent: "15.00",
          taxCategory: "Standard Rate",
          taxScheme: "VAT",
        },
      ],
    },
  ],
  withholdingTaxTotal: [
    {
      taxAmount: "25.00",
      taxSubtotal: [
        {
          taxableAmount: "500.00",
          taxAmount: "25.00",
          percent: "5.00",
          taxCategory: "Withholding",
          taxScheme: "Income Tax",
        },
      ],
    },
  ],
  legalMonetaryTotal: {
    lineExtensionAmount: "450.00",
    taxExclusiveAmount: "450.00",
    taxInclusiveAmount: "525.00",
    chargeTotalAmount: "20.00",
    prepaidAmount: "100.00",
    payableRoundingAmount: "0.00",
    payableAmount: "525.00",
  },
  invoiceLine: [
    {
      id: "1",
      invoicedQuantity: "5",
      lineExtensionAmount: "500.00",
      taxTotal: [
        {
          taxAmount: "75.00",
          taxSubtotal: [
            {
              taxableAmount: "500.00",
              taxAmount: "75.00",
              percent: "15.00",
              taxCategory: "Standard Rate",
              taxScheme: "VAT",
            },
          ],
        },
      ],
      item: {
        name: "Widget A",
        description: "A standard widget",
        sellersItemIdentification: {
          id: "WidgetA-123",
        },
      },
      price: {
        priceAmount: "100.00",
        baseQuantity: "1",
      },
    },
  ],
};
*/
