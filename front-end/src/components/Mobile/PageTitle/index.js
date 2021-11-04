import React from 'react'
import { useHistory } from 'react-router-dom'

//icons
import { MoreHorizIcon, ArrowBackIosNew } from '@mui/icons-material';

//styles
import './styles.scss'

const PageTitle = ({ props }) => {
    const { title, options, back } = props;

    const history = useHistory();


    return (
        <div className="page-title-container">
            {back ? (
                <div className="back-button" onClick={() => history.goBack()}>
                    <ArrowBackIosNew fontSize="large"/>
                </div>
            ) : (
                <div className="back-button">

                </div>
            )}
            <div className="page-title">
                <span className="title-text">
                    {title}
                </span>

            </div>
            {options && (
                //TODO fill in the page options with options logo and functionality
                <div className="page-options">

                </div>

            )}

        </div>
    )
}

export default PageTitle
