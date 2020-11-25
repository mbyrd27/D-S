import { businessBook, nyBusinesses, manufacturers, purchAgents } from "./BusinessProvider.js"
import { Business } from "./Business.js"
import { PurchaseAgent } from "./PurchasingAgents.js"


const contentTarget = document.querySelector(".business")
const nyContent = document.querySelector(".businessList--newYork")
const manuContent = document.querySelector(".businessList--manufacturers")
const purchaseContent = document.querySelector(".businessList--purchAgents")

export const BusinessList = () => {
    const businessArray = businessBook()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach((businessObject) => {
        contentTarget.innerHTML += Business(businessObject)
    });
}

export const nyBusinessList = () => {
    const businessArray = nyBusinesses;
    nyContent.innerHTML = "<h1>New York Businesses</h1>"

    businessArray.forEach((businessObject) => {
        nyContent.innerHTML += Business(businessObject)
    });
}

export const manuBusinessList = () => {
    const businessArray = manufacturers;
    manuContent.innerHTML = "<h1>Manufacturing Businesses</h1>"

    businessArray.forEach((businessObject) => {
        manuContent.innerHTML += Business(businessObject)
    });
}

export const purchAgentList = () => {
    const purchAgentArr = purchAgents;
    purchaseContent.innerHTML = "<h1>Purchasing Agents</h1>"

    purchAgentArr.forEach((businessObject) => {
        purchaseContent.innerHTML += PurchaseAgent(businessObject)
    });
}