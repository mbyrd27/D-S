export const PurchaseAgent = (businessObject) => {
    return `
    <div class="purchasingAgent">
        <h2 class="purchasingAgent--name">${businessObject.fullName}</h2>
        <h4 class="purchasingAgent--company">${businessObject.company}</h4>
        <h4 class="purchasingAgent--phone">${businessObject.phoneNumber}</h4>
    </div>
    `
}