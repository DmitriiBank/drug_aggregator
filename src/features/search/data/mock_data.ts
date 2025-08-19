import type {Drug} from "../domain/Drug.ts";

export const mockDragSearchResult: Array<Drug> = [
    { id: "1", drugName: "Pain Reliever", price: 12.99, count: 30, storeId: "storeA", description: "Pain relief medicine for mild to moderate pain" },
    { id: "2", drugName: "Cough Syrup", price: 8.49, count: 20, storeId: "storeB", description: "Syrup for easing cough and cold symptoms" },
    { id: "3", drugName: "Allergy Tablets", price: 15.25, count: 50, storeId: "storeA", description: "Tablets for allergy relief, reducing itching and runny nose" },
    { id: "4", drugName: "Vitamin C", price: 10.00, count: 100, storeId: "storeC", description: "Vitamin C supplement to support the immune system" },
    { id: "5", drugName: "Sleep Aid", price: 18.75, count: 40, storeId: "storeD", description: "Helps improve sleep quality" },
    { id: "6", drugName: "Antibiotic Cream", price: 7.30, count: 10, storeId: "storeB", description: "Topical cream for minor cuts and skin infections" },
    { id: "7", drugName: "Eye Drops", price: 5.99, count: 25, storeId: "storeC", description: "Eye drops for dryness and irritation relief" },
    { id: "8", drugName: "Nasal Spray", price: 11.49, count: 15, storeId: "storeD", description: "Spray to relieve nasal congestion and allergies" },
    { id: "9", drugName: "Antacid", price: 6.75, count: 60, storeId: "storeA", description: "Antacid for heartburn and stomach discomfort" },
    { id: "10", drugName: "Multivitamin", price: 13.40, count: 90, storeId: "storeB", description: "Daily multivitamin supplement for overall health" },
];

export const mockDragSearchWithFilterResult: Array<Drug> = [
    { id: "11", drugName: "Iron Supplement", price: 14.99, count: 45, storeId: "storeE", description: "Iron supplement to help prevent anemia" },
    { id: "12", drugName: "Anti-Inflammatory Gel", price: 9.50, count: 20, storeId: "storeF", description: "Gel for reducing inflammation and muscle pain" },
    { id: "14", drugName: "Probiotic", price: 17.85, count: 60, storeId: "storeH", description: "Probiotic supplement for digestion and gut health" },
    { id: "13", drugName: "Cold & Flu Capsules", price: 13.20, count: 35, storeId: "storeG", description: "Capsules to relieve cold and flu symptoms" },
    { id: "15", drugName: "Motion Sickness Patch", price: 7.99, count: 10, storeId: "storeE", description: "Patch to prevent motion sickness while traveling" },
    { id: "16", drugName: "Laxative Tablets", price: 6.40, count: 25, storeId: "storeF", description: "Tablets for occasional constipation relief" },
    { id: "17", drugName: "Antiseptic Spray", price: 8.75, count: 15, storeId: "storeG", description: "Spray for disinfecting cuts and minor wounds" },
    { id: "18", drugName: "Heartburn Relief", price: 12.10, count: 30, storeId: "storeH", description: "Medicine for heartburn and acid reflux relief" },
    { id: "19", drugName: "Children's Fever Syrup", price: 10.95, count: 50, storeId: "storeE", description: "Syrup to reduce fever in children" },
    { id: "20", drugName: "Omega-3 Capsules", price: 16.60, count: 100, storeId: "storeF", description: "Omega-3 supplement for heart and brain health" },
];
