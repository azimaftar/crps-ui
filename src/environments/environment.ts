// src/environments/environment.ts
export const environment = {
    production: false,
    mockBranch: 'LHDN', // change to 'LHDN' or 'Kastam' or 'Others' for testing
    localDevBypassAuth: true, //guna true untuk bypass dashboard tanpa login netiq (untuk local dev sahaja)
    apiIdmBaseUrl: 'http://localhost:4200' // untuk local dev, guna localhost:8080
};

