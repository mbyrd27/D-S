import { businessBook } from "./BusinessProvider.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".business")

export const BusinessList = () => {
    const businessArray = businessBook()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach((businessObject) => {
        contentTarget.innerHTML += Business(businessObject)
    });
}