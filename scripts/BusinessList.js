import { businessBook, nyBusinesses, manufacturers } from "./BusinessProvider.js"
import { Business } from "./Business.js"


const contentTarget = document.querySelector(".business")
const nyContent = document.querySelector(".businessList--newYork")
const manuContent = document.querySelector(".businessList--manufacturers")

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