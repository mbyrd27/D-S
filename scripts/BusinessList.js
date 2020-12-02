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

/* TO SEARCH BY COMPANY

const companySearchResultArticle = document.querySelector('.foundCompanies');

document
    .querySelector('#companySearch')
    .addEventListener('keypress', keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            let businesses = businessBook();
            console.log(businesses)
            const foundBusiness = businesses.find(business => {
                return business.companyName.includes(keyPressEvent.target.value);
            })

            companySearchResultArticle.innerHTML = `<section>
            <h2>${foundBusiness.companyName}</h2>
            <div>${foundBusiness.addressFullStreet}</div>
            <div>${foundBusiness.addressCity},
                 ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}
            </div>`;
        }
    });

*/

// TO SEARCH BY PURCHASING AGENT //

const companySearchResultArticle = document.querySelector('.foundAgents');

document
    .querySelector('#companySearch')
    .addEventListener('keypress', keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            let agents = purchAgents;
            console.log(agents)
            const foundAgents = agents.find(agent => {
                return agent.fullName.includes(keyPressEvent.target.value);
            })

            companySearchResultArticle.innerHTML = `<section>
            <h2>${foundAgents.fullName}</h2>
            <div>${foundAgents.company}</div>
            <div>${foundAgents.phoneNumber}</div>
            `;
        }
    });