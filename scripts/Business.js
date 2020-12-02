export const Business = (businessObject) => {
    return `
    <div class="business">
        <h2 class="business__name">${businessObject.companyName}</h2>
        <div class="business__addr">${businessObject.addressFullStreet}</div>
        <div class="business__location">
        ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
        </div>
    </div> 
    `
}