// import {customerDocumentsResponseModel} from 
import { customerDocumentsResponseModel } from "../validators"

const parseCustomerDocumentsResponse = (response) => {
    const { error: customerDocumentsResponseError, value: customerDocumentsResponseValue } = customerDocumentsResponseModel.validate(response.data, { allowUnknown: true, stripUnknown: true })

    if (customerDocumentsResponseError !== undefined) {
        return []
    }

    return customerDocumentsResponseValue.documents.map(item => ({
        documentName: item.filename,
        documentId: item.dmscode,
        documentType: item.documenttype,
        createdOn: item.utmillis,
        status: item.processingstatus.code,
    }))
}

export { parseCustomerDocumentsResponse }