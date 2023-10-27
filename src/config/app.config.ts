interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Store Manager'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View company information', 'View outlet information', 'Rent tools', 'View invoices'],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage outlet information',
    'Manage tool inventory',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a686d501-cd59-45d9-9334-194c95a64026',
};
