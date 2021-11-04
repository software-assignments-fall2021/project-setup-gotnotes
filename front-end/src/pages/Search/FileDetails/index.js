import React from 'react'


//third party components
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer'

//components
import CommentViewer from '../../../components/Mobile/CommentViewer'
import { MessageInput } from '../../../components/Mobile/MessageInput'
import PageTitle from '../../../components/Mobile/PageTitle'


export const FileDetails = ({ props }) => {

    //later this data will be dynamically generated

    const docs = [
        {
            uri: "http://localhost:3000/lorem.pdf"
        },
    ]

    const title = "lorem.pdf"

    //turns out this library uses an external service for viewing microsoft documents, and cannot read local documents,
    //so whenever a document is needed to be read, we will provide the actual storage url of the file from our api
    //in the docs array above...
    return (
        <div className="page-container">
            <PageTitle props={{title, back:true}}/>
            <div className="file-details-container">
                <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
                <CommentViewer />
                <MessageInput />
            </div>

        </div>
    )
}