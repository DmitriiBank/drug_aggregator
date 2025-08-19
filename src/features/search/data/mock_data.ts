import type {Drug} from "../domain/Drug.ts";

export const mockDragSearchResult: Array<Drug> = [
    { id: "1", drugName: "Pain Reliever", price: 12.99, count: 30, storeId: "storeA" },
    { id: "2", drugName: "Cough Syrup", price: 8.49, count: 20, storeId: "storeB" },
    { id: "3", drugName: "Allergy Tablets", price: 15.25, count: 50, storeId: "storeA" },
    { id: "4", drugName: "Vitamin C", price: 10.00, count: 100, storeId: "storeC" },
    { id: "5", drugName: "Sleep Aid", price: 18.75, count: 40, storeId: "storeD" },
    { id: "6", drugName: "Antibiotic Cream", price: 7.30, count: 10, storeId: "storeB" },
    { id: "7", drugName: "Eye Drops", price: 5.99, count: 25, storeId: "storeC" },
    { id: "8", drugName: "Nasal Spray", price: 11.49, count: 15, storeId: "storeD" },
    { id: "9", drugName: "Antacid", price: 6.75, count: 60, storeId: "storeA" },
    { id: "10", drugName: "Multivitamin", price: 13.40, count: 90, storeId: "storeB" },
];

export const mockDragSearchWithFilterResult: Array<Drug> = [
    { id: "11", drugName: "Iron Supplement", price: 14.99, count: 45, storeId: "storeE" },
    { id: "12", drugName: "Anti-Inflammatory Gel", price: 9.50, count: 20, storeId: "storeF" },
    { id: "14", drugName: "Probiotic", price: 17.85, count: 60, storeId: "storeH" },
    { id: "13", drugName: "Cold & Flu Capsules", price: 13.20, count: 35, storeId: "storeG" },
    { id: "15", drugName: "Motion Sickness Patch", price: 7.99, count: 10, storeId: "storeE" },
    { id: "16", drugName: "Laxative Tablets", price: 6.40, count: 25, storeId: "storeF" },
    { id: "17", drugName: "Antiseptic Spray", price: 8.75, count: 15, storeId: "storeG" },
    { id: "18", drugName: "Heartburn Relief", price: 12.10, count: 30, storeId: "storeH" },
    { id: "19", drugName: "Children's Fever Syrup", price: 10.95, count: 50, storeId: "storeE" },
    { id: "20", drugName: "Omega-3 Capsules", price: 16.60, count: 100, storeId: "storeF" },
];
